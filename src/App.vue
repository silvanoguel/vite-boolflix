<script>
import axios from "axios";
import {store} from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue"

export default {
  components: { AppHeader, AppMain },
  data() {
    return {
      store
    }
  },
  mounted() {
   
  },
  methods: {
    performSearch() {
      if(this.store.searchKey) {
        this.getMovies();
        this.getSeries();
      }
    },
    getMovies(){
      axios.get(`${this.store.apiBaseUrl}/search/movie`, {
        params: {
          api_key: this.store.apikey,
          query: this.store.searchKey
        }
      }).then((resp) => {
        this.store.movies = resp.data.results;
      }).catch(err => {
        console.log(err)
      })
    },
    getSeries(){
      axios.get(`${this.store.apiBaseUrl}/search/tv`, {
        params: {
          api_key: this.store.apikey,
          query: this.store.searchKey
        }
      }).then((resp) => {
        this.store.series = resp.data.results;
      }).catch(err => {
        console.log(err)
      })
    },
  },
}

</script>

<template>
 
  <AppHeader @search="performSearch"/>
  <AppMain />
  
</template>


<style lang="scss">
@use './styles/general.scss';

</style>