<script setup lang="ts">
import { useAudio } from '../store/audio'
import { useMessages } from '@renderer/store/messages'

import Message from './Message.vue'
const audioStore = useAudio()
const messagesStore = useMessages()
</script>

<template>
  <div v-if="audioStore.recording || messagesStore.messages.length !== 0" class="bg-black pb-28">
    <Message />
  </div>

  <div v-else class="flex flex-col flex-grow justify-center items-center">
    <h1 class="text-white text-9xl font-serif animate-pulse">Welcome!</h1>
    <p class="font-serif">Press play button to start recording.</p>
  </div>
</template>
