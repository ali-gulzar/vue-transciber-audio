import { defineStore } from 'pinia'

export const useRecordingStatus = defineStore('recordingStatus', {
  state: () => ({
    recording: false
  }),
  actions: {
    updateStatus(newStatus: boolean) {
      this.recording = newStatus
    }
  }
})
