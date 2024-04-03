import {create} from "zustand";

interface Boolean {
  isActive: boolean;
  isCompleted: boolean;
  all: boolean;
  theme: string;
  setActive: () => void;
  setCompleted: () => void;
  setAll: () => void;
  setTheme: (theme: string) => void;
}
/*
  when i click on the completed button, isCompleted should be true but isActive should be false
  when i click on the active button, isActive should be true but isCompleted should be false
  when i click on the all button, and the all button is active, isActive and isCompleted should be false
*/

export const useFiltered = create<Boolean>((set) => ({

  isActive: false,
  isCompleted: false,
  all: true,
  theme: "dark",
  setActive: () => set((state) => ({isActive: true, isCompleted: false, all: false})),
  setCompleted: () => set((state) => ({isActive: false, isCompleted: true, all: false})),
  setAll: () => set((state) => ({isActive: false, isCompleted: false, all: true})),
  setTheme: (theme: string) => set((state) => ({theme: theme}))
}))