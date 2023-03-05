import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWebsocketStatus = defineStore('websocketStatus', () => {
  const status = ref('some')
  const client = ref()

  const updateStatus = (type: string): void => {
    status.value = type
  }

  const updateClient = (webSocketClient?: WebSocket): void => {
    client.value = webSocketClient
  }

  return { status, client, updateStatus, updateClient }
})
