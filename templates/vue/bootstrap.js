import { createApp } from 'vue'
import { createPinia } from 'pinia'

import AppVue from './App.vue'
// import router from './router'

const app = createApp(AppVue)

app.use(createPinia())
// app.use(router)

app.mount('#root')
