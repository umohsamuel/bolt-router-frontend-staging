import type { Metadata } from "next";
import "./globals.css";
import { Oakes_Grotesk } from "@/fonts";
import { Toaster } from "react-hot-toast";
import { WagmiContextProvider } from "@/context";
import { headers } from "next/headers";
import { ZustandProvider } from "@/zustand/providers";
import { toastOptions } from "@/consts";

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
  const headersObj = await headers();
  const cookies = headersObj.get("cookie");

  return (
    <html lang="en">
      <body
        className={`${Oakes_Grotesk.variable} min-h-screen bg-[#080A18] font-oakes-grotesk text-[#DCDCE4] antialiased`}
      >
        <Toaster toastOptions={toastOptions} />
        <ZustandProvider>
          <WagmiContextProvider cookies={cookies}>
            {children}
          </WagmiContextProvider>
        </ZustandProvider>
      </body>
    </html>
  );
}
