<script setup lang="ts">
import Header from './components/Header.vue'
import Container from './components/Container.vue'
import AudioControls from './components/AudioControls.vue'

import { useToastMessage } from './store/common'

const toastStore = useToastMessage()
</script>

<template>
  <!-- container -->
  <div class="flex flex-col h-screen bg-black">
    <!-- header -->
    <Header />

    <!-- data container -->
    <Container />

    <!-- audio controls container -->
    <AudioControls />
  </div>

  <!-- Toast message -->
  <div v-if="toastStore.showMessage" class="toast toast-top">
    <div class="alert alert-info">
      <div>
        <span>{{ toastStore.message }}</span>
      </div>
    </div>
  </div>
</template>
