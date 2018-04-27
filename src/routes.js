import VueRouter from 'vue-router'
import App from './components/App'

const routes = [
  {
    path: '/',
    component: App
  }
]

const router = new VueRouter({
  routes
})

export default router
