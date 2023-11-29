<template>
  <div class="main-container">
    <!-- Section to contain hotel rooms -->
    <section class="hotel-images">
      <div>
        <img src="" alt="" />
      </div>
    </section>

    <nav class="links">
      <a href="#overview"> Overview</a>
      <a href=""> Rooms</a>
    </nav>

    <section class="hotel-details">
      <section id="overview">
        <div class="hotel-info">
          <h4>{{ hotelDetails.hotel_name }}</h4>
          <p>Rating (reviews)</p>
          <div class="address">
            <h4>{{ hotelDetails.address }}</h4>
          </div>
        </div>

        <div class="overview-content">
          <h4>Overview</h4>
          <p>
            {{ hotelDetails.rooms[room_id].description }}
          </p>
        </div>

        <div class="facilities">
          <h6>Top facilities</h6>
          <div
            v-for="facility in hotelDetails.top_ufi_benefits"
            :key="facility"
          >
            <img src="" alt="" />
            <p>{{ facility.translated_name }}</p>
          </div>
        </div>
      </section>

      <section class="map-section">
        <div class="map"></div>
        <div class="explore-area">
          <h4>Explore the area</h4>

          <div class="area">
            <div class="">
              <img src="" alt="" />
              <p>Hotel Penselvenyia</p>
            </div>
            <p class="distance">2 mins</p>
          </div>
          <div class="area">
            <div class="">
              <img src="" alt="" />
              <p>Travis Bakery store house</p>
            </div>
            <p class="distance">10 mins drive</p>
          </div>
          <div class="area">
            <div class="">
              <img src="" alt="" />
              <p>Olivia Johnson Garden</p>
            </div>
            <p class="distance">15 min drive</p>
          </div>
          <div class="area">
            <div class="">
              <img src="" alt="" />
              <p>Hotel Penselvenyia</p>
            </div>
            <p class="distance">18 min drive</p>
          </div>
          <div class="area">
            <div class="">
              <img src="" alt="" />
              <p>Hotel Penselvenyia</p>
            </div>
            <p class="distance">2 mins</p>
          </div>
          <div class="area">
            <div class="">
              <img src="" alt="" />
              <p>Norman Opera Circus</p>
            </div>
            <p class="distance">32 mins drive</p>
          </div>
        </div>
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

          <h5>
            {{
              hotelDetails.rooms[room_id].bed_configurations[0].bed_types[0]
                .name
            }},
            {{
              hotelDetails.rooms[room_id].bed_configurations[0].bed_types.length
            }}
            {{
              hotelDetails.rooms[room_id].bed_configurations[0].bed_types
                .length > 1
                ? "beds"
                : "bed"
            }}
          </h5>

          <div class="room-info">
            <div
              v-for="highlight in hotelDetails.rooms[room_id].highlights"
              :key="highlight.id"
            >
              {{ highlight.translated_name }}
            </div>
            <button>Reserve suite</button>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup>
// Access route params as props
import { useSearchResultStore } from "@/store/modules/searchResults";
import { onBeforeMount, onMounted } from "vue";

const props = defineProps(["hotelId"]);
const searchResultStore = useSearchResultStore();

const hotelDetails = searchResultStore.details;
console.log(hotelDetails);
const room_id = hotelDetails.block[0].room_id;

const selectedHotel = searchResultStore.selectedHotel;

onBeforeMount(() => {
  searchResultStore.setHotelId(props.hotelId);

  // Update the store with the hotelId
});
onMounted(() => {
  searchResultStore.fetchDetails();
});
</script>
