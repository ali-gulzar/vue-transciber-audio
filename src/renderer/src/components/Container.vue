<script setup lang="ts">
import { useRecordingStatus } from '../store/recordingStatus'

import Message from './Message.vue'
const store = useRecordingStatus()
</script>

<template>
  <div v-if="store.recording" class="bg-black pb-28">
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
    <h1
      class="text-white text-9xl font-serif"
      :class="{ animate__animated: store.recording, animate__fadeOutDown: store.recording }"
    >
      Welcome!
    </h1>
    <p class="font-serif">Press play button to start recording.</p>
  </div>
</template>
