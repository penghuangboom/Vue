import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './styles/index.less'
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
