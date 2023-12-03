import { defineStore } from "pinia";

export const useTripStore = defineStore("useTripStore", {
  state: () => ({
    trips: [],
  }),
  actions: {
    setTrip(trip) {
      this.trips = trip;
    },
  },
});
//hgeb data mn reserved(ama ados 3la booked ha set) w a7otha hena msln w b3den a-loop 3leha fl file#1
