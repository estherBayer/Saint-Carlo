<template>
  <div class="feature-icon-wrapper">
    <div v-editable="blok" class="feature-icon" :style="backgroundStyle">
      <!-- Play Icon -->
      <div class="play-icon">
        <div class="play-icon-inner">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M8 5v14l11-7z" fill="white" />
          </svg>
        </div>
      </div>
      <!-- Header with Date -->
      <h4 class="text-lg text-[#005b2b] font-semibold mb-2">
        {{ blok.date }}
      </h4>
      <!-- Title -->
      <h3 class="text-2xl text-[#1d243d] font-bold mb-4">{{ blok.title }}</h3>
      <!-- Description -->
      <p class="text-base text-[#1d243d] mb-4">{{ blok.description }}</p>
      <!-- Button -->
      <Button
        v-if="blok.buttonText && blok.buttonLink"
        :href="blok.buttonLink"
        target="_blank"
      >
        {{ blok.buttonText }}
      </Button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import Button from '~/components/Button.vue'

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
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
  background-image: url('assets/css/images/gridBackground.png');
  background-size: 200%; /* Scale the image to 50% */
  background-position: center; /* Center the background image */
  border: 0.3rem solid transparent;
  transition: all 0.3s ease-in-out;
}

.feature-icon:hover {
  border-color: #b7ffc3;
}

.title,
.subtitle,
.description {
  color: #1a1a1a;
}

.play-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #66ccff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.play-icon-inner {
  width: 1.5rem;
  height: 1.5rem;
}

.play-icon svg {
  fill: white;
  transition: fill 0.3s ease;
}

.play-icon:hover {
  transform: scale(1.1);
}

.play-icon:hover svg {
  fill: #FF0033; /* Change to your desired hover color */
}
</style>
