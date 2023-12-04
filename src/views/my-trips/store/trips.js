import { defineStore } from "pinia";

export const useTripStore = defineStore("useTripStore", {
  state: () => ({
    trips: [],
    name: "",
    reviews: null,
    checkIn: null,
    checkOut: null,
    hotelImage: null,
  }),
  actions: {
    addTrip(newTrip) {
      this.trips.push(newTrip);
    },
    setName(name) {
      this.name = name;
    },
    setReviews(reviews) {
      this.reviews = reviews;
    },
    setCheckIn(checkIn) {
      this.checkIn = checkIn;
    },
    setCheckOut(checkOut) {
      this.checkOut = checkOut;
    },
    setHotelImage(image) {
      this.hotelImage = image;
    },
  },
});

//hgeb data mn reserved(ama ados 3la booked ha set) w a7otha hena msln w b3den a-loop 3leha fl file#1
