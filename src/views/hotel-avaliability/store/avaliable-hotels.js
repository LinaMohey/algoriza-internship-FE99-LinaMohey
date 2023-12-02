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

// ana dlw2ty 3yza el hotel info we l images b3to, 3yza ab3t l data de fl store we astkhdmha fl reservation comp de awel fekra f dmaghy lel data

//keda ana mfrod ageb l price hwa fl api.. bs i didnt use it fl hotel-avaliability nfsha. tb ana mmkn a3ml component we msh lazm astkhdmha msln hgrb de awel fekra el hya a3ml file feha price w get l data mn l store b3den ab3tha lel store hena w astkhdmha fl rserved info #1 number one idea
//problem=> ana kda hageb  hotelDetails ezay w mfesh prop? agrb a3mla bl provide w inject msln #1.1 , swany tb mana mmkn akhod hotel details a7otha fl store asln?? :) bdal kol l ana 3mlto da #2

//problem in hotel name in results

//hotel reviews  in reserved.

//hotel images problem in avaliability
