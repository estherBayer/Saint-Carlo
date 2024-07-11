<template>
  <div
    v-editable="blok"
    :class="['feature-icon', {'has-bg-color': blok.backgroundColor, 'has-bg-image': blok.backgroundImage}]"
    :style="{ backgroundColor: 'transparent', backgroundImage: blok.backgroundImage ? `url(${blok.backgroundImage.filename})` : '' }"
  >
    <!-- Header and Icon Container -->
    <div class="header-icon-container">
      <!-- Icon -->
      <div class="icon-container">
        <img v-if="blok.icon?.filename" :src="blok.icon.filename" alt="" class="icon" />
      </div>
      <!-- Headline -->
      <h3 class="headline text-2xl text-[#1d243d] font-bold mb-2">
        {{ blok.title }}
      </h3>
    </div>
    <!-- Description -->
    <p class="description text-base text-[#1d243d] mb-4">
      {{ blok.description }}
    </p>
  </div>
</template>

  
  <script setup>
  defineProps({ blok: Object })
  </script>
  
  <style scoped>
  .feature-icon {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 1.5rem;
    background-color: transparent; /* Transparent background */
  }
  
  .header-icon-container {
    display: flex;
    align-items: center; /* Align items vertically */
    justify-content: start; /* Align items to the start */
    width: 100%;
    margin-bottom: 0.5rem; /* Space between header and description */
  }
  
  .icon-container {
    margin-right: 20px; /* Space between icon and headline */
  }
  
  .icon {
    width: 50px; /* Fixed width for the icon */
    height: auto; /* Maintain aspect ratio */
  }
  
  .headline, .description {
    margin: 0;
    padding: 0.25rem;
    color: #1a1a1a;
  }
  
  .feature-icon.has-bg-color, .feature-icon.has-bg-image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  
  @media (max-width: 768px) {
    .header-icon-container {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .icon-container {
      margin-right: 0;
      margin-bottom: 10px; /* Space between icon and headline on small screens */
    }
  
    .icon {
      width: 40px; /* Smaller icon on mobile */
    }
  }
  </style>
  