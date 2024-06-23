import { v } from "convex/values";

import { query } from "./_generated/server";
import { favorite } from "./board";

export const get = query({
  args: {
    orgId: v.string(),
    favorites: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    console.log("Identity object:", identity);

    const boards = await ctx.db
      .query("boards")
      .withIndex("by_org", (q) => q.eq("orgId", args.orgId))
      .order("desc")
      .collect();

    const boardsWidthFavoriteRalation = boards.map((board) => {
      return ctx.db
        .query("userFavirites")
        .withIndex("by_user_board", (q) =>
          q.eq("userId", identity.subject).eq("boardId", board._id)
        )
        .unique()
        .then((favorite) => {
          return {
            ...board,
            isFavorite: !!favorite,
          };
        });
    });

    const boardsWidthFavoriteBoolen = Promise.all(boardsWidthFavoriteRalation);
    return boardsWidthFavoriteBoolen;
  },
});
