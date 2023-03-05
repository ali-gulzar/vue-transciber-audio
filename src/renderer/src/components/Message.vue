<script setup lang="ts">
import { useMessages } from '@renderer/store/messages'

const messageStore = useMessages()
</script>

<template>
  <div v-for="message in messageStore.messages" :key="message.chunk_id" class="m-4">
    <div class="flex justify-between">
      <!-- transcribed text -->
      <div class="flex-1">
        <div class="chat chat-start">
          <div class="chat-bubble">{{ message.transcribed_text }}</div>
        </div>
      </div>

      <!-- meta data table -->
      <div>
        <table class="table table-compact">
          <tbody>
            <!-- row -->
            <tr>
              <th>Persons</th>
              <td>{{ message.information.persons.join('& ') }}</td>
            </tr>
            <tr>
              <th>Action</th>
              <td>{{ message.information.action.join('& ') }}</td>
            </tr>
            <tr>
              <th>Tasks</th>
              <td>{{ message.information.tasks.join('& ') }}</td>
            </tr>
            <tr>
              <th>Other</th>
              <td>{{ message.information.other_stuff }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="divider">{{ message.time }}</div>
  </div>
</template>
