<script setup lang="ts">
import { useWebsocketStatus } from '../store/websocketStatus'
import { storeToRefs } from 'pinia'

const store = useWebsocketStatus()
const { status } = storeToRefs(store)
</script>

<template>
  <!-- container -->
  <div class="flex justify-between p-4">
    <!-- title -->
    <div class="text-white text-4xl font-semibold font-serif">Audio Transcriber</div>

    <!-- websocket connection status -->
    <div class="flex items-center">
      <div class="relative flex h-3 w-3">
        <div
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
        ></div>
        <div class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></div>
      </div>
      <div class="pl-5">{{ status }}</div>
    </div>

    <!--buttons container-->
    <div class="flex space-x-2">
      <button
        class="btn relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
          Clear
        </span>
      </button>
      <button
        class="btn relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
          Export
        </span>
      </button>
    </div>
  </div>
</template>
