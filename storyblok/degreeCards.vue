<template>
  <div class="feature-icon-wrapper">
    <div v-editable="blok" class="feature-icon" :style="backgroundStyle">
      <!-- Title -->
      <h4 class="text-lg text-[#1d243d] font-semibold mb-1">{{ blok.subtitle }}</h4>
      <h3 class="text-2xl text-[#1d243d] font-bold mb-4">{{ blok.title }}</h3>
      <!-- Description -->
      <p class="text-base text-[#1d243d] mb-4">{{ blok.description }}</p>
      <!-- Button -->
      <Button v-if="blok.buttonText && blok.buttonLink" :href="blok.buttonLink" target="_blank">
        {{ blok.buttonText }}
      </Button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Button from '~/components/Button.vue';

const props = defineProps({
  blok: Object,
});

const backgroundStyle = {
  backgroundColor: '#ffffff',
};
</script>

<style scoped>
.feature-icon-wrapper {
  position: relative;
  display: block;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0.3rem 0.3rem 0 rgb(0 0 0 / 0.09);
}

.feature-icon {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1.5rem;
  text-align: left;
  background-color: var(--background-color, #ffffff);
  border: 0.3rem solid transparent;
  transition: all 0.3s ease-in-out;
}

.feature-icon:hover {
  border-image: linear-gradient(90deg, #F38BA0, #F6AE99, #F1CA89, #D5ECC2, #BDD2B6, #87A7B3, #E4BAD4) 1;
}

.title, .subtitle, .description {
  color: #1a1a1a;
}
</style>
