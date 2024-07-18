<template>
  <div class="feature-icon-wrapper">
    <div v-editable="blok" class="feature-icon" :style="backgroundStyle">
      <!-- Title -->
      <h4 class="subtitle">{{ blok.subtitle }}</h4>
      <h3 class="title">{{ blok.title }}</h3>
      <!-- Description -->
      <p class="description">{{ blok.description }}</p>
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
import { defineProps, computed } from 'vue'
import Button from '~/components/Button.vue'

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

const backgroundStyle = computed(() => ({
  backgroundColor: '#ffffff',
}))
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
  align-items: flex-start;
  padding: 1.5rem;
  text-align: left;
  background-color: var(--background-color, #ffffff);
  border: 0.3rem solid transparent;
  transition: all 0.3s ease-in-out;
}

.feature-icon:hover {
  border-image: linear-gradient(
      90deg,
      #f38ba0,
      #f6ae99,
      #f1ca89,
      #d5ecc2,
      #bdd2b6,
      #87a7b3,
      #e4bad4
    )
    1;
}

.subtitle {
  font-size: 1.125rem; /* 18px */
  color: #1d243d;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.title {
  font-size: 1.5rem; /* 24px */
  color: #1d243d;
  font-weight: 700;
  margin-bottom: 1rem;
}

.description {
  font-size: 1rem; /* 16px */
  color: #1d243d;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .feature-icon {
    padding: 1rem;
  }

  .subtitle {
    font-size: 1rem; /* 16px */
  }

  .title {
    font-size: 1.25rem; /* 20px */
  }

  .description {
    font-size: 0.875rem; /* 14px */
  }
}
</style>
