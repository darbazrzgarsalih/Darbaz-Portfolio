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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", outfit.variable)}>
      <link rel="icon" type="image/svg+xml" href="https://darbodev.vercel.app/assets/me-Dv2SGOg_.jpg" />
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