import VueRouter from 'vue-router'
import CharacterMain from './components/CharacterMain'
import CharacterDetail from './components/CharacterDetail'

const routes = [
  {
    path: '/',
    name: 'character-main',
    component: CharacterMain
  },
  {
    path: '/character/:characterId',
    name: 'character-detail',
    component: CharacterDetail,
    beforeEnter: (to, from, next) => {
      to.params.characterId >= 0 ? next() : next({path: '/'})
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
