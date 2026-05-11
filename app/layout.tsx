import type {
  Metadata,
  Viewport,
} from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#101010",
};

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_TITLE,
  description:
    process.env.NEXT_PUBLIC_DESC,

  manifest: "/radio/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle:
      "black-translucent",
    title:
      process.env.NEXT_PUBLIC_TITLE,
  },

  icons: {
    icon: "/radio/icon.svg",
    apple:
      "/radio/icons/icon-192.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}
