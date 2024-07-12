<template>
  <div v-editable="blok" :style="backgroundStyle" class="outer-container">
    <div class="inner-container-grid mx-auto mt-2 mb-12">
      <StoryblokComponent
        v-for="nestedBlok in blok.bloks"
        :key="nestedBlok._uid"
        :blok="nestedBlok"
        class="nested-blok"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Define the props
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
.outer-container {
  width: 100%;
  padding: 2rem; /* Padding around the nested blocks */
  box-sizing: border-box; /* Include padding in the element's total width and height */
}

.inner-container-grid {
  display: grid;
  gap: 1rem; /* Less padding between the nested blocks */
  width: 100%;
}

.nested-blok {
  margin-top: 0 !important; /* Eliminate top margin */
  margin-bottom: 1rem; /* Adjust bottom margin as needed */
}
</style>
