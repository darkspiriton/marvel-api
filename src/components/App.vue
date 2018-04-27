<template>
  <div id="app" class="page">
    <SearchCharacterForm  />
    <CharactersList />
  </div>
</template>

<script>
import SearchCharacterForm from './SearchCharacterForm '
import CharactersList from './CharactersList'

export default {
  name: 'App',
  components: {
    SearchCharacterForm,
    CharactersList
  }
}
</script>
