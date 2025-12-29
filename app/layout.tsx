import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jaival Patel",
  description:
    "Software Engineer & Data Scientist. Interactive portfolio with AI-powered terminal experience.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Jaival",
    "Patel",
    "Jaival Patel",
    "Software Engineer",
    "Data Scientist",
    "Machine Learning",
    "Cloud",
    "GCP",
    "AWS",
  ],
  authors: [{ name: "Jaival Patel" }],
  metadataBase: new URL("https://www.jaivalpatel.com"),
  openGraph: {
    title: "Jaival Patel",
    description: `Software Engineer & Data Scientist. Interactive portfolio with AI-powered terminal experience.`,
    url: "https://www.jaivalpatel.com",
    type: "website",
    images: [
      {
        url: "../public/Jaivalmeta.png",
        width: 1200,
        height: 630,
        alt: "Jaival Patel",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#1e1e1e",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-editor-bg text-text-primary">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
