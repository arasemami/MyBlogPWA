import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My PWA App",
  description: "An offline-first Next.js app with next-pwa",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-512x512.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
