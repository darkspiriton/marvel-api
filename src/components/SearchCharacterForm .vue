<template>
  <div class="search-character__form">
    <form @submit.prevent
      @submit="handleSearch()">

      <div class="ui action input">
        <input v-model="name"
          placeholder="Character Name"
          type="text"
          required />

          <button class="ui icon pink button">
            <i class="search icon"></i>
          </button>
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.search-character__form {
  display: flex;
  justify-content: center;
  padding: 40px;
}
</style>
<script>
export default {
  name: 'SearchCharacterForm',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    handleSearch () {
      this.$store.dispatch('FETCH_CHARACTERS', this.name)
    }
  }
}
</script>
