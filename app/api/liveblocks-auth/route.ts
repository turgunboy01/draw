// pages/api/liveblocks-auth.ts
import { NextApiRequest, NextApiResponse } from "next";
import { auth, currentUser } from "@clerk/nextjs/server";
import { api } from "@/convex/_generated/api";
// import { convex } from "";
import { liveblock } from "@/lib/liveblocks";
import { convex } from "@/lib/covex";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { userId, orgId } = await auth();

    if (!userId) {
      return res.status(403).json({ message: "Ruxsat etilmagan" });
    }

    const user = await currentUser();

    if (!user) {
      return res.status(403).json({ message: "Ruxsat etilmagan" });
    }

    const { room } = req.body;

    if (!room) {
      return res.status(400).json({ message: "Room ID talab qilinadi" });
    }

    const board = await convex.query(api.board.get, { id: room });

    if (!board || board.orgId !== orgId) {
      return res.status(403).json({ message: "Ruxsat etilmagan" });
    }

    const userInfo = {
      name: user.firstName || "Teammate",
      picture: user.imageUrl,
    };

    const session = liveblock.prepareSession(user.id, { userInfo });
    const { status, body } = await session.authorize();

    res.status(status).send(body);
  } catch (error) {
    console.error("Liveblocks autentifikatsiyasida xato:", error);
    res.status(500).json({ message: "Ichki Server Xatosi" });
  }
}
