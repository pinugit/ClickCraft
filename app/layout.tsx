import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import TopBar from "./components/Topbar/TopBar";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CickCraft",
  description: "create beautiful website with no code!!",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          font.className + " flex flex-col h-screen w-screen bg-[--bg-tertiary]"
        }
      >
        <TopBar />
        {children}
      </body>
    </html>
  );
}
