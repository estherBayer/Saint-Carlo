<template>
  <div v-editable="blok" class="container mx-auto my-12 flex flex-col md:flex-row items-center gap-8">
    <!-- Image Column - Order adjusted for smaller screens -->
    <div :class="{'md:order-2 w-full md:w-1/2': blok.imageOnLeft, 'md:order-1 w-full md:w-1/2': !blok.imageOnLeft}" class="order-1 flex justify-center items-center p-4">
      <img v-if="blok.image && blok.image.filename" :src="blok.image.filename" :alt="blok.headline" class="h-auto object-contain" />
    </div>
    <!-- Text Column -->
    <div :class="{'md:order-1 w-full md:w-1/2': blok.imageOnLeft, 'md:order-2 w-full md:w-1/2': !blok.imageOnLeft}" class="order-2 flex flex-col justify-center p-4">
      <h2 v-if="blok.headline" class="text-4xl text-[#1d243d] mb-2">{{ blok.headline }}</h2>
      <h3 v-if="blok.subheadline" class="text-2xl text-[#1d243d] font-bold mb-2">{{ blok.subheadline }}</h3>
      <div v-if="blok.body" v-html="blok.body" class="text-lg mb-4"></div>
      <!-- Columns Section -->
      <div v-if="blok.columns && blok.columns.length" class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div v-for="column in blok.columns" :key="column._uid" class="flex flex-col items-start text-left">
          <StoryblokComponent :blok="column" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
img {
  width: auto; /* Default width to auto */
  max-width: 100%; /* Ensure it doesn't exceed the container width */
  height: auto; /* Height automatically adjusted */
  object-fit: contain; /* Fit the content boxed within the area without changing ratio */
  margin: auto; /* Center the image if smaller than the container */
  border-radius: 0.75rem;
}
</style>
