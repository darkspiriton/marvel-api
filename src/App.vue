<template>
  <div id="app" class="page">
    <SearchCharacterForm  />
    <CharactersList />
  </div>
</template>

<script>
import SearchCharacterForm from './components/SearchCharacterForm '
import CharactersList from './components/CharactersList'

export default {
  name: 'App',
  components: {
    SearchCharacterForm,
    CharactersList
  }
}
</script>
