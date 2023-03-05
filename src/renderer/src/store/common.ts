import { defineStore } from 'pinia'

export const useToastMessage = defineStore('useToastMessage', {
  state: () => ({
    showMessage: false as boolean,
    message: '' as string
  }),
  actions: {
    updateMessage(toastMessage: string) {
      this.message = toastMessage
      this.showMessage = true
      setTimeout(() => {
        this.showMessage = false
        this.message = ''
      }, 3000)
    }
  }
})
