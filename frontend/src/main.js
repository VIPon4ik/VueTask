import './main.css'

import { createApp } from 'vue'
import App from './App.vue'
import components from './components/ui'
import router from '../src/routes/router'

const app = createApp(App)

app.use(router)

components.forEach(component => {
  app.component(component.name, component)
})

app.mount('#app')
