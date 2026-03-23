import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Link from "next/link";

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { home, postsPaths } from "@/paths";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Higa Connect",
  description:
    "Share deep memories that won't be forgotten --> Golden batch of Higa Model Boarding School",
  verification: {
    google: "YvVK2FNPpKQOR9adMQNaJduxKRkGffGM7XmsFuXDaCg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <nav className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/50 backdrop-blur w-full flex py-2.5 px-5 justify-between">
          <div>
            <Button asChild variant={'outline'}>
              <Link href={home()}>Home</Link>
            </Button>
          </div>
          <div>
            <Button asChild variant={'outline'}>
              <Link href={postsPaths()}>Posts</Link>
            </Button>
          </div>
        </nav>
        <main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden py-24 px-8 bg-secondary/20 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
