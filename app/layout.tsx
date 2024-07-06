import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Discount from "@/components/Discount";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timbu",
  description: "Next Generation Camera Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Discount />
      <Navbar />
          {children}

      </body>
    </html>
  );
}
