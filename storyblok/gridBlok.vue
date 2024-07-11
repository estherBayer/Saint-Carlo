<template>
    <div
      v-editable="blok"
      :class="['container mx-auto my-12 grid gap-12 place-items-center auto-rows-auto', gridClasses]"
      :style="backgroundStyle"
    >
      <StoryblokComponent
        v-for="column in blok.columns"
        :key="column._uid"
        :blok="column"
      />
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    blok: {
      type: Object,
      required: true
    }
  });
  
  // Compute dynamic grid classes based on the number of columns
  const gridClasses = computed(() => {
    const columnCount = props.blok.columns.length;
    return {
      'md:grid-cols-2': columnCount === 2,
      'md:grid-cols-3': columnCount === 3,
      'md:grid-cols-4': columnCount === 4,
      'md:grid-cols-5': columnCount === 5,
      'md:grid-cols-6': columnCount === 6,
      'md:grid-cols-auto': columnCount > 6
    };
  });
  
  // Compute background style
  const backgroundStyle = computed(() => {
    const style = {};
    if (props.blok.backgroundColor) {
      style.backgroundColor = props.blok.backgroundColor;
    }
    if (props.blok.backgroundImage?.filename) {
      style.backgroundImage = `url(${props.blok.backgroundImage.filename})`;
      style.backgroundSize = 'cover';
      style.backgroundRepeat = 'no-repeat';
      style.backgroundPosition = 'center';
    }
    return style;
  });
  </script>
  