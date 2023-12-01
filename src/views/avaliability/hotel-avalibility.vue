<template>
  <main-layout>
    <div class="main-container">
      <!-- Section to contain hotel rooms -->
      <section v-if="loading" class="hotel-images mx-auto">
        <!-- Loading state -->
        <p>Loading...</p>
      </section>
      <section v-else>
        <section class="hotel-images mx-auto">
          <div v-if="block" class="grid grid-cols-2 grid-rows-2 gap-x-10">
            <img
              class="rounded"
              :class="{
                'row-span-2 self-center min-w-670 max-w-820 min-h-400 max-h-452':
                  index === 0,
                'min-w-350 max-w-400 min-h-200 max-h-218 ': index == 1,
                'row-span-2 min-w-350 max-w-400 min-h-200 max-h-218':
                  index === 2,
              }"
              :src="photo.url_original"
              alt=""
              v-for="(photo, index) in hotelDetails.rooms[
                room_id
              ]?.photos.slice(0, 3)"
              :key="index"
            />
          </div>
          <div v-else class="grid grid-cols-2 grid-rows-2 gap-10">
            <img
              src="@/assets/room-1.png"
              class="row-span-2 self-center h-full"
              alt=""
            />
            <img src="@/assets/room2.png" alt="" />
            <img src="@/assets/room-3.png" alt="" class="row-span-2" />
          </div>
        </section>
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
            <p class="py-2">4.5 ( {{ hotelDetails.reviews_nrs }})</p>
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
              <p v-if="block">
                {{ hotelDetails.rooms[room_id]?.description }}
              </p>

              <p v-else>
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
            <div class="facilities m-15 py-15">
              <h6 class="text-lg font-semibold mb-2">Top facilities</h6>
              <div
                v-if="block"
                class="room-info grid"
                style="grid-template-columns: repeat(2, minmax(0, 250px))"
              >
                <div
                  class="py-1"
                  v-for="(highlight, index) in hotelDetails.rooms[
                    room_id
                  ]?.highlights.slice(0, 6)"
                  :key="index"
                >
                  {{ highlight.translated_name }}
                </div>
              </div>

              <p v-else>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus sequi fuga dicta laudantium odio corrupti quisquam
                accusantium ratione voluptates? Vel!
              </p>
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

      <section v-if="block" class="avaliable-rooms flex gap-4 justify-between">
        <div class="ad-image my-auto">
          <img src="@/assets/ad-reservation.png" alt="" />
        </div>

        <div class="room shadow-md mt-50">
          <div
            class="img"
            v-for="(photo, index) in hotelDetails.rooms[room_id]?.photos.slice(
              5,
              6
            )"
            :key="index"
          >
            <!-- Check if photo at index 6 exists, if not render default image -->
            <img
              v-if="hotelDetails.rooms[room_id]?.photos[5]"
              class="rounded min-w-350 max-w-400 min-h-200 max-h-218"
              :src="hotelDetails.rooms[room_id].photos[5].url_original"
              alt=""
            />
            <img v-else src="@/assets/suite1.png" alt="Default Image" />
          </div>

          <h5>
            {{
              hotelDetails.rooms[room_id]?.bed_configurations[0]?.bed_types[0]
                .name
            }},
            {{
              hotelDetails.rooms[room_id]?.bed_configurations[0]?.bed_types
                .length
            }}
            {{
              hotelDetails.rooms[room_id]?.bed_configurations[0]?.bed_types
                .length > 1
                ? "beds"
                : "bed"
            }}
          </h5>
          <div class="room-info">
            <div class="flex gap-2 items-center">
              <img src="@/assets/bag.png" alt="" />
              <p>300 sq ft</p>
            </div>
            <div class="flex gap-2 items-center">
              <img src="@/assets/bag.png" alt="" />
              <p>Sleeps 3</p>
            </div>
            <div class="flex gap-2 items-center">
              <img src="@/assets/life.png" alt="" />
              <p>1 double bed and 1 twin bed</p>
            </div>
          </div>
          <button
            class="px-12 py-18 bg-blueColor-100 text-white w-full mx-auto rounded-md"
          >
            Reserve suite
          </button>
        </div>
        <div class="room shadow-md mt-50">
          <div
            class="img"
            v-for="(photo, index) in hotelDetails.rooms[room_id]?.photos.slice(
              6,
              7
            )"
            :key="index"
          >
            <!-- Check if photo at index 6 exists, if not render default image -->
            <img
              v-if="hotelDetails.rooms[room_id]?.photos[6]"
              class="rounded min-w-350 max-w-400 min-h-200 max-h-218"
              :src="hotelDetails.rooms[room_id].photos[6].url_original"
              alt=""
            />
            <img v-else src="@/assets/suite2.png" alt="Default Image" />
          </div>
          <h5>
            {{
              hotelDetails.rooms[room_id]?.bed_configurations[0]?.bed_types[0]
                .name
            }},
            {{
              hotelDetails.rooms[room_id]?.bed_configurations[0]?.bed_types
                .length
            }}
            {{
              hotelDetails.rooms[room_id]?.bed_configurations[0]?.bed_types
                .length > 1
                ? "beds"
                : "bed"
            }}
          </h5>
          <div class="room-info">
            <div class="flex gap-2 items-center">
              <img src="@/assets/bag.png" alt="" />
              <p>300 sq ft</p>
            </div>
            <div class="flex gap-2 items-center">
              <img src="@/assets/bag.png" alt="" />
              <p>Sleeps 3</p>
            </div>
            <div class="flex gap-2 items-center">
              <img src="@/assets/life.png" alt="" />
              <p>1 double bed and 1 twin bed</p>
            </div>
          </div>
          <button
            class="px-12 py-18 bg-blueColor-100 text-white w-full mx-auto rounded-md"
          >
            Reserve suite
          </button>
        </div>
      </section>
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
import { useSearchResultStore } from "@/store/modules/searchResults";
import { onMounted, computed, ref } from "vue";

const searchResultStore = useSearchResultStore();
const props = defineProps(["hotelId"]);
const loading = ref(true);
const hotelDetails = computed(() => searchResultStore.details);
const block = computed(() => hotelDetails.value?.block?.[0]);
const room_id = computed(() => block.value?.room_id);
onMounted(async () => {
  await searchResultStore.setHotelId(props.hotelId);
  await searchResultStore.fetchDetails();
  loading.value = false;
});
</script>
