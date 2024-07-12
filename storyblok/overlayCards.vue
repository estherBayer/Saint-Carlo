<template>
  <div v-editable="blok" class="overlay-card-container">
    <!-- Card Image as Background -->
    <div
      :style="{
        backgroundImage: `url(${blok.image?.filename || 'default-image-url.jpg'})`,
      }"
      class="overlay-card"
    >
      <!-- Overlay -->
      <div class="gradient-overlay"></div>

      <!-- Text and Button Overlay -->
      <div class="overlay-text">
        <h4 class="text-base font-semibold mb-1">{{ blok.name }}</h4>
        <h3 class="text-xl font-bold mb-1">{{ blok.title }}</h3>
        <p class="text-base mb-2">{{ blok.program }}</p>
        <img
          :src="blok.logo?.filename || 'default-logo-url.jpg'"
          alt="Logo"
          class="logo"
        />
      </div>
      <div class="hover-button">
        <span class="hover-background"></span>
        <a
          :href="blok.linktextUrl || '/campus'"
          class="hover-text"
          target="_blank"
          >{{ blok.linktext || 'Read more' }} →</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    required: true,
    default: () => ({
      cards: [],
    }),
  },
})
</script>

<style scoped>
.overlay-card-container {
  width: 100%;
  cursor: pointer;
}

.overlay-card {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.5s ease;
  background-size: cover;
  background-position: center;
}

.gradient-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
}

.overlay-text {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  color: white;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.logo {
  width: 3rem;
  height: 3rem;
  object-fit: contain;
}

.overlay-card:hover {
  transform: scale(1.05);
}

.hover-button {
  position: absolute;
  bottom: 2.5rem;
  right: 2rem;
  background-color: transparent;
  border: 2px solid;
  border-color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay-card:hover .hover-button {
  opacity: 1;
}

.hover-background {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: red;
  transform: scale(0);
  transition: transform 0.3s ease;
}

.hover-button:hover .hover-background {
  transform: scale(1);
}

.hover-text {
  position: relative;
  color: white;
  padding: 0.5rem 1rem;
  z-index: 1;
  transition: color 0.3s ease;
}

.hover-button:hover .hover-text {
  color: white;
}

@media (max-width: 768px) {
  .hover-button {
    bottom: 1.5rem;
    right: 1rem;
    padding: 0.25rem 0.5rem;
    border-width: 1px;
  }

  .hover-text {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem; /* 14px */
  }
}

@media (max-width: 480px) {
  .hover-button {
    bottom: 1rem;
    right: 0.5rem;
    padding: 0.25rem;
    border-width: 1px;
  }

  .hover-text {
    padding: 0.25rem;
    font-size: 0.75rem; /* 12px */
  }
}
</style>
