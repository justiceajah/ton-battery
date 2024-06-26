import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";


export const metadata: Metadata = {
  title: "Bone Cracking",
  description: "Task page"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="font-audiNormal">
        <Providers>
          <main className="z-[20]">{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  );
}
