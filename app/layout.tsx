import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import TopNavbar from "@/components/landing/top-navbar";
import BottomNavbar from "@/components/landing/bottom-navbar";
import ChatBot from "@/components/ChatBot";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "DevDarbo | PERSONAL PORTFOLIO",
  icons: {
    icon: "/me.ico",
    shortcut: "/me.ico", 
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", outfit.variable)}
    suppressHydrationWarning
    >
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <TopNavbar />
          {children}
          <ChatBot />
          <BottomNavbar />
        </ThemeProvider>
      </body>
    </html>
  );
}