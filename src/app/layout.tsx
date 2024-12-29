import type { Metadata } from "next";
import "./globals.css";
import { Oakes_Grotesk } from "@/fonts";
import { Toaster } from "react-hot-toast";
import { WagmiContextProvider } from "@/context";
import { headers } from "next/headers";
import { CrossSwapStoreProvider } from "@/zustand/providers";

export const metadata: Metadata = {
  title: "Bolt Router",
  description: "The Seamless Cross-Chain Swaps",
  icons: {
    icon: "/images/favicon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookies = (await headers()).get("cookie");

  return (
    <html lang="en">
      <body
        className={`${Oakes_Grotesk.variable} font-oakes-grotesk text-[#DCDCE4] antialiased`}
      >
        <Toaster />
        <CrossSwapStoreProvider>
          <WagmiContextProvider cookies={cookies}>
            {children}
          </WagmiContextProvider>
        </CrossSwapStoreProvider>
      </body>
    </html>
  );
}
