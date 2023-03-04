import { defineStore } from 'pinia'

export const useRecordingStatus = defineStore('recordingStatus', {
  state: () => ({
    recordingStatus: true
  }),
  actions: {
    updateStatus(newStatus: boolean) {
      this.recordingStatus = newStatus
    }
  }
})
