import "./globals.css";
import { Rajdhani } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: {
    default: "Nithin Chary | Web Developer",
    template: "%s | Nithin Chary",
  },
  description:
    "Nithin Chary is a Web Developer specializing in modern, high-performance websites using React, Next.js, and clean UI design.",
  keywords: [
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "UI Developer",
    "Portfolio",
    "Nithin Chary",
  ],
  authors: [{ name: "Nithin Chary" }],
  creator: "Nithin Chary",

  metadataBase: new URL("https://dhanasreenithinchary.vercel.app"),

  openGraph: {
    title: "Nithin Chary | Web Developer",
    description:
      "Modern web developer focused on performance, clean UI, and scalable solutions.",
    url: "https://dhanasreenithinchary.vercel.app",
    siteName: "Nithin Chary Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nithin Chary Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nithin Chary | Web Developer",
    description:
      "Modern web developer focused on performance, clean UI, and scalable solutions.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rajdhani.variable}>
        {children}
        <BackToTop />

        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#0f2f28",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,.1)",
              boxShadow: "0 0 14px rgba(var(--primary-rgb), .45)",
            },
          }}
        />
      </body>
    </html>
  );
}
