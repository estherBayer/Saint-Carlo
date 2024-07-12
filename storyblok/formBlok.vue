<template>
  <div class="container mx-auto flex flex-col md:flex-row items-center">
    <div
      class="form-container mx-auto my-8 p-8 bg-whiteLavender rounded-lg shadow-lg"
    >
      <h2 class="text-4xl font-bold mb-4">Request program information</h2>
      <p class="text-gray-700 mb-6">
        You'll find everything you need to know about studying online in our
        digital brochure. To get your copy, please fill out the form below.
      </p>
      <form class="space-y-4" @submit.prevent="handleSubmit">
        <!-- Form fields -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="form-group">
            <label
              for="firstName"
              class="block text-base font-medium text-gray-700"
              >First name*</label
            >
            <input
              id="firstName"
              v-model="form.firstName"
              type="text"
              name="firstName"
              placeholder="First name*"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
            />
          </div>
          <div class="form-group">
            <label
              for="lastName"
              class="block text-base font-medium text-gray-700"
              >Last name*</label
            >
            <input
              id="lastName"
              v-model="form.lastName"
              type="text"
              name="lastName"
              placeholder="Last name*"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="form-group">
            <label for="email" class="block text-base font-medium text-gray-700"
              >Email*</label
            >
            <input
              id="email"
              v-model="form.email"
              type="email"
              name="_replyto"
              placeholder="john.smith@domain.com"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
            />
          </div>
          <div class="form-group">
            <label
              for="phoneNumber"
              class="block text-base font-medium text-gray-700"
              >Phone/mobile number*</label
            >
            <input
              id="phoneNumber"
              v-model="form.phoneNumber"
              type="tel"
              name="phoneNumber"
              placeholder="Telephone number (example: +1...)"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="form-group">
            <label
              for="country"
              class="block text-base font-medium text-gray-700"
              >Country of residence*</label
            >
            <input
              id="country"
              v-model="form.country"
              type="text"
              name="country"
              placeholder="Country of residence*"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
            />
          </div>
          <div class="form-group">
            <label
              for="program"
              class="block text-base font-medium text-gray-700"
              >Program of interest*</label
            >
            <input
              id="program"
              v-model="form.program"
              type="text"
              name="program"
              placeholder="Program of interest*"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
            />
          </div>
        </div>
        <div class="form-group flex items-start">
          <div class="flex items-center h-5">
            <input
              id="consent"
              v-model="form.consent"
              type="checkbox"
              name="consent"
              required
              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div class="ml-3 text-base">
            <label for="consent" class="font-medium text-gray-700"
              >I consent to receiving information (by email/electronic
              communications, phone, or text/SMS) about the courses and services
              offered by the University. By submitting this form, I also agree
              to the privacy policy of the University and understand that I can
              opt out at any time.</label
            >
          </div>
        </div>
        <div class="form-group flex items-start">
          <div class="flex items-center h-5">
            <input
              id="personalInfo"
              v-model="form.personalInfo"
              type="checkbox"
              name="personalInfo"
              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div class="ml-3 text-base">
            <label for="personalInfo" class="font-medium text-gray-700"
              >I would like to receive personalized information about the
              courses and events.</label
            >
          </div>
        </div>
        <!-- Button -->
        <button
          type="submit"
          class="bg-[#FF0033] hover:bg-darkRed text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
        <p class="required-notice text-base text-gray-500 mt-4">
          *required field, please fill in completely
        </p>
      </form>
    </div>
    <!-- Modal Component -->
    <Modal v-if="showModal" @close="showModal = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '~/components/modal.vue' // Import the Modal component

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  country: '',
  program: '',
  consent: false,
  personalInfo: false,
})

const showModal = ref(false) // State to control the modal visibility

const handleSubmit = async () => {
  try {
    const response = await fetch('https://formspree.io/f/manwnnpe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    })

    if (response.ok) {
      showModal.value = true // Show the modal on success
      // Clear the form
      Object.keys(form.value).forEach((key) => {
        form.value[key] = ''
      })
    } else {
      alert('There was an error submitting the form. Please try again.')
    }
  } catch (error) {
    alert('There was an error submitting the form. Please try again.')
  }
}
</script>

<style scoped>
.required-notice {
  margin-top: 1rem;
  color: #999;
  font-size: 0.875rem;
}
</style>
