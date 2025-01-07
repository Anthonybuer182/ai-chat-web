export const createUser = (set,get) => ({
    username: '',
    setUsername: (username) => {
        set({ username: username });
    },
    userid:'',
    setUserid: (userid) => {
        set({ userid: userid });
    },
})
export const createToken = (set,get) => ({
    token: '',
    setToken: (token) => {
        set({ token: token });
    },
})