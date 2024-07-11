<template>
  <div v-editable="blok" class="container mx-auto dynamic-grid" :style="gridStyle">
    <StoryblokComponent v-for="column in blok.columns" :key="column._uid" :blok="column" />
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  blok: {
    type: Object,
    required: true
  }
});

// Compute the grid style dynamically based on the number of columns
const gridStyle = computed(() => {
  const numberOfColumns = props.blok.columns.length;
  return {
    display: 'grid',
    gap: '12px',
    gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`, // Creates a fraction for each column
    alignItems: 'start'
  };
});
</script>

<style scoped>
.container {
  max-width: 100%; /* Adjust based on your design needs */
  margin: auto;
}
</style>
