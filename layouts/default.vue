<template>
  <main class="m-0 p-0">
    <Header />
    <slot />
  </main>
</template>

<script>
import Header from '~/components/Header.vue';
import Button from '~/components/Button.vue';


export default {
  components: {
    Header,
  },
};
</script>

<style>
/* Ensure no unwanted padding or margins in the layout */
body, html, #__nuxt, .nuxt-container {
  margin: 0;
  padding: 0;
}
</style>
