<template>
  <div :id="blok.anchorId" class="section-anchor"></div>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.section-anchor {
  height: 0; /* Ensures it doesn't add any additional space */
  position: relative;
  top: -100px; /* Adjust this value based on your sticky menu height */
}
</style>
