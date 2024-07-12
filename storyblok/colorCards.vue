<template>
  <div
    v-editable="blok"
    :class="[
      'feature-icon',
      {
        'has-bg-color': blok.backgroundColor,
        'has-bg-image': blok.backgroundImage,
      },
    ]"
    :style="backgroundStyle"
  >
    <!-- Icon -->
    <div class="mb-4 icon-container">
      <img
        v-if="blok.icon?.filename"
        :src="blok.icon.filename"
        alt=""
        class="w-12 h-12"
      />
    </div>
    <!-- Title -->
    <h3 class="title">
      {{ blok.title }}
    </h3>
    <!-- Description -->
    <p class="description">
      {{ blok.description }}
    </p>
    <div class="cards-container">
      <!-- Each card is a component instance -->
      <colorCard v-for="card in cards" :key="card.id" :blok="card" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

// Compute background style
const backgroundStyle = computed(() => {
  const style = {}
  if (props.blok.backgroundColor) {
    style.backgroundColor = props.blok.backgroundColor
  }
  if (props.blok.backgroundImage?.filename) {
    style.backgroundImage = `url(${props.blok.backgroundImage.filename})`
    style.backgroundSize = 'cover'
    style.backgroundRepeat = 'no-repeat'
    style.backgroundPosition = 'center'
  }
  return style
})
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* Optional: Adds space between cards */
}

.feature-icon {
  display: flex;
  flex-direction: column;
  align-items: start; /* Align items to the start (left) */
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: left;
  background-color: transparent; /* Default background color */
  flex: 1 1 300px; /* Adjust '300px' to your preferred base width */
  height: 100%; /* Stretch to fill the container */
  margin: 1rem;
}

/* Ensure h3 and p are aligned */
.title {
  text-align: left;
  font-size: 1.5rem; /* Adjust as necessary */
  color: #1d243d;
  font-weight: bold;
  margin-bottom: 0.5rem; /* Adjust as necessary */
}

.description {
  text-align: left;
  font-size: 1rem; /* Adjust as necessary */
  color: #1d243d;
}

/* Existing styles */
.feature-icon.has-bg-color,
.feature-icon.has-bg-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.icon-container {
  align-self: center;
}
</style>
