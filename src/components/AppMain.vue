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
        <h2>MOVIES</h2>
        <ul class="row row-cols-5 g-3">
            <li v-for="movie in store.movies" :key="movie.id" @mouseover="active[movie.id] = true"
            @mouseout="active[movie.id] = false">
                <AppCard :cardObj="movie" />
            </li>
        </ul>


        <h2>Series</h2>
        <ul class="row row-cols-6 g-3">
            <li v-for="serie in store.series" :key="serie.id" @mouseover="active[serie.id] = true"
            @mouseout="active[serie.id] = false">
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


