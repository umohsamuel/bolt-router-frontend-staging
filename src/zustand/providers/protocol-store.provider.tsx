"use client";

import { type ReactNode, createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

import {
  type ProtocolStore,
  createProtocolStore,
  initProtocolStore,
} from "../store/protocol.store";

export type ProtocolStoreApi = ReturnType<typeof createProtocolStore>;

export const ProtocolStoreContext = createContext<ProtocolStoreApi | undefined>(
  undefined
);

export interface ProtocolStoreProviderProps {
  children: ReactNode;
}

export const ProtocolStoreProvider = ({
  children,
}: ProtocolStoreProviderProps) => {
  const storeRef = useRef<ProtocolStoreApi | null>(null);
  if (!storeRef.current) {
    storeRef.current = createProtocolStore(initProtocolStore());
  }

  return (
    <ProtocolStoreContext.Provider value={storeRef.current}>
      {children}
    </ProtocolStoreContext.Provider>
  );
};

export const useProtocolStore = <T,>(
  selector: (store: ProtocolStore) => T
): T => {
  const protocolStoreContext = useContext(ProtocolStoreContext);

  if (!protocolStoreContext) {
    throw new Error(
      `useProtocolStore must be used within ProtocolStoreProvider`
    );
  }

  return useStore(protocolStoreContext, selector);
};
