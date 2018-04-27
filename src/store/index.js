import Vue from 'vue'
import Vuex from 'vuex'
import { API_PATH, API_KEY } from '../config'

Vue.use(Vuex)

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
