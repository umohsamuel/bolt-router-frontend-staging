"use client";

import { wagmiAdapter, projectId } from "@/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit, useDisconnect } from "@reown/appkit/react";
import { mainnet, arbitrum } from "@reown/appkit/networks";
import React, { useEffect, type ReactNode } from "react";
import { WagmiProvider, type Config } from "wagmi";
// import { ClientOnly } from "@/components/layouts";

const queryClient = new QueryClient();

if (!projectId) {
  throw new Error("Project ID is not defined");
}

const metadata = {
  name: "Bolt Router",
  description: "The Seamless Cross-Chain Swaps",
  url: "http://localhost:3000",
  icons: ["/images/favicon.svg"],
};

export const appKitModalInstance = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, arbitrum],
  // defaultNetwork: mainnet,
  metadata: metadata,
  features: {
    analytics: true,
  },
  themeMode: "dark",
});

function WagmiContextProvider({
  children,
  // cookies,
}: {
  children: ReactNode;
  cookies: string | null;
}) {
  // const initialState = cookieToInitialState(
  //   wagmiAdapter.wagmiConfig as Config
  //   // cookies
  // );

  const { disconnect } = useDisconnect();

  async function handleDisconnect() {
    await disconnect();
  }

  useEffect(() => {
    if (
      typeof wagmiAdapter.wagmiConfig.connectors === "undefined" ||
      wagmiAdapter.wagmiConfig.connectors.length === 0
    ) {
      handleDisconnect();
    }
  }, [wagmiAdapter.wagmiConfig.connectors]);

  return (
    // <ClientOnly>
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig as Config}
      // initialState={initialState}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
    // </ClientOnly>
  );
}

export default WagmiContextProvider;
