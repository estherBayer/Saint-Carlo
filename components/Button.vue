<!-- components/Button.vue -->
<template>
  <a :href="href" class="button" @click="handleClick">
    <slot></slot>
  </a>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  href: {
    type: String,
    required: false,
    default: '#',
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
  display: inline-block;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.button:hover {
  background-color: #E20026;
  transform: scale(1.05);
}
</style>
