<script setup lang="ts">
import { reactive } from 'vue'
import Message from './Message.vue'

const state = reactive({
  recording: false
})
</script>

<template>
  <Message v-if="state.recording" />
  <div v-else class="flex flex-col flex-grow justify-center items-center">
    <h1 class="text-white text-9xl font-serif animate-pulse">Welcome!</h1>
    <p class="font-serif">Press play button to start recording.</p>
  </div>
</template>
