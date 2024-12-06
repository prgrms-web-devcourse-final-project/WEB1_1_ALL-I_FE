import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  access_token: string;
  setAccessToken: (accToken: string) => void;
}

const useAuthStore = create(
  persist<UserState>(
    (set) => ({
      access_token: "",
      setAccessToken: (accToken) => set({ access_token: accToken }),
    }),
    {
      name: "userTokenStorage",
    }
  )
);

export default useAuthStore;
