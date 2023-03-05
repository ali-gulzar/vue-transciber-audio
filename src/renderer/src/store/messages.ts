import { defineStore } from 'pinia'
import { Message } from '@renderer/types/messages'

export const useMessages = defineStore('messages', {
  state: () => ({
    messages: [] as Message[]
  }),
  actions: {
    addMessage(message: Message) {
      this.messages.push(message)
    }
  }
})
