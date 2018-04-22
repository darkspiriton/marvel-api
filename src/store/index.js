import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const API_PATH = 'https://gateway.marvel.com:443/v1/public/characters'
const API_KEY = '9c81f42791192294caffafc8b5bd446f'

const store = new Vuex.Store({
  state: {
    data: []
  },
  getters: {
    characters: state => {
      return state.data
    },
    characterId: state => id => {
      return state.data.find(character => { return character.id === id })
    }
  },
  mutations: {
    RECEIVE_CHARACTERS (state, { characters }) {
      state.data = characters
    }
  },
  actions: {
    async FETCH_CHARACTERS ({ commit }, name, order = 'name') {
      try {
        let requestString = `${API_PATH}?nameStartsWith=${name}&orderBy=${order}&apikey=${API_KEY}`
        let response = await fetch(requestString)

        if (!response.ok) {
          throw Error(response.statusText)
        }

        let dataResponse = await response.json()

        let characters = []
        dataResponse.data.results.forEach(character => {
          if (character.description.trim() !== '') {
            character.image = `${character.thumbnail.path}.${character.thumbnail.extension}`
            characters.push(character)
          }
        })
        commit('RECEIVE_CHARACTERS', { characters })
      } catch (error) {
        console.log(error)
      }
    }

  }

})

export default store
