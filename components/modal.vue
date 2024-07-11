<template>
    <div class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div class="modal-card" :class="{ 'active': isActive }" @click="isActive = !isActive">
        <button @click="$emit('close')" class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 class="text-3xl text-[#1d243d] font-bold my-2 mb-2" style="font-family: 'Arima';">Thank You!</h3>
        <h3 class="text-2xl text-[#1d243d] font-semibold mb-3">Your Request Has Been Received.</h3>
        <h4 class="text-lg text-[#1d243d] font-semibold mb-4">The power of education is on its way! We are processing your request and will be in touch shortly.</h4>
        <p class="text-sm text-[#1d243d] mb-4">Please verify that your contact information is correct and check your spam folder to ensure you receive our communications.
        </p>
        <button @click="$emit('close')" class="bg-[#FF0033] hover:bg-darkRed text-white font-bold py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    imageSrc: {
      type: String,
      required: true
    }
  });
  
  const isActive = ref(false);
  </script>
  
  <style scoped>
  .fixed {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 1.5rem;
    width: 100%;
    max-width: 500px;
    background-color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0 0.3rem 0.3rem 0 rgb(0 0 0 / 0.09);
    text-align: left;
    border: 0.3rem solid transparent;
    border-image: linear-gradient(90deg, #F38BA0, #F6AE99, #F1CA89, #D5ECC2, #BDD2B6, #87A7B3, #E4BAD4) 1;
    transition: all 0.3s ease-in-out;
  }
  
  .modal-card.active {
    border-color: #FF0033;
    border-image: none;
  }
  
  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .title, .subtitle, .description {
    color: #1a1a1a;
  }
  
  button {
    margin-top: 1rem;
  }
  </style>
  