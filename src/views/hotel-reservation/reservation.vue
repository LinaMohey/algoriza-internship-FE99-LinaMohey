<template>
  <navbar> </navbar>
  <div class="flex max-w-1350 mx-auto justify-evenly">
    <section class="reservation">
      <header>
        <h4>Secure your reservation</h4>
      </header>
      <warning-section> </warning-section>

      <!-- user info -->
      <user-form-title> </user-form-title>

      <!-- user form  -->
      <user-form> </user-form>

      <!-- payment section-->
      <div class="payment shadow-md max-w-810 mt-35">
        <!-- payment form title -->
        <payment-form-title> </payment-form-title>

        <!-- cards -->
        <payment-cards> </payment-cards>

        <!-- payment form  -->
        <payment-form> </payment-form>
      </div>

      <!-- important info about booking -->
      <booking-info> </booking-info>
    </section>

    <!-- reserved hotel section  -->
    <section class="reserved-hotel">
      <div class="room shadow-md mt-50">
        <reserved-image> </reserved-image>
        <reserved-info> </reserved-info>
      </div>

      <!-- reserved hotel price -->
      <reserved-price> </reserved-price>
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
</script>
