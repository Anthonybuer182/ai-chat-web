export const createTab = (set,get) => ({
    tabNow: 'Explore',
    setTab: (tab) => set({ tabNow: tab }),
    tabs: {'Explore':MdOutlineExplore,'Tool':VscTools,'My':IoPersonOutline},
})
import { MdOutlineExplore } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { IoPersonOutline } from "react-icons/io5";