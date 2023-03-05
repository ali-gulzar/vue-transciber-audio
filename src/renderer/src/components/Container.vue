<script setup lang="ts">
import { useAudio } from '../store/audio'

import Message from './Message.vue'
const store = useAudio()
</script>

<template>
  <div v-if="store.recording" class="bg-black pb-28">
    <Message />
  </div>

  <div v-else class="flex flex-col flex-grow justify-center items-center">
    <h1 class="text-white text-9xl font-serif">Welcome!</h1>
    <p class="font-serif">Press play button to start recording.</p>
  </div>
</template>
