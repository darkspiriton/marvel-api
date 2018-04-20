<template>
  <div>
    <h1>Vuejs</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: 'hulk'
    }
  },
  created () {
    this.$store.dispatch('FETCH_CHARACTERS', this.name)
  }
}
</script>
