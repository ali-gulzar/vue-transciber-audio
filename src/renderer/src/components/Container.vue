<script setup lang="ts">
import { reactive } from 'vue'
import Message from './Message.vue'

const state = reactive({
  recording: false
})
</script>

<template>
  <div v-if="state.recording" class="bg-black pb-28">
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
  </div>

  <div v-else class="flex flex-col flex-grow justify-center items-center">
    <h1 class="text-white text-9xl font-serif animate-pulse">Welcome!</h1>
    <p class="font-serif">Press play button to start recording.</p>
  </div>
</template>
