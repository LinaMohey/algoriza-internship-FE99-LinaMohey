<template>
  <navbar> </navbar>
  <div class="flex max-w-1350 mx-auto justify-evenly">
    <section class="reservation">
      <header>
        <h4>Secure your reservation</h4>
      </header>
      <warning-section> </warning-section>

      <!-- User info -->
      <div class="user-info shadow-md max-w-810">
        <div class="room-info reservation-card">
          <div class="user-icon">
            <img src="" alt="" class="" />
          </div>
          <p class="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          </p>
        </div>
        <form class="p-30">
          <div
            class="grid grid-cols-2 gap-4"
            style="grid-template-columns: repeat(2, minmax(0, 250px))"
          >
            <div>
              <label for="first-name" class="block text-md font-medium"
                >First name</label
              >
              <input
                type="text"
                id="first-name"
                class="reservation-input min-w-240"
              />
            </div>
            <div>
              <label for="last-name" class="block text-md font-medium"
                >Last name</label
              >
              <input
                type="text"
                id="last-name"
                class="reservation-input min-w-240"
              />
            </div>
          </div>
          <div
            class="mt-4 grid"
            style="grid-template-columns: repeat(2, minmax(0, 200px))"
          >
            <div>
              <label for="mobile-number" class="block text-md font-medium"
                >Mobile number</label
              >
              <select
                id="country"
                class="mt-1 border rounded-sm reservation-input min-w-150"
              >
                <option value="">
                  <img src="@/assets/location.png" alt="" />
                  EG +20
                </option>
              </select>
            </div>

            <div class="mt-5 self-center">
              <input
                type="text"
                id="mobile-number"
                class="reservation-input min-w-338"
              />
            </div>
          </div>

          <div class="mt-4">
            <input type="checkbox" id="alerts" class="mr-2" />
            <label for="alerts" class="text-sm font-medium"
              >Receive text alerts about this trip</label
            >
          </div>
        </form>
      </div>

      <!-- Payment Section-->
      <div class="payment shadow-md max-w-810 mt-35">
        <div class="reservation-card">
          <div class="card-icon">
            <img src="" alt="" class="" />
          </div>
          <h4 class="text-white">Payment options</h4>
        </div>

        <!-- Cards -->
        <div class="payment-methods">
          <p class="shadow-md p-20">Debit/Credit Card</p>
          <div class="card-images flex gap-2 items-center m-20">
            <div>
              <img
                src="@/assets/card1.png"
                alt="card1-image"
                class="max-w-60 cursor-pointer"
              />
            </div>
            <div>
              <img
                src="@/assets/card2.png"
                alt="card2-image"
                class="max-w-60 cursor-pointer"
              />
            </div>
            <div>
              <img
                src="@/assets/card3.png"
                alt="card3-image"
                class="max-w-60 cursor-pointer"
              />
            </div>
            <div>
              <img
                src="@/assets/card4.png"
                alt="card4-image"
                class="max-w-60 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <form class="px-20">
          <div class="card-name mb-20">
            <label for="name" class="block text-md font-medium"
              >Name on card</label
            >
            <div class="flex gap-3 items-center">
              <input
                type="text"
                id="name"
                class="reservation-input min-w-500"
              />
              <div><img src="@/assets/checked.png" alt="valid" /></div>
            </div>
          </div>

          <div class="card-number">
            <label for="card-number" class="block text-md font-medium"
              >Debit/Credit card number</label
            >
            <div class="flex gap-3 items-center">
              <input
                type="text"
                id="card-number"
                class="reservation-input min-w-500 mb-20"
              />
              <img src="@/assets/checked.png" alt="valid" />
            </div>
          </div>

          <!-- Expiration date -->

          <div class="expiration-date mb-20">
            <label for="expiry-date">Expiration Date</label>
            <div class="flex gap-3 items-center">
              <div class="flex gap-2">
                <select
                  class="bg-grayColor-100 rounded-sm px-12 py-10 my-2 min-w-150"
                >
                  <option>April</option>
                </select>
                <select class="bg-grayColor-100 rounded-sm my-2 min-w-150">
                  <option>2026</option>
                </select>
              </div>
              <div>
                <img src="@/assets/checked.png" alt="valid" />
              </div>
            </div>
          </div>

          <!-- Codes -->
          <div class="flex gap-3 items-center">
            <div
              class="grid grid-cols-2 gap-4"
              style="grid-template-columns: repeat(2, minmax(0, 250px))"
            >
              <div class="codes mb-30">
                <label for="security-code" class="block text-md font-medium"
                  >Security code</label
                >
                <input
                  type="text"
                  id="security-code"
                  class="reservation-input min-w-240"
                />
              </div>
              <div>
                <label for="zip-code" class="block text-md font-medium"
                  >Billing Zip code</label
                >
                <input
                  type="text"
                  id="zip-code"
                  class="reservation-input min-w-240"
                />
              </div>
            </div>
            <img src="@/assets/checked.png" alt="valid" />
          </div>
        </form>
      </div>

      <!-- Important info -->
      <div class="user-info shadow-md max-w-810 mt-35 mb-100">
        <div
          class="important-info bg-yellow-100 p-4 flex items-center rounded-tr-md rounded-tl-md gap-4"
        >
          <p>Important information about your booking</p>
        </div>

        <div class="mt-4 p-20">
          <p class="mb-2">
            1. This rate is non-refundable. If you change or cancel your booking
            you will not get a refund or credit to use for a future stay.
          </p>
          <p class="mb-2">2. Stay extensions will require a new reservation.</p>
          <p class="mb-2">3. Front desk staff will greet guests on arrival</p>
          <p class="mb-2">
            4. No refunds will be issued for late check-in or early check-out.
          </p>

          <div class="booking mt-50">
            <p>
              By clicking the button below, I acknowledge that I have reviewed
              the
              <span class="text-blueColor-100">Privacy Statement </span> and
              have reviewd and accept the
              <span class="text-blueColor-100"> Rules and </span> Restrictions
              and
              <span class="text-blueColor-100">Terms of Use.</span>
            </p>
            <button
              class="py-10 px-18 bg-blueColor-100 text-white mt-20 rounded-md"
            >
              Complete booking
            </button>
            <div class="mt-20 flex gap-2">
              <img src="@/assets/lock.png" alt="lock-icon" />
              <p>
                We use secure transmission and encrypted storage to protect your
                personal information
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="reserved-hotel">
      <div class="room shadow-md mt-50">
        <div class="room-image">
          <img src="@/assets/room2.png" alt="room-image" />
        </div>
        <div class="hotel-info mx-4 py-3">
          <h4 class="mt-10">Hotel Name</h4>
          <div class="rating flex gap-2 items-center">
            <div class="rating-image">
              <img src="@/assets/stars.png" alt="" />
            </div>
            <p>Rating(Reviews)</p>
          </div>
          <div class="specifications mt-15">
            <p class="mb-1">Non refundable</p>
            <p class="mb-1">Check in:</p>
            <p class="mb-1">Check out:</p>
            <p class="mb-1">2 night stands</p>
          </div>
        </div>
      </div>
      <div class="price shadow-md max-w-810 mt-35 mb-100">
        <div
          class="important-info bg-green-100 p-4 flex items-center rounded-tr-md rounded-tl-md gap-4"
        >
          <p>Price Details</p>
        </div>
        <div class="price-details p-10">
          <div class="flex justify-between items-center py-10">
            <p>Room one</p>
            <p>Price $</p>
          </div>
          <div class="flex justify-between items-center">
            <p>Room one</p>
            <p>Price $</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
