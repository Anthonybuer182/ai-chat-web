import { create } from "zustand";
import { createTab } from "./local/tabState";
import { createToken, createUser } from "./local/userState";
export const useAppStore = create((set, get) => ({
    ...createTab(set, get),
    ...createToken(set, get),
    ...createUser(set, get),
}));