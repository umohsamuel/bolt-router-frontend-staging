import { createStore } from 'zustand/vanilla'

export type CrossSwapState = {
 timelineCurrentStep: number;

}

export type CrossSwapActions = {
 setCrossSwapStore: <K extends keyof CrossSwapState>(
  field: K,
  valueOrUpdater: CrossSwapState[K] | ((prev: CrossSwapState[K]) => CrossSwapState[K])
) => void
}

export type CrossSwapStore = CrossSwapState & CrossSwapActions

export const initCrossSwapStore = (): CrossSwapState => {
  return { timelineCurrentStep: 0 }
}

export const defaultInitState: CrossSwapState = {
  timelineCurrentStep: 0,
}

export const createCrossSwapStore = (
  initState: CrossSwapState = defaultInitState,
) => {
  return createStore<CrossSwapStore>()((set) => ({
    ...initState,
    setCrossSwapStore: (field, valueOrUpdater) => set((state) => ({
     [field]: typeof valueOrUpdater === 'function'
       ? valueOrUpdater(state[field])
       : valueOrUpdater
    } as Pick<CrossSwapState, typeof field>))
  }))
}
