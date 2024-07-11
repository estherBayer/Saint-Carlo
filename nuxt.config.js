export default defineNuxtConfig({
  css: [
    '@/assets/css/googleFonts.css',
    '@/assets/css/tailwind.css',
    'vue3-carousel/dist/carousel.css',
    '@/assets/css/global.css'
  ],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'k8hkvyCpDJ2udijWrJ91fgtt',
        apiOptions: {
          region: 'ca'
        }
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
  components: true,
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    transpile: ['vue3-carousel']
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  vueRouter: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else if (to.hash) {
        return { selector: to.hash, behavior: 'smooth' };
      } else {
        return { x: 0, y: 0 };
      }
    },
  },
});




