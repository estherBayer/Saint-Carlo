<template>
  <section :id="blok.id">
    <h2>{{ blok.headline }}</h2>
    <!-- Add your section content here -->
  </section>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

console.log('Section ID Props:', props)
</script>
