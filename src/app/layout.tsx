import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
