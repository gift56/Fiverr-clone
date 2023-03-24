import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = (set) => ({
  authUser: null,
  token: null,
  setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
  setToken: (token) => set((state) => ({ ...state, token: token })),
  removeAuthUser: () =>
    set({
      authUser: null,
      token: null,
    }),
});

const useAuthStore = create(
  persist(useStore, {
    name: "user",
  })
);

export default useAuthStore;
