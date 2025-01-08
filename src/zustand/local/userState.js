export const createUser = (set, get) => ({
    user: {
        id: '',
        username: '',
        portrait: '',
    },
    setUser: (user) => {
        set({ user });
    },
})
export const createToken = (set,get) => ({
    token: '',
    setToken: (token) => {
        set({ token: token });
    },
})