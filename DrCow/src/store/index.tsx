/**
 * @author Leroy
 * 全局状态，记录路牌
*/

import { create } from "zustand";

interface useStoreType {
  navigationSign: string;
  updateNavigationSign: (v: string) => void;
}

const useStore = create<useStoreType>((set) => ({
  navigationSign: "document",
  updateNavigationSign: (v) => set({ navigationSign: v }),
}));

export { useStore };
