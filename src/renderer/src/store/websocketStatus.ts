import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWebsocketStatus = defineStore('websocketStatus', () => {
  const status = ref()
  const client = ref()

  const updateClient = (newClient: WebSocket | null): void => {
    console.log(newClient)
    client.value = newClient
  }

  return { status, client, updateClient }
})
