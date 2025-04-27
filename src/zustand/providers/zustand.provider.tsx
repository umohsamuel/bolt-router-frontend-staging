import { PropsWithChildren } from "react";
import { CrossSwapStoreProvider } from "./cross-swap-store.provider";
import { ProtocolStoreProvider } from "./protocol-store.provider";

export default function ZustandProvider({ children }: PropsWithChildren) {
  return (
    <CrossSwapStoreProvider>
      <ProtocolStoreProvider>{children}</ProtocolStoreProvider>
    </CrossSwapStoreProvider>
  );
}
