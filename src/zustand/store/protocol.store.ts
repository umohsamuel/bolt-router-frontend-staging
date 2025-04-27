import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";
import { initProtocol } from "@/lib/protocol";

interface ProtocolType {
  name: string;
  icon: string | React.ReactNode;
}

export type ProtocolState = {
  selectedProtocol: ProtocolType;
};

export type ProtocolActions = {
  setSelectedProtocol: (value: ProtocolType) => void;
  setProtocolStore: <K extends keyof ProtocolState>(
    field: K,
    valueOrUpdater:
      | ProtocolState[K]
      | ((prev: ProtocolState[K]) => ProtocolState[K])
  ) => void;
};

export type ProtocolStore = ProtocolState & ProtocolActions;

export const initProtocolStore = (): ProtocolState => {
  return {
    selectedProtocol: initProtocol,
  };
};

export const defaultInitState: ProtocolState = {
  selectedProtocol: initProtocol,
};

export const createProtocolStore = (
  initState: ProtocolState = defaultInitState
) => {
  return createStore<ProtocolStore>()(
    persist(
      (set) => ({
        ...initState,
        setSelectedProtocol: (value) => set({ selectedProtocol: value }),
        setProtocolStore: (field, valueOrUpdater) =>
          set(
            (state) =>
              ({
                [field]:
                  typeof valueOrUpdater === "function"
                    ? valueOrUpdater(state[field])
                    : valueOrUpdater,
              }) as Pick<ProtocolState, typeof field>
          ),
      }),
      {
        name: "protocol-storage",
      }
    )
  );
};
