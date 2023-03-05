<script setup lang="ts">
import { ref, Ref } from 'vue'
import { useStopwatch } from 'vue-timer-hook'
import { useAudio } from '@renderer/store/audio'
import { useWebSocket } from '@renderer/store/webSocket'
import { useToastMessage } from '@renderer/store/common'
import { RecordRTCPromisesHandler } from 'recordrtc'

const recorderRef: Ref<null | RecordRTCPromisesHandler> = ref(null)
const stopwatch = useStopwatch(0, false)
const recordingStore = useAudio()
const webSocketStore = useWebSocket()
const toastMessageStore = useToastMessage()

const play = async (): Promise<void> => {
  if (stopwatch.isRunning.value) {
    // stop recordrtc
    recorderRef.value?.stopRecording().then(() => {
      stopwatch.reset()
      stopwatch.pause()
      recordingStore.updateStatus(false)
    })

    // stop timer and update recording status
  } else {
    if (webSocketStore.client) {
      // start recordrtc
      const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true })
      recorderRef.value = new RecordRTCPromisesHandler(mediaStream, {
        type: 'audio',
        timeSlice: 5000,
        ondataavailable: (blob: Blob): void => {
          // send the audio blob
          webSocketStore.client?.send(
            JSON.stringify({
              blob,
              time: `${stopwatch.hours.value}:${stopwatch.minutes.value}:${stopwatch.seconds.value}`
            })
          )
        }
      })
      recorderRef.value.startRecording()

      // update recording status and start timer
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
