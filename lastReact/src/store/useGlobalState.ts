/**
 * @author Leroy
 * 这里存放基础的全局状态
 */

import { create } from "zustand";

type State = {
  bears: number;
};

type Actions = {
  increasePopulation: () => () => void;
  removeAllBears: () => () => void;
};

const useStore = create<State & Actions>((set): any => ({
  bears: 0,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export { useStore };
