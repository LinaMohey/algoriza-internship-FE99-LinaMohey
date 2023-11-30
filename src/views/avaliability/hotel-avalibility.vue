<template>
  <main-layout>
    <div class="main-container">
      <!-- Section to contain hotel rooms -->
      <section class="hotel-images mx-auto flex justify-center items-center">
        <div class="grid grid-cols-2 grid-rows-2 gap-4">
          <img
            src="@/assets/room-1.png"
            class="row-span-2 self-center h-full"
            alt=""
          />
          <img src="@/assets/room2.png" alt="" />
          <img src="@/assets/room-3.png" alt="" class="row-span-2" />
        </div>
      </section>

      <nav class="links shadow-sm py-20">
        <a href="#overview" class="mx-5 border-b-blueColor-100"> Overview</a>
        <a href="#rooms"> Rooms</a>
      </nav>

      <section
        class="hotel-details mt-10 flex justify-between"
        v-if="hotelDetails"
      >
        <section id="overview  m-20 rounded shadow-md">
          <div class="hotel-info my-40 mx-3">
            <h4 class="py-2">{{ hotelDetails.hotel_name }}</h4>
            <p class="py-2">Rating (reviews)</p>
            <div class="address flex gap-2">
              <div class="location-image">
                <img src="@/assets/location.png" alt="" />
              </div>
              <h4>{{ hotelDetails.address }}</h4>
            </div>
          </div>

          <div
            class="overview-container rounded-m shadow-md max-w-810 bg-white"
          >
            <!-- Overview content -->
            <div class="overview-content px-4">
              <h4 class="text-lg font-semibold m-15">Overview</h4>
              <!-- <p>{{ hotelDetails.rooms[room_id].description }}</p> -->
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus sequi fuga dicta laudantium odio corrupti quisquam
                distinctio! Doloremque expedita quidem, a temporibus aliquam
                incidunt, aliquid veritatis corporis, harum nihil nulla
                molestiae inventore. Incidunt ipsam quis dolore quod libero
                neque. Neque eligendi quia ullam consectetur, nobis veniam
                accusantium ratione voluptates? Vel!
              </p>
              <hr class="border-t border-gray-300 my-4" />
            </div>

            <!-- Top facilities -->
            <div class="facilities m-15">
              <h6 class="text-lg font-semibold mb-2">Top facilities</h6>
              <div
                v-for="facility in hotelDetails.top_ufi_benefits"
                :key="facility"
                class="flex items-center mb-2"
              >
                <img src="" alt="" class="mr-2" />
                <p>{{ facility.translated_name }}</p>
              </div>
            </div>
          </div>
        </section>

        <section class="map-section">
          <div class="map"><img src="@/assets/map.png" alt="" /></div>
          <div class="explore-area my-40">
            <h4 class="mb-20">Explore the area</h4>

            <div class="area flex justify-between my-2">
              <div class="area-info flex gap-2">
                <img src="@/assets/plane.png" area-info flexalt="" />
                <p>Hotel Penselvenyia</p>
              </div>
              <p class="distance">2 mins</p>
            </div>
            <div class="area flex justify-between my-2">
              <div class="area-info flex gap-2">
                <img src="@/assets/location2.png" alt="" />
                <p>Travis Bakery store house</p>
              </div>
              <p class="distance">10 mins drive</p>
            </div>
            <div class="area flex justify-between my-2">
              <div class="area-info flex gap-2">
                <img src="@/assets/location2.png" alt="" />
                <p>Olivia Johnson Garden</p>
              </div>
              <p class="distance">15 min drive</p>
            </div>
            <div class="area flex justify-between my-2">
              <div class="area-info flex gap-2">
                <img src="@/assets/location2.png" alt="" />
                <p>Hotel Penselvenyia</p>
              </div>
              <p class="distance">18 min drive</p>
            </div>
            <div class="area flex justify-between my-2">
              <div class="area-info flex gap-2">
                <img src="@/assets/location2.png" alt="" />
                <p>Hotel Penselvenyia</p>
              </div>
              <p class="distance">2 mins</p>
            </div>
            <div class="area flex justify-between my-2">
              <div class="area-info flex gap-2">
                <img src="@/assets/location2.png" alt="" />
                <p>Norman Opera Circus</p>
              </div>
              <p class="distance">32 mins drive</p>
            </div>
          </div>
        </section>
      </section>

      <section class="avaliable-rooms">
        <div class="ad-image">
          <!-- <img
          :src="photo.url"
          alt=""
          v-for="photo in hotelDetails.rooms[hotel_id].photos"
          :key="photo.url"
        /> -->
        </div>

        <div class="rooms">
          <div class="img">
            <img src="" alt="" />
          </div>
        </div>

        <!-- <h5>
        {{
          hotelDetails.rooms[room_id].bed_configurations[0].bed_types[0].name
        }},
        {{ hotelDetails.rooms[room_id].bed_configurations[0].bed_types.length }}
        {{
          hotelDetails.rooms[room_id].bed_configurations[0].bed_types.length > 1
            ? "beds"
            : "bed"
        }}
      </h5> -->

        <div class="room-info">
          <!-- <div
          v-for="highlight in hotelDetails.rooms[room_id].highlights"
          :key="highlight.id"
        >
          {{ highlight.translated_name }}
        </div> -->
          <!-- <button>Reserve suite</button> -->
        </div>
      </section>
    </div>
  </main-layout>
</template>

<script setup>
// Access route params as props
import { useSearchResultStore } from "@/store/modules/searchResults";
import { onMounted, computed } from "vue";
const searchResultStore = useSearchResultStore();

const props = defineProps(["hotelId"]);
const hotelDetails = computed(() => searchResultStore.details);

console.log(hotelDetails);

onMounted(() => {
  console.log(props.hotelId);
  searchResultStore.setHotelId(props.hotelId);
  searchResultStore.fetchDetails();
  console.log(hotelDetails.rooms);
});
</script>

<style scoped>
body {
}
</style>
