<script setup lang="ts">
import { useWebsocketStatus } from '@renderer/store/websocketStatus'
import { onMounted, reactive } from 'vue'
import { readyState } from '../services/socket'

const socketStore = useWebsocketStatus()

const state = reactive({
  showErrorMessage: false,
  errorMessage: ''
})

// Socket client
const socketClient = (): void => {
  const socketClient = new WebSocket('ws://127.0.0.1:8000/transcribe-audio')
  socketStore.updateStatus(readyState[socketClient.readyState])

  socketClient.onclose = (event): void => {
    socketStore.updateStatus(event.type)
    socketStore.updateClient()
  }

  socketClient.onerror = (): void => {
    state.errorMessage = 'Unable to connect to the server! Please try again'
    state.showErrorMessage = true

    setTimeout(() => {
      state.showErrorMessage = false
      state.errorMessage = ''
    }, 2000)
    socketStore.updateClient()
  }

  socketClient.onopen = (event): void => {
    socketStore.updateStatus(event.type)
    socketStore.updateClient(socketClient)
  }
}

onMounted(() => {
  socketClient()
})
</script>

<template>
  <!-- container -->
  <div class="flex justify-between p-4">
    <!-- title -->
    <div class="text-white text-4xl font-semibold font-serif">Audio Transcriber</div>

    <!-- websocket connection status -->
    <div class="flex items-center space-x-5">
      <div class="relative flex h-3 w-3">
        <div
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
        ></div>
        <div
          class="relative inline-flex rounded-full h-3 w-3"
          :class="{
            'bg-green-400': socketStore.status === 'open',
            'bg-red-500': socketStore.status !== 'open'
          }"
        ></div>
      </div>
      <div v-if="socketStore.status === 'open'" class="uppercase font-mono">
        {{ socketStore.status }}
      </div>
      <button
        v-else
        class="btn relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        @click="socketClient"
      >
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
          Connect to Server!
        </span>
      </button>
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
  <!-- Error message -->
  <div v-if="state.showErrorMessage" class="toast toast-top">
    <div class="alert alert-info">
      <div>
        <span>{{ state.errorMessage }}</span>
      </div>
    </div>
  </div>
</template>
