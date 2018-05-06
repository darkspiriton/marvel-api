<template>
  <div>
    <div
      v-if="character"
      class="container">
      <h1>
        {{characterId($route.params.characterId).name}}
      </h1>
      <router-link
        tag="button"
        class="ui icon purple tiny button"
        :to="{ name: 'character-main'}">Search
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CharacterDetail',
  data () {
    return {
      character: null
    }
  },
  created () {
    let id = this.$route.params.characterId
    this.character = this.characterId(id)
  },
  computed: {
    ...mapGetters(['characterId'])
  },
  methods: {

  }
}
</script>
