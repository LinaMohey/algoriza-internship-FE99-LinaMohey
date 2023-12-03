<template>
  <navbar> </navbar>
  <div class="flex max-w-1350 mx-auto justify-evenly">
    <section class="reservation">
      <header class="mt-20">
        <h4 class="text-32 font-bold">Secure your reservation</h4>
      </header>
      <warning-section> </warning-section>

      <!-- user section -->
      <div class="user-info reservation-card">
        <!-- user info -->
        <user-form-title> </user-form-title>
        <!-- user form  -->
        <user-form> </user-form>
      </div>

      <!-- payment section-->
      <div class="payment reservation-card mt-35">
        <!-- payment form title -->
        <payment-form-title> </payment-form-title>
        <!-- cards -->
        <payment-cards> </payment-cards>
        <!-- payment form  -->
        <payment-form> </payment-form>
      </div>

      <!-- important info about booking -->
      <div class="user-info reservation-card mt-35 mb-100">
        <booking-info> </booking-info>
      </div>
    </section>

    <!-- reserved hotel section  -->
    <section class="reserved-hotel">
      <div class="room shadow-sm mt-50 bg-white rounded-b-md">
        <reserved-image> </reserved-image>
        <reserved-info> </reserved-info>
      </div>

      <!-- reserved hotel price -->
      <div class="price reservation-card mt-35 mb-100">
        <reserved-price> </reserved-price>
      </div>
    </section>
  </div>
</template>

<script setup>
import userFormTitle from "./user/user-form-title.vue";
import userForm from "./user/user-form.vue";
import paymentForm from "./payment/payment-form.vue";
import paymentFormTitle from "./payment/payment-form-title.vue";
import paymentCards from "./payment/payment-cards.vue";
import bookingInfo from "./booking-info.vue";
import reservedInfo from "./reserved-hotel/reserved-info.vue";
import reservedImage from "./reserved-hotel/reserved-image.vue";
import reservedPrice from "./reserved-hotel/reserved-price.vue";
import { onMounted } from "vue";
</script>
