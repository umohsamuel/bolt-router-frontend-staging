"use client";

import { type ReactNode, createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

import {
  type CrossSwapStore,
  createCrossSwapStore,
  initCrossSwapStore,
} from "../cross-swap-store";

export type CrossSwapStoreApi = ReturnType<typeof createCrossSwapStore>;

export const CrossSwapStoreContext = createContext<
  CrossSwapStoreApi | undefined
>(undefined);

export interface CrossSwapStoreProviderProps {
  children: ReactNode;
}

export const CrossSwapStoreProvider = ({
  children,
}: CrossSwapStoreProviderProps) => {
  const storeRef = useRef<CrossSwapStoreApi | null>(null);
  if (!storeRef.current) {
    storeRef.current = createCrossSwapStore(initCrossSwapStore());
  }

  return (
    <CrossSwapStoreContext.Provider value={storeRef.current}>
      {children}
    </CrossSwapStoreContext.Provider>
  );
};

export const useCrossSwapStore = <T,>(
  selector: (store: CrossSwapStore) => T
): T => {
  const crossSwapStoreContext = useContext(CrossSwapStoreContext);

  if (!crossSwapStoreContext) {
    throw new Error(
      `useCrossSwapStore must be used within CrossSwapStoreProvider`
    );
  }

  return useStore(crossSwapStoreContext, selector);
};
