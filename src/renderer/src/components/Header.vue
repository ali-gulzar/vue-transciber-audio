<script setup lang="ts">
import { useWebSocket } from '@renderer/store/webSocket'
import { useToastMessage } from '@renderer/store/common'
import { useMessages } from '@renderer/store/messages'
import { onMounted } from 'vue'
import { readyState } from '../services/socket'
import pdfMake from 'pdfmake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
import htmlToPdfMake from 'html-to-pdfmake'

const socketStore = useWebSocket()
const toastStore = useToastMessage()
const messagesStore = useMessages()

// download transcribed messages as pdf
const downloadPdfDocument = (): void => {
  if (messagesStore.messages.length === 0) {
    toastStore.updateMessage('No transcribed message to download!')
  } else {
    const input = document.getElementById('pdf-download')
    const html = htmlToPdfMake(input?.innerHTML)
    pdfMake.vfs = pdfFonts.pdfMake.vfs
    pdfMake.createPdf({ content: html }).download('audio-transcriber.pdf')
  }
}

// Socket client
const initSocketClient = (): void => {
  const socketClient = new WebSocket('ws://127.0.0.1:8000/transcribe-audio')
  socketStore.status = readyState[socketClient.readyState]

  socketClient.onclose = (event): void => {
    socketStore.updateSocket(event.type, null)
  }

  socketClient.onerror = (event): void => {
    toastStore.updateMessage('Unable to connect to server. Please try again!')
    socketStore.updateSocket(event.type, null)
  }

  socketClient.onopen = (event): void => {
    socketStore.status = event.type
    socketStore.updateSocket(event.type, socketClient)
  }

  socketClient.onmessage = (event): void => {
    messagesStore.addMessage(JSON.parse(event.data))
    window.scrollTo(0, document.body.scrollHeight)
  }
}

onMounted(() => {
  initSocketClient()
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
        class="btn relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 text-white focus:outline-none"
        @click="initSocketClient"
      >
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
          Connect to Server!
        </span>
      </button>
    </div>

    <!--buttons container-->
    <div class="flex space-x-2">
      <button
        class="btn relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 text-white focus:outline-none"
        @click="messagesStore.clearMessages"
      >
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
          Clear
        </span>
      </button>
      <button
        class="btn relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 text-white focus:outline-none"
        @click="downloadPdfDocument"
      >
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
          Export
        </span>
      </button>
    </div>
  </div>
</template>
