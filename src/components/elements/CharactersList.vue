<template>
  <div>
    <div
      v-if="showCharacters"
      class="ui characters-list cards">
      <div
        v-for="character in characters"
        :key="character.name"
        class="ui card fadeIn-animation">
        <div class="image">
            <img :src="character.image" />
        </div>
        <div class="content">
          <div class="header">{{character.name}}</div>
          <div class="description">
            {{character.description}}
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
            <router-link
              tag="button"
              class="ui icon purple tiny button"
              :to="{ name: 'character-detail', params: {characterId: character.id}}">
              More Info
            </router-link>
          </span>
        </div>
      </div>
    </div>
    <div
      v-if="showLoading"
      class="container" >
      <LineScaleLoader
        color="rgb(224, 57, 151)"
        size="80px" />
    </div>
    <div
      v-else-if="showEmpty"
      class="container empty">
      no results found
    </div>
  </div>
</template>

<script>
import 'vue-loaders/dist/vue-loaders.css'
import { LineScaleLoader } from 'vue-loaders'
import { mapGetters } from 'vuex'
export default {
  components: {
    LineScaleLoader
  },
  computed: {
    ...mapGetters([
      'characters',
      'loadingCharacter'
    ]),
    showCharacters () {
      return this.characters instanceof Array && this.characters.length > 0 && !this.loadingCharacter
    },
    showLoading () {
      return this.loadingCharacter
    },
    showEmpty () {
      return this.characters instanceof Array && this.characters.length === 0
    }

  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  &.empty {
    font-size: 2em;
  }
}

.characters-list.cards {
  margin-top: 2em;
  justify-content: center;
}
.characters-list.cards .image {
  position: relative;
  width: 100%;
  height: 246px;
  overflow: hidden;
}
.characters-list.cards .image img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: auto;
  width: 100%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.ui.card,
.ui.cards > .card {
  width: 364px;
}
</style>
