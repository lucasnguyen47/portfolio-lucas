import type React from "react";
import type { Metadata } from "next";

import "./globals.css";

import { Inter, Geist_Mono as V0_Font_Geist_Mono } from "next/font/google";

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Initialize Inter font with weights 400, 500, 700 (commonly used)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lucas Nguyen - Portfolio",
  description: "Trang portfolio sáng tạo và chuyên nghiệp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${inter.variable} font-sans antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
