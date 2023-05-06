import { create } from "zustand";

// 中间件先不用
import { devtools, persist } from "zustand/middleware";

interface BearState {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

const useBearStore = create<BearState>((set) => ({
  // 属性
  bears: 0,

  // action动作， state 类似this
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),

  // action动作
  removeAllBears: () => set({ bears: 0 }),
}));

export default useBearStore;
