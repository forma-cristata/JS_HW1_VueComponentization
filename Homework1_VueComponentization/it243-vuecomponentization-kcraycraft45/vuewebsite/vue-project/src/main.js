
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import './assets/site.css';

const app = createApp(App)

app.use(router)

app.mount('#app')