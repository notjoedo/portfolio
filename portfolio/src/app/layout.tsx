import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Particles from "@/components/particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joe Do",
  description: "Joe Do's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Header />
        <Particles
          className="absolute inset-0 pointer-events-none"
          quantity={50}
        />
        {children}
      </body>
    </html>
  );
}
