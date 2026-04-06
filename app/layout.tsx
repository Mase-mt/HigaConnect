import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";

import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
    "The official home of the Golden Batch of Higa — the second batch of Higa Model Boarding School. 121 friends, 4 years of memories, and a bond that never fades. Stay connected, relive moments, and keep the golden spirit alive.",
    applicationName: "Higa",
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
    suppressHydrationWarning
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden py-24 px-8 bg-secondary/20 flex flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
