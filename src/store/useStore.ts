import { defineStore } from "pinia";
import { State, Order, Profile } from "../types/general";

export const useStore = defineStore("store", {
  state: (): State => ({
    isLogged: false,
    profileData: null,
    profileOrders: null,
  }),
  actions: {
    storeData(profile: Profile | null) {
      this.profileData = profile;
    },
    authorize(logStatus: boolean) {
      this.isLogged = logStatus;
    },
    addProfileOrders(orders: Order[]) {
      this.profileOrders = orders;
    },
  },
});
