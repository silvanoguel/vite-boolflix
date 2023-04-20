import { reactive } from 'vue';

export const store = reactive({
  searchKey: "",
  movies: [],
  series: [],
  loading: false,
  apiBaseUrl: "https://api.themoviedb.org/3",
  apikey: "95f783fa6f5984ea7a43c133d9cdb122",
  language:"",
});