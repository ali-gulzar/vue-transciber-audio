import { createApp } from 'vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { CoMediaPlay, CoMediaPause } from 'oh-vue-icons/icons'
import { createPinia } from 'pinia'
import 'animate.css'

import App from './App.vue'

addIcons(CoMediaPlay, CoMediaPause)

createApp(App).use(createPinia()).component('v-icon', OhVueIcon).mount('#app')
