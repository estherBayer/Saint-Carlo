<template>
  <div v-editable="blok">
    <Carousel
      v-bind="settings"
      :breakpoints="breakpoints"
      :itemsToShow="3.95"
      :wrapAround="true"
      :transition="500"
      @afterSlideChange="handleSlideChange"
    >
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
      <Slide
        v-for="(column, index) in blok.columns"
        :key="column._uid"
        :class="{ 'carousel__slide--visible': visibleSlides.includes(index) }"
      >
        <div class="aspect-ratio-box">
          <StoryblokComponent :blok="column" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { StoryblokComponent } from '@storyblok/vue'
import { ref } from 'vue'

// Define the props
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

const settings = {
  snapAlign: 'center',
  wrapAround: true,
  transition: 500,
}

const breakpoints = {
  1024: { itemsToShow: 5 }, // Desktop and Laptop
  768: { itemsToShow: 3 }, // Tablets
  0: { itemsToShow: 2 }, // Mobile
}

const visibleSlides = ref([])

const handleSlideChange = ({ currentSlide }) => {
  visibleSlides.value = [
    currentSlide,
    (currentSlide + 1) % blok.columns.length,
    (currentSlide + 2) % blok.columns.length,
  ]
}
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.5;
  transform: scale(0.8);
}

.carousel__slide--prev {
  opacity: 1;
  transform: scale(0.9);
}

.carousel__slide--next {
  opacity: 1;
  transform: scale(0.9);
}

.carousel__slide--active {
  opacity: 1;
  transform: scale(1);
}

/* Ensure aspect ratio of the slides */
.aspect-ratio-box {
  position: relative;
  width: 100%;
  padding-top: 139%; /* Maintain aspect ratio */
}

.aspect-ratio-box > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Add margin to the bottom of the carousel */
.carousel {
  margin-bottom: 3rem; /* Adjust the margin as needed */
}
</style>
