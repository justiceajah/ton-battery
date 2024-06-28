import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Header } from "@/components/Header";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Bone Cracking",
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
          <main className="z-[20]">{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  );
}
