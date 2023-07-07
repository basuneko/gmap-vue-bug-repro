import { createApp } from 'vue'
import './style.css'
import { GmapVuePlugin } from '@gmap-vue/v3';
import App from './App.vue'

const app = createApp(App)

const googleMapsApiKey = localStorage.getItem('googleMapsApiKey');

app.use(GmapVuePlugin, {
  load: {
    key: googleMapsApiKey
  }
})
app.mount('#app')
