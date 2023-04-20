<script>
import { store } from '../store';

export default {
  name: "AppHeader",
  emits: ["search"],
  data() {
    return {
      store
    }
  }
}

</script>

<template>
  <h2>Header</h2>
  <input type="text" v-model.trim="store.searchKey">
  <button @click="$emit('search')">SEARCH</button>
</template>

<style scoped lang="scss">

</style>

