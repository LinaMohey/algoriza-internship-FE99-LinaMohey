<template>
  <main-layout>
    <div class="main-container">
      <!-- Section to contain hotel rooms -->
      <section v-if="loading" class="hotel-images mx-auto">
        <p>Loading...</p>
      </section>
      <section v-else>
        <!-- hotel images -->
        <hotel-images
          :hotelDetails="hotelDetails"
          :block="block"
          :room_id="room_id"
        >
        </hotel-images>
      </section>

      <!-- overview and rooms nav links -->
      <navigation-links> </navigation-links>

      <!-- hotel details  -->
      <section
        class="hotel-details mt-10 flex justify-between"
        v-if="hotelDetails"
      >
        <section id="overview  m-20 rounded shadow-md">
          <hotel-info :hotelDetails="hotelDetails"> </hotel-info>

          <!-- rooms overview section -->
          <div
            id="overview"
            class="overview-container rounded-m shadow-md max-w-810 bg-white id"
          >
            <!-- room overview content -->
            <rooms-overview :hotelDetails="hotelDetails"> </rooms-overview>

            <!-- Top facilities -->
            <rooms-facilities
              :hotelDetails="hotelDetails"
              :block="block"
              :room_id="room_id"
            >
            </rooms-facilities>
          </div>
        </section>
        <!-- map and area section -->
        <section class="map-section">
          <hotel-map> </hotel-map>

          <!-- discover the area -->
          <explore-area> </explore-area>
        </section>
      </section>

      <!-- avaliable rooms  -->
      <section v-if="block" class="avaliable-rooms flex gap-4 justify-between">
        <!-- ad static image -->
        <div class="ad-image my-auto">
          <img src="@/assets/ad-reservation.png" alt="" />
        </div>

        <div class="room shadow-md mt-50" id="rooms">
          <!-- rooms images if exist -->
          <rooms-images
            :hotelDetails="hotelDetails"
            :block="block"
            :room_id="room_id"
          >
          </rooms-images>

          <!--  the header of each room that has the type of bed and length if exist -->
          <bed-type
            :hotelDetails="hotelDetails"
            :block="block"
            :room_id="room_id"
          >
          </bed-type>

          <!-- rooms spec -->
          <rooms-info
            :hotelDetails="hotelDetails"
            :block="block"
            :room_id="room_id"
          >
          </rooms-info>

          <!-- reserve button to direct to booking -->
          <router-link
            :to="{
              name: 'reservation',
            }"
            class="px-12 py-18 bg-blueColor-100 text-white w-full mx-auto rounded-md"
          >
            Reserve suite
          </router-link>
        </div>

        <div class="room shadow-md mt-50">
          <!-- rooms images if exist -->
          <rooms-images
            :hotelDetails="hotelDetails"
            :block="block"
            :room_id="room_id"
          >
          </rooms-images>

          <!--  the header of each room that has the type of bed and length if exist -->
          <bed-type
            :hotelDetails="hotelDetails"
            :block="block"
            :room_id="room_id"
          >
          </bed-type>

          <!-- rooms spec -->
          <rooms-info
            :hotelDetails="hotelDetails"
            :block="block"
            :room_id="room_id"
          >
          </rooms-info>

          <!-- reserve button to direct to booking -->
          <router-link
            :to="{
              name: 'reservation',
            }"
            class="px-12 py-18 bg-blueColor-100 text-white w-full mx-auto rounded-md"
          >
            Reserve suite
          </router-link>
        </div>
      </section>

      <!-- if there's no avaliable room -->
      <div
        v-else
        class="shadow-md mt-50 bg-red-400 p-20 text-center text-lg text-bold"
      >
        No rooms available
      </div>
    </div>
    <warning-section> </warning-section>
  </main-layout>
</template>

<script setup>
import { useSearchResultStore } from "@/views/search-results/store/searchResults";
import { useAvaliableHotels } from "@/views/hotel-avaliability/store/avaliable-hotels";
import { onMounted, computed, ref } from "vue";
import hotelInfo from "./hotels/hotel-info.vue";
import hotelImages from "./hotels/hotel-images.vue";
import roomsInfo from "./rooms/rooms-info.vue";
import roomsImages from "./rooms/rooms-images.vue";
import roomsOverview from "./rooms/rooms-overview.vue";
import roomsFacilities from "./rooms/rooms-facilities.vue";
import bedTypes from "./rooms/bed-type.vue";
import navigationLinks from "./rooms/navigation-links.vue";
import exploreArea from "./hotels/explore-area.vue";
import hotelMap from "./hotels/hotel-map.vue";

const searchResultStore = useSearchResultStore();
const avaliableHotels = useAvaliableHotels();

const props = defineProps(["hotelId"]);
const loading = ref(true);
const hotelDetails = computed(() => searchResultStore.details);
const block = computed(() => hotelDetails.value?.block?.[0]);
const room_id = computed(() => block.value?.room_id);

const setHotelDetails = avaliableHotels.setDetails(hotelDetails);
const setRoomId = avaliableHotels.setRoomId(room_id);

//fetching the details of each hotel on mounted by setting the hotel id specific to it
onMounted(async () => {
  await searchResultStore.setHotelId(props.hotelId);
  await searchResultStore.fetchDetails();
  loading.value = false;
});
</script>
