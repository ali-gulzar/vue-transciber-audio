import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useToastMessage = defineStore('useToastMessage', () => {
  const showMessage = ref(false)
  const message = ref('')

  const updateMessage = (toastMessage: string): void => {
    message.value = toastMessage
    showMessage.value = true
    setTimeout(() => {
      showMessage.value = false
      message.value = ''
    }, 3000)
  }

  return { showMessage, message, updateMessage }
})
