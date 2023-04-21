<script>

import { store } from '../store';
import AppCard from './AppCard.vue';

export default {
    name: "AppMain",
    data(){
        return {
            store
        };
    },
    components: { AppCard }
}

</script>

<template>

    <div class="container">
        <ul class="row row-cols-5 g-3">
            <li v-for="movie in store.movies" :key="movie.id">
                <AppCard :cardObj="movie" />
            </li>
        </ul>
        <ul class="row row-cols-5 g-3">
            <li v-for="serie in store.series" :key="serie.id">
                <AppCard :cardObj="serie" />
            </li>
        </ul>
    </div>
</template>


<style scoped lang="scss">

ul {
    list-style-type:none ;
}

</style>


