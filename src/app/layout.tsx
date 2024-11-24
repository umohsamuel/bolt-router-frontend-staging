import type { Metadata } from "next";
import "./globals.css";
import { Oakes_Grotesk } from "@/fonts";

export const metadata: Metadata = {
  title: "Bolt Router",
  description: "The Seamless Cross-Chain Swaps",
  icons: {
    icon: "/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Oakes_Grotesk.variable} font-oakes-grotesk antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
