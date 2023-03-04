<script setup lang="ts">
import Header from './components/Header.vue'
import Container from './components/Container.vue'
import AudioControls from './components/AudioControls.vue'
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
</template>
