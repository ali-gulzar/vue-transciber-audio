<script setup lang="ts">
import { useStopwatch } from 'vue-timer-hook'
import { useRecordingStatus } from '@renderer/store/recordingStatus'
import { useWebSocket } from '@renderer/store/websocketStatus'
import { useToastMessage } from '@renderer/store/common'

const stopwatch = useStopwatch(0, false)
const recordingStore = useRecordingStatus()
const webSocketStore = useWebSocket()
const toastMessageStore = useToastMessage()

const play = (): void => {
  if (stopwatch.isRunning.value) {
    stopwatch.reset()
    stopwatch.pause()
    recordingStore.updateStatus(false)
  } else {
    if (webSocketStore.client) {
      stopwatch.start()
      recordingStore.updateStatus(true)
    } else {
      toastMessageStore.updateMessage('Please connect to server first!')
    }
  }
}
</script>

<template>
  <div class="flex flex-col justify-center items-center h-32 fixed bottom-0 inset-x-0">
    <button
      class="w-16 h-16 rounded-full bg-red-900 mb-4 focus:outline-none flex justify-center items-center"
      @click="play"
    >
      <v-icon v-if="stopwatch.isRunning.value" name="co-media-pause" scale="2" />
      <v-icon v-else name="co-media-play" scale="2" />
    </button>
    <div class="badge bg-red-900 w-32">
      {{ stopwatch.hours }} : {{ stopwatch.minutes }} : {{ stopwatch.seconds }}
    </div>
  </div>
</template>
