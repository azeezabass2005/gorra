import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/contexts/theme-provider";
import TanstackQueryProvider from "@/contexts/tanstack-provider";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


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
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </body>
    </html>
  );
}
