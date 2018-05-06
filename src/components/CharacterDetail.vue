<template>
  <div>
      <router-link
        tag="button"
        class="ui icon purple tiny button"
        :to="{ name: 'character-main'}">Search
      </router-link>
    <div
      v-if="character"
      class="container">
      <h1>
        {{character.name}}
      </h1>
      <p>
        {{character.description}}
      </p>
      <div v-if="character.urls.length > 0">
        <h2>URLS</h2>
        <ul>
          <li
            v-for="(url, index) in character.urls"
            :key="index"> <a :href="url.url" v-text="url.type" /> </li>
        </ul>
      </div>
      <div v-if="character.comics.items.length > 0">
        <h2>
          COMICS
          <!-- <a :href="character.comics.collectionURI">COMICS</a> -->
        </h2>
        <ul>
          <li
            v-for="(item, index) in character.comics.items"
            :key="index"
            v-text="item.name">
            <!-- <a :href="item.resourceURI" v-text="item.name" /> -->
          </li>
        </ul>
      </div>
      <div v-if="character.series.items.length > 0">
        <h2>
          SERIES
          <!-- <a :href="character.series.collectionURI">SERIES</a> -->
        </h2>
        <ul>
          <li
            v-for="(item, index) in character.series.items"
            :key="index"
            v-text="item.name">
            <!-- <a :href="item.resourceURI" v-text="item.name" /> -->
          </li>
        </ul>
      </div>
      <div v-if="character.events.items.length > 0">
        <h2>
          EVENTS
          <!-- <a :href="character.events.collectionURI">EVENTS</a> -->
        </h2>
        <ul>
          <li
            v-for="(item, index) in character.events.items"
            :key="index"
            v-text="item.name">
            <!-- <a :href="item.resourceURI" v-text="item.name" /> -->
          </li>
        </ul>
      </div>
      <div v-if="character.stories.items.length > 0">
        <h2>
          STORIES
          <!-- <a :href="character.stories.collectionURI">STORIES</a> -->
        </h2>
        <ul>
          <li
            v-for="(item, index) in character.stories.items"
            :key="index"
            v-text="item.name">
            <!-- <a :href="item.resourceURI" v-text="item.name" /> -->
          </li>
        </ul>
      </div>
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
    let character = this.getCharacterId(id)
    this.character = character || this.$router.replace('/')
  },
  computed: {
    ...mapGetters(['getCharacterId'])
  },
  methods: {

  }
}
</script>
