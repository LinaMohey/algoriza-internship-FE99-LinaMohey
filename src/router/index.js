import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/home-page.vue";
import Register from "@/views/authentication/register.vue";
import SignIn from "@/views/authentication/sign-in.vue";
import hotelResults from "@/views/search-results/hotel-results.vue";
import hotelAvaliability from "@/views/hotel-avaliability/hotel-avalibility.vue";
import Reservation from "@/views/hotel-reservation/reservation.vue";
import { useAuthStore } from "@/views/authentication/store/auth";
import reservedTrips from "@/views/my-trips/reserved-trips.vue";

const routes = [
  {
    path: "/",
    name: "home-page",
    component: HomePage,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: SignIn,
  },

  {
    path: "/hotel-result",
    name: "hotel-results",
    component: hotelResults,
    beforeEnter: (to, from, next) => {
      const AuthStore = useAuthStore();

      // Check if the user is authenticated
      if (AuthStore.isAuthenticated) {
        next(); // Continue to the route
      } else if (to.name === "sign-in" || to.name === "register") {
        next();
      } else {
        // Redirect to the sign-in page if not authenticated
        next("/sign-in");
      }
    },
  },

  {
    path: "/hotel-availability/:hotelId",
    name: "hotel-availability",
    component: hotelAvaliability,
    props: true, // This allows you to use route params as props in your component
  },
  {
    path: "/reservation",
    name: "reservation",
    component: Reservation,
  },
  {
    path: "/my-trips",
    name: "reserved-trips",
    component: reservedTrips,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
