import { defineStore } from "pinia";

// define pinia store

export const useAvaliableHotels = defineStore("avaliableHotels", {
  state: () => ({
    hotelDetails: [],
    room_id: null,
  }),
  actions: {
    setDetails(details) {
      this.hotelDetails = details;
    },
    setRoomId(roomId) {
      this.room_id = roomId;
    },
  },
});
