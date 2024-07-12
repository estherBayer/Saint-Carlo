<template>
  <div v-editable="blok" class="w-full bg-[transparent] text-left overflow-hidden">
    <!-- First Image - Display only if blok.image.filename is available -->
    <img v-if="blok.image?.filename" :src="blok.image.filename" alt="" class="mx-0" />
    <div class="px-12 py-6">
      <!-- Text Content -->
      <h3 class="text-lg text-white text-left">
        <p>{{ blok.text1 }}</p>
        <p>{{ blok.text2 }}</p>
        <p>{{ blok.text3 }}</p>
        <p>{{ blok.text4 }}</p>
        <p>{{ blok.text5 }}</p>
        <p>{{ blok.text6 }}</p>
      </h3>
      <!-- Second Image - Display only if blok.image2.filename is available -->
      <img v-if="blok.image2?.filename" :src="blok.image2.filename" alt="" class="mx-0" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// Define the props
const props = defineProps({
  blok: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
img {
  display: block;
  margin: 0;
}

h3, p {
  text-align: left;
  margin-bottom: 0.5rem; /* Ensure no additional margins between paragraphs */
}
</style>
