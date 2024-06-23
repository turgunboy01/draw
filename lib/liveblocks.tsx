import { createClient } from "@liveblocks/client";
import { Liveblocks } from "@liveblocks/node";
const liveblocks = createClient({
  //   publicApiKey:
  //     "pk_prod_saWVigEEW5uztxm-qDBb1GFwyOXAkg2YVINc849ebL_TuK-OBycAVPnmUJQEA6D6",
  authEndpoint: "/api/liveblocks-auth", // Ehtimol, shu yerga avtentifikatsiya uchun endpointni qo'shing
});

export default liveblocks;

export const liveblock = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});
