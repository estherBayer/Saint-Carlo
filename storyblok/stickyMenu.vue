<template>
  <div class="sticky-menu hidden md:block">
    <nav class="container mx-auto flex items-center justify-between px-4">
      <ul class="flex space-x-8 text-base font-bold">
        <li v-for="section in blok.sections" :key="section._uid">
          <a :href="section.id">{{ section.Name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

console.log('Sticky Menu Props:', props)
</script>

<style scoped>
.sticky-menu {
  position: sticky;
  top: 6rem; /* Ensure it appears below the header */
  background-color: white;
  border-top: 0.5rem solid red;
  padding: 0.75rem;
  box-shadow:
    0 5px 9px -3px #0003,
    0 4px 6px -3px #00000024;
  font-weight: normal;
  color: rgb(26, 26, 26);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 40; /* Lower z-index than header */
}

nav a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #FF0033; /* Bright red on hover */
}

nav li.active a {
  color: #81f499; /* Bright green for active link */
  text-decoration: underline;
}

@media (max-width: 768px) {
  .sticky-menu {
    display: none;
  }
}
</style>
