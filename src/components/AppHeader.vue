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
  <header>
    <div class="container">
      <h1 class="title mx-3">BoolFlix</h1>
      <div class="input mx-3">
          <input type="text" v-model.trim="store.searchKey" placeholder="Search film or tv serie">
          <button class="btn btn-danger ms-3" @click="$emit('search')">SEARCH</button>
      </div>

    </div>


  </header>
  


</template>

<style scoped lang="scss">

.container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100px;
    padding: 50px;
}
  h1 {
    color: red;
  }
  button {
    background-color: white;
    color: black;
}

.input{
    min-width: 40vh;
}


</style>

