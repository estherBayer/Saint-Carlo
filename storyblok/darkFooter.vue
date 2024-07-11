<template>
    <div
      v-editable="blok"
      class="w-full bg-[transparent] text-left overflow-hidden"
    >
      <img :src="blok.image?.filename || 'default-image-url.jpg'" alt="" class="mx-0" />
      <div class="px-12 py-6">
        <h3 class="text-lg text-white text-left">
          <p>{{ blok.text1 }}</p>
          <p>{{ blok.text2 }}</p>
          <p>{{ blok.text3 }}</p>
          <p>{{ blok.text4 }}</p>
          <p>{{ blok.text5 }}</p>
          <p>{{ blok.text6 }}</p>
        </h3>
        <img :src="blok.image2?.filename || 'default-image-url.jpg'" alt="" class="mx-0" />
      </div>
    </div>
  </template>
   
  <script setup>
  defineProps({ blok: Object })
  </script>
  
  <style scoped>
  img {
    display: block;
    margin: 0;
  }
  
  h3, p {
    text-align: left;
    margin-bottom: 0.5rem; /* Ensure no additional margins between paragraphs */
  }
  </style>
  