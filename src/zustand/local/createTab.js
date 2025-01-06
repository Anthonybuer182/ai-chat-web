export const createTab = (set,get) => ({
    tabNow: 'Explore',
    setTab: (tab) => set({ tabNow: tab }),
    tabs: ['Explore','Tool','My'],
})