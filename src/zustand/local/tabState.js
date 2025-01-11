export const createTab = (set,get) => ({
    tabNow: 'My',
    setTab: (tab) => set({ tabNow: tab }),
    tabs: {'Session':BiMessageDetail,'Explore':MdOutlineExplore,'Tool':VscTools,'My':IoPersonOutline},
})
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { IoPersonOutline } from "react-icons/io5";