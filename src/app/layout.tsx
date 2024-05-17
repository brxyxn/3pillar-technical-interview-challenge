import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainLayout from "@/layout/main-layout";
import "./globals.css";
import Providers from "@/layout/providers";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "3Pillar Global - Technical Interview",
  description: "3Pillar Global - Technical Interview",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Providers>
      <MainLayout>
        {children}
      </MainLayout>
    </Providers>
    </body>
    </html>
  );
}
