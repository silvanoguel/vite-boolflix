import { reactive } from 'vue';

export const store = reactive({
  searchKey: "",
  movies: [],
  apiBaseUrl: "https://api.themoviedb.org"
  loading: false
  apikey: "95f783fa6f5984ea7a43c133d9cdb122"
});