import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWebsocketStatus = defineStore('websocketStatus', () => {
  const status = ref('Connected')

  return { status }
})
