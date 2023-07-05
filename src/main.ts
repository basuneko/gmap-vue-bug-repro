import { createApp } from 'vue'
import './style.css'
import { GmapVuePlugin } from '@gmap-vue/v3';
import App from './App.vue'

const app = createApp(App)
app.use(GmapVuePlugin, {
  load: {
    key: import.meta.env.VITE_GOOGLE_MAPS_KEY
  }
})
app.mount('#app')
