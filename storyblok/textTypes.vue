<template>
    <div v-editable="blok" class="container mx-auto my-12">
      <div class="teaser-content">
        <!-- Headline -->
        <h1 v-if="blok.headline" class="teaser-headline">
          {{ blok.headline }}
        </h1>
        <!-- Subheadline -->
        <p v-if="blok.subheadline" class="teaser-subheadline">
          {{ blok.subheadline }}
        </p>
        <!-- linkText as a link -->
        <a v-if="blok.linktext && blok.linktextUrl" :href="blok.linktextUrl" class="teaser-linktext-link">
          {{ blok.linktext }} →
        </a>
        <!-- List -->
        <div v-if="blok.list && blok.list.length" class="mb-1">
          <ul class="space-y-2">
            <li v-for="item in blok.list" :key="item._uid" class="text-paragraph2 font-arimo text-black text-left">
              {{ item.text }}
            </li>
          </ul>
        </div>
        <!-- Additional content -->
        <div v-html="blok.body" class="teaser-body"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    blok: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .container {
    padding: 0 1rem; /* Adjust padding if necessary */
  }
  .teaser-headline {
    @apply mb-2 text-4xl font-bold text-black;
  }
  
  .teaser-subheadline {
    @apply mb-1 text-xl text-[#1a1a1a] font-bold;
    color: #1a1a1a;
  }
  
  .teaser-linktext-link {
    @apply mb-2 text-xl text-[#1a1a1a] font-bold;
    color: #1a1a1a;
    text-decoration: none; /* Optional: adjust as per design requirements */
  }
  
  .teaser-linktext-link:hover {
    text-decoration: underline; /* Optional: on hover state */
  }
  
  .teaser-body {
    @apply text-base text-[#1d243d];
  }
  </style>
  