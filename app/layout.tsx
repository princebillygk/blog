import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BlogTemplate from "./blogs/template";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Billy's Blog",
  description:
    "A programming blog website created and managed by Prince Billy Graham Karmoker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>This is the root layout</h1>
        <BlogTemplate key={"key"}>{children}</BlogTemplate>
      </body>
    </html>
  );
}
