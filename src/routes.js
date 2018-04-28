import VueRouter from 'vue-router'
import CharacterMain from './components/CharacterMain'

const routes = [
  {
    path: '/',
    name: 'search',
    component: CharacterMain
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
