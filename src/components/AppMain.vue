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
    <h2>MOVIES</h2>
    <ul>
        <li v-for="movie in store.movies">
            <AppCard :movie="movie" />
        </li>
    </ul>


</template>

