import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Ton-keeper",
  description: "Task page",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="">{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  );
}
