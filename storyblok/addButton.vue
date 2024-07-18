<template>
  <a :href="blok?.buttonLink || '#'" class="button" @click="handleClick">
    {{ blok?.buttonText || 'Default Text' }}
  </a>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['click'])

const handleClick = (event) => {
  emit('click', event)
}
</script>

<style scoped>
.button {
  background-color: #FF0033;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  display: inline-block; /* Ensure button does not stretch */
  white-space: nowrap; /* Prevent text from wrapping */
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  margin: 0 left; /* Center the button horizontally */
}

.button:hover {
  background-color: #E20026;
  transform: scale(1.05);
}
</style>
