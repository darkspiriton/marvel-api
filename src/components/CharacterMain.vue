<template>
  <div id="app" class="page">
    <SearchCharacterForm  />
    <CharactersList />
  </div>
</template>

<script>
import SearchCharacterForm from './elements/SearchCharacterForm '
import CharactersList from './elements/CharactersList'

export default {
  name: 'App',
  components: {
    SearchCharacterForm,
    CharactersList
  }
}
</script>
