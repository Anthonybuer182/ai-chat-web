import { create } from "zustand";
import { createTab } from "./local/createTab";
export const useAppStore = create((set, get) => ({
    ...createTab(set, get)
}));