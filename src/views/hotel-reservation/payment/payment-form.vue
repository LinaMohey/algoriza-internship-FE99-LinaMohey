<template>
  <form class="px-20">
    <div class="card-name mb-20">
      <label for="name" class="block text-md font-medium">Name on card</label>
      <div class="flex gap-3 items-center">
        <input type="text" id="name" class="reservation-input min-w-500" />
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
</template>
