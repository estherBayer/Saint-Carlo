<template>
    <div v-editable="blok" class="scrolling-logos">
      <div class="container mx-auto my-12">
        <h2 class="headline">Partners</h2>
        <div class="wrapper">
          <div class="marquee">
            <div class="marquee__group">
              <img v-for="logo in blok.logos" :src="logo.filename" :alt="logo.alt || 'Logo'" :key="logo.id" class="logo" />
            </div>
            <div class="marquee__group" aria-hidden="true">
              <img v-for="logo in blok.logos" :src="logo.filename" :alt="logo.alt || 'Logo'" :key="logo.id + '-duplicate'" class="logo" />
            </div>
          </div>
          <div class="marquee marquee--reverse">
            <div class="marquee__group">
              <img v-for="logo in blok.logos" :src="logo.filename" :alt="logo.alt || 'Logo'" :key="logo.id + '-reverse'" class="logo" />
            </div>
            <div class="marquee__group" aria-hidden="true">
              <img v-for="logo in blok.logos" :src="logo.filename" :alt="logo.alt || 'Logo'" :key="logo.id + '-duplicate-reverse'" class="logo" />
            </div>
          </div>
          <div class="marquee">
            <div class="marquee__group">
              <img v-for="logo in blok.logos" :src="logo.filename" :alt="logo.alt || 'Logo'" :key="logo.id + '-third'" class="logo" />
            </div>
            <div class="marquee__group" aria-hidden="true">
              <img v-for="logo in blok.logos" :src="logo.filename" :alt="logo.alt || 'Logo'" :key="logo.id + '-duplicate-third'" class="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      blok: {
        type: Object,
        required: true,
      },
    },
  }
  </script>
  
  <style scoped>
  .scrolling-logos {
    background-color: #ffffff;
    padding: 1rem 0;
  }
  
  .headline {
    margin-bottom: 2rem;
    text-align: left;
    font-size: 2.25rem; /* text-4xl */
    font-weight: bold;
    color: #000000;
  }
  
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: auto;
    max-width: 100vw;
  }
  
  .marquee {
    display: flex;
    overflow: hidden;
    user-select: none;
    gap: 1rem;
    mask-image: linear-gradient(
      to right,
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 1) 20%,
      hsl(0 0% 0% / 1) 80%,
      hsl(0 0% 0% / 0)
    );
  }
  
  .marquee__group {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    min-width: 100%;
    animation: scroll-x 20s linear infinite;
  }
  
  .marquee--reverse .marquee__group {
    animation-direction: reverse;
    animation-delay: -3s;
  }
  
  .logo {
    width: 150px;
    height: auto;
    padding: 1rem;
    border-radius: 0.5rem;
    background: #ffffff;
  }
  
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  
  @media (max-width: 768px) {
    .marquee__group {
      animation-duration: 30s;
    }
  }
  </style>
  
  