import { defineStore } from "pinia";
import axios from "axios";

export const useSearchResultStore = defineStore("searchResult", {
  state: () => ({
    APIkey: "e9503fb4aemshac3c85ed12de3ap15fdf4jsn87b33658df9e",
    destinations: [],
    hotels: [],
    selectedDestination: null,
    sortOptions: [],
    selectedSortOption: null,
    form: {
      selectedDestination: null,
      checkIn: "",
      checkOut: "",
      rooms: 1,
      guests: 1,
      minBudget: null,
      maxBudget: null,
    },
    selectedHotel: null,
    details: [],
  }),

  actions: {
    // Fetch destinations
    async fetchDestinations() {
      try {
        const response = await axios.get(
          "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
          {
            params: { query: "egypt" },
            headers: {
              "X-RapidAPI-Key": this.APIkey,
              "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
            },
          }
        );
        this.destinations = response.data.data.map(destination => ({
          dest_id: destination.dest_id,
          city_name: destination.city_name,
        }));
      } catch (error) {
        console.error(error);
      }
    },

    async searchHotels(
      destinationId,
      checkIn,
      checkOut,
      rooms,
      guests,
      sortOption,
      minBudget,
      maxBudget
    ) {
      try {
        const response = await axios.get(
          "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
          {
            params: {
              dest_id: destinationId,
              search_type: "CITY",
              arrival_date: checkIn,
              departure_date: checkOut,
              adults: guests,
              room_qty: rooms,
              sort_by: sortOption,
              price_min: minBudget,
              price_max: maxBudget,
            },
            headers: {
              "X-RapidAPI-Key": this.APIkey,
              "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
            },
          }
        );
        this.hotels = response.data.data.hotels;

        console.log(this.hotels);
      } catch (error) {
        console.error(error);
      }
    },

    // Set form data
    setFormData(data) {
      this.form = { ...this.form, ...data };
    },

    async fetchSortOptions() {
      try {
        const response = await axios.get(
          "https://booking-com15.p.rapidapi.com/api/v1/hotels/getSortBy",
          {
            params: {
              dest_id: this.selectedDestination,
              search_type: "CITY",
              arrival_date: this.form.checkIn,
              departure_date: this.form.checkOut,
              adults: this.form.guests,
              room_qty: this.form.rooms,
            },
            headers: {
              "X-RapidAPI-Key": this.APIkey,
              "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
            },
          }
        );
        this.sortOptions = response.data.data;
        console.log(this.sortOptions);
      } catch (error) {
        console.error(error);
      }
    },

    // Set the selected sort option
    setSelectedSortOption(optionId) {
      this.selectedSortOption = optionId;

      this.searchHotels(
        this.form.selectedDestination,
        this.form.checkIn,
        this.form.checkOut,
        this.form.rooms,
        this.form.guests,
        this.selectedSortOption
      );
    },

    // setting the budget
    setBudgetRange(minBudget, maxBudget) {
      this.form.minBudget = minBudget;
      this.form.maxBudget = maxBudget;

      this.searchHotels(
        this.form.selectedDestination,
        this.form.checkIn,
        this.form.checkOut,
        this.form.rooms,
        this.form.guests,
        this.selectedSortOption,
        this.form.minBudget,
        this.form.maxBudget
      );
      // console.log(this.hotels.length);
    },

    getHotelCountInBudget(min, max) {
      return this.hotels.filter(hotel => {
        const price = hotel.property.priceBreakdown.grossPrice.value;
        return price >= min && price <= max;
      }).length;
    },

    //fetching hotel details
    async fetchDetails() {
      try {
        const response = await axios.get(
          "https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails",
          {
            params: {
              hotel_id: this.selectedHotel,
              arrival_date: this.form.checkIn,
              departure_date: this.form.checkOut,
              adults: this.form.guests,
              room_qty: this.form.rooms,
            },
            headers: {
              "X-RapidAPI-Key": this.APIkey,
              "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
            },
          }
        );
        this.details = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },

    //set the hotel id
    setHotelId(hotel_id) {
      this.selectedHotel = hotel_id;
      console.log(hotel_id);
      console.log(this.selectedHotel);
    },
  },
});
