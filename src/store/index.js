import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { API_PATH, API_KEY } from '../config'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    data: null,
    loadingData: false
  },
  getters: {
    characters: state => {
      return state.data
    },
    getCharacterId: state => id => {
      return state.data ? state.data.find(character => { return character.id === id }) : null
    },
    loadingCharacter: state => {
      return state.loadingData
    }
  },
  mutations: {
    RECEIVE_CHARACTERS (state, { characters }) {
      state.data = characters
    },
    SET_LOADING_STATUS (state, status) {
      state.loadingData = status
    }
  },
  actions: {
    async FETCH_CHARACTERS ({ commit }, name, order = 'name') {
      try {
        commit('SET_LOADING_STATUS', true)
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
        commit('SET_LOADING_STATUS', false)
      } catch (error) {
        console.log(error)
      }
    }

  }

})

export default store
