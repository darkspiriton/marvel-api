import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    data: []
  },
  getters: {
    characters: state => {
      return state.data
    }
  },
  mutations: {
    RECEIVE_CHARACTERS (state, { characters }) {
      state.data = characters
    }
  },
  actions: {
    async FETCH_CHARACTERS ({ commit }, name) {
      let response = await axios.get('https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=' + name + '&orderBy=name&apikey=9c81f42791192294caffafc8b5bd446f')
      let characters = []
      response.data.data.results.forEach(character => {
        if (character.description.trim() !== '') {
          character.image = character.thumbnail.path + '.' + character.thumbnail.extension
          characters.push(character)
        }
      })
      commit('RECEIVE_CHARACTERS', { characters })
      // console.log(response.data.data.results[0])
    }

  }

})

export default store
