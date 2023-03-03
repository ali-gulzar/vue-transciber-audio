<template>
  <!-- container -->
  <div class="flex justify-between p-4">
    <!-- title -->
    <div class="text-white text-4xl font-serif">Audio Transcriber</div>

    <!-- websocket connection status -->
    <div class="flex items-center">
      <div class="relative flex h-3 w-3">
        <div
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
        ></div>
        <div class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></div>
      </div>
      <div class="pl-5">Websocket Status</div>
    </div>

    <!--buttons container-->
    <div class="flex space-x-2">
      <button class="btn bg-green-800 text-white">Clear</button>
      <button class="btn bg-green-800 text-white">Export</button>
    </div>
  </div>
</template>
