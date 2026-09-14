import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Radio",
    short_name: "Radio",

    start_url: "/",
    scope: "/",

    display: "standalone",

    background_color: process.env.NEXT_PUBLIC_BACKGROUND_COLOR,
    theme_color: process.env.NEXT_PUBLIC_PLAYER_COLOR,

    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
