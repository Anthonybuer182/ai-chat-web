import { create } from "zustand";
import { createTab } from "./local/tabState";
import { createUser } from "./local/userState";
export const useAppStore = create((set, get) => ({
    ...createTab(set, get),
    ...createUser(set, get),
}));