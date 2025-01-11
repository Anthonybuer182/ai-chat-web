const loadInitialState = () => {
    const token = localStorage.getItem('token') || '';
    const user = JSON.parse(localStorage.getItem('user')) || {};
    return { token, user };
  };
  
export const createUser = (set, get) => ({
    ...loadInitialState(), // 初始化时从 localStorage 加载 token 和 user
    setToken: (token) => {
      localStorage.setItem('token', token); // 更新 localStorage
      set({ token }); // 更新 Zustand Store
    },
    setUser: (user) => {
      localStorage.setItem('user', JSON.stringify(user)); // 更新 localStorage
      set({ user }); // 更新 Zustand Store
    },
    clearUser: () => {
      localStorage.removeItem('token'); // 清除 localStorage
      localStorage.removeItem('user'); // 清除 localStorage
      set({ token: '', user: {} }); // 更新 Zustand Store
    },
  });
  