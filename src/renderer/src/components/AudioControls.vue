<script setup lang="ts">
import { useStopwatch } from 'vue-timer-hook'

const stopwatch = useStopwatch(0, false)

const changeStopwatchAction = (): void => {
  if (stopwatch.isRunning.value) {
    stopwatch.reset()
    stopwatch.pause()
  } else {
    stopwatch.start()
  }
}
</script>

<template>
  <div class="flex flex-col justify-center items-center h-32">
    <button
      class="w-16 h-16 rounded-full bg-red-900 mb-4 focus:outline-none flex justify-center items-center"
      @click="changeStopwatchAction"
    >
      <v-icon v-if="stopwatch.isRunning.value" name="co-media-pause" scale="2" />
      <v-icon v-else name="co-media-play" scale="2" />
    </button>
    <div class="badge bg-red-900 w-32">
      {{ stopwatch.hours }} : {{ stopwatch.minutes }} : {{ stopwatch.seconds }}
    </div>
  </div>
</template>
