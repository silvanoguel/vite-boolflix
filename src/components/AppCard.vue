<script>

export default {
    name: "AppCard",
    props: {
        movie: Object,
    },
    data() {
        return {

        }
    },
    methods: {
        rating(voteAverage) {
            let vote = Math.round(voteAverage / 2);
            return vote;
        }
    }
}


</script>

<template>




    <div>
        <h3> {{ movie.title }}</h3>
        <h4> {{ movie.original_title }}</h4>
        <div> {{ movie.original_language }}
            <img v-if="movie.original_language === 'it'" src="https://flagsapi.com/IT/shiny/32.png" alt="Flag Italy">
            <img v-if="movie.original_language === 'en'" src="https://flagsapi.com/GB/shiny/32.png" alt="Flag England">
            <img v-if="movie.original_language === 'ja'" src="https://flagsapi.com/JP/shiny/32.png" alt="Flag Japan">
        </div>
        
        <p> {{ movie.vote_average }}</p>
        <div>
            <span v-for="star in rating(movie.vote_average)">&#9733;</span>
            <span v-for="star in 5 - rating(movie.vote_average)">&#9734;</span>
        </div>
        
    </div>



</template>


