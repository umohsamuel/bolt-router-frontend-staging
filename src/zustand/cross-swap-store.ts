import { createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware'

export type CrossSwapState = {
 timelineStep: number;
}

export type CrossSwapActions = {
  setTimelineStep: (value: number) => void;
 setCrossSwapStore: <K extends keyof CrossSwapState>(
  field: K,
  valueOrUpdater: CrossSwapState[K] | ((prev: CrossSwapState[K]) => CrossSwapState[K])
) => void
}

export type CrossSwapStore = CrossSwapState & CrossSwapActions

export const initCrossSwapStore = (): CrossSwapState => {
  return { timelineStep: 1 }
}

export const defaultInitState: CrossSwapState = {
  timelineStep: 1,
}

export const createCrossSwapStore = (
  initState: CrossSwapState = defaultInitState,
) => {
  return createStore<CrossSwapStore>()(persist((set) => ({
    ...initState,
    setTimelineStep: (value) => set({ timelineStep: value }),
    setCrossSwapStore: (field, valueOrUpdater) => set((state) => ({
     [field]: typeof valueOrUpdater === 'function'
       ? valueOrUpdater(state[field])
       : valueOrUpdater
    } as Pick<CrossSwapState, typeof field>))
  }),
    {
      name: 'cross-swap-storage', 
    },
  ),
)
}
