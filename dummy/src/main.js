
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import './assets/main.css'




const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
