<template>
  <!-- form of user to submit his data -->
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
        <input type="text" id="last-name" class="reservation-input min-w-240" />
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

        <div class="custom-select-container">
          <select
            id="country"
            class="mt-1 border rounded-sm reservation-input min-w-150"
          >
            <option>EG +20</option>
          </select>
        </div>
      </div>

      <div class="mt-5 self-center">
        <input
          type="text"
          id="mobile-number"
          class="reservation-input min-w-338"
        />
      </div>
    </div>

    <div class="mt-20 mb-15 flex gap-2">
      <input
        type="checkbox"
        id="alerts"
        class="w-18 border-1 rounded-lg border border-grayColor-100"
      />
      <label for="alerts" class="text-sm"
        >Receive text alerts about this trip</label
      >
    </div>
  </form>
</template>

<style scoped></style>
