import { createApp } from 'vue'
import 'animate.css'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { CoMediaPlay, CoMediaPause } from 'oh-vue-icons/icons'

import App from './App.vue'

addIcons(CoMediaPlay, CoMediaPause)

createApp(App).component('v-icon', OhVueIcon).mount('#app')
