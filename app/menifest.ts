import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Radio",
    short_name: "Radio",

    start_url: "/radio/",
    scope: "/radio/",

    display: "standalone",

    background_color: process.env.NEXT_PUBLIC_BACKGROUND_COLOR,
    theme_color: process.env.NEXT_PUBLIC_PLAYER_COLOR,

    icons: [
      {
        src: "/radio/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/radio/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
