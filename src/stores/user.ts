import zustand from "zustand";

interface StateInterface {
  accessToken: null | string;
  userId: null | number;
  fullName: null | string;
}

interface AccessorInterface {
  login: (accessToken: string, userId: number, fullName: string) => void;
  logout: () => void;
}

type ZustandType = StateInterface & AccessorInterface;

export const useUserStore = zustand<ZustandType>((set) => ({
  // state
  accessToken: null,
  userId: null,
  fullName: null,

  // accessor - login
  login: (accessToken: string, userId: number, fullName: string) => set({
    accessToken: accessToken,
    userId: userId,
    fullName: fullName,
  }),

  // accessor - logout
  logout: () => set({
    accessToken: null,
    userId: null,
    fullName: null,
  }),
}));
