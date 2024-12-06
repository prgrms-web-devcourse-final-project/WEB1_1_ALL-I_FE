import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  access_token: string | null;
  setAccessToken: (accToken: string) => void;
  logout: () => void;
}

const useAuthStore = create(
  persist<UserState>(
    (set) => ({
      access_token: "",
      setAccessToken: (accToken) => set({ access_token: accToken }),
      logout: () => {
        set({ access_token: null });
        window.location.href = "/login";
      },
    }),
    {
      name: "userTokenStorage",
    }
  )
);

export default useAuthStore;
