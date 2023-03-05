import { defineStore } from 'pinia'

export const useAudio = defineStore('useAudio', {
  state: () => ({
    recording: false as boolean
  }),
  actions: {
    updateStatus(newStatus: boolean) {
      this.recording = newStatus
    }
  }
})
