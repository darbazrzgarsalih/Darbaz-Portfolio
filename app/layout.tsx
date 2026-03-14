import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import TopNavbar from "@/components/landing/top-navbar";
import BottomNavbar from "@/components/landing/bottom-navbar";

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
    <html lang="en" className={cn("font-sans", outfit.variable)}>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <TopNavbar />
          {children}
          <BottomNavbar />
        </ThemeProvider>
      </body>
    </html>
  );
}