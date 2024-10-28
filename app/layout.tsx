import type { Metadata } from "next";
import { Arima } from 'next/font/google';
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Furkan İBİŞ",
  description: "Furkan İBİŞ Blog Sayfası",
  icons: {
    icon: "/favicon.ico",
  },
};

const arima = Arima({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
