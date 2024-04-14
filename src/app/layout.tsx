import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/contexts/theme-provider";
import TanstackQueryProvider from "@/contexts/tanstack-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gorra | Hats",
  description: "At Gorra, we sell varieties of hats that are suitable for any use you might need it for, we sell different brands of hat including the most popular brands out there",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider>
            <TanstackQueryProvider>
              {children}
            </TanstackQueryProvider>
          </ThemeProvider>
          <Toaster />
        </body>
    </html>
  );
}
