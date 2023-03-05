import { defineStore } from 'pinia'

export const useWebSocket = defineStore('webSocket', {
  state: () => ({
    status: '',
    client: null as WebSocket | null
  }),
  actions: {
    updateSocket(status: string, client: WebSocket | null) {
      this.status = status
      this.client = client
    }
  }
})
