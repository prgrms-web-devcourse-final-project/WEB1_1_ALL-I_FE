import { create } from "zustand";

interface UserState {
  access_token: string;
  setAccessToken: (accToken: string) => void;
}

const useAuthStore = create<UserState>((set) => ({
  access_token: "",
  setAccessToken: (accToken) => set({ access_token: accToken }),
}));

export default useAuthStore;
