<template>
  <div v-editable="blok" class="container mx-auto my-12">
    <div class="teaser-content">
      <!-- Headline -->
      <h1 v-if="blok.headline" class="teaser-headline">
        {{ blok.headline }}
      </h1>
      <!-- Subheadline -->
      <p v-if="blok.subheadline && (!blok.subheadlineUrl || !blok.subheadlineUrl.cached_url)" class="teaser-subheadline">
        {{ blok.subheadline }}
      </p>
      <!-- Subheadline as a link -->
      <a v-if="blok.subheadline && blok.subheadlineUrl && blok.subheadlineUrl.cached_url" :href="blok.subheadlineUrl.cached_url" class="teaser-subheadline-link">
        {{ blok.subheadline }} →
      </a>
      <!-- Additional content -->
      <div v-html="blok.body" class="teaser-body"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
.container {
  padding: 0 1rem; /* Adjust padding if necessary */
}
.teaser-headline {
  @apply mb-2 text-4xl font-bold text-black;
}

.teaser-subheadline {
  @apply mb-2 text-xl text-gray-500;
}

.teaser-subheadline-link {
  @apply mb-2 text-xl text-gray-500 font-bold;
  color: #1a1a1a;
  text-decoration: none; /* Optional: adjust as per design requirements */
}

.teaser-subheadline-link:hover {
  text-decoration: underline; /* Optional: on hover state */
}

.teaser-body {
  @apply text-base text-gray-500;
}
</style>
