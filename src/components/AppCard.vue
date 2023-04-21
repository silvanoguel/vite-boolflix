<script>

export default {
    name: "AppCard",
    props: {
        cardObj: Object,
    },
    data() {
        return {
            active: {}
        }
    },
    methods: {
        rating(voteAverage) {
            let vote = Math.ceil(voteAverage / 2);
            return vote;
        }
    },
    computed: {
        objTitle() {
            return this.cardObj.title ? this.cardObj.title : this.cardObj.name
        },
        objOriginalTitle() {
            return this.cardObj.original_title ? this.cardObj.original_title : this.cardObj.original_name

        },
    }
}


</script>

<template>

    <div class="container">

        <!-- Card -->
        <div class="card">

            <img :src="cardObj.poster_path ? `https://image.tmdb.org/t/p/w342${cardObj.poster_path}` : 'img.jpg'"
            :alt="cardObj.title">

            <div class="details" v-show="active[cardObj.id]">
                <h3> {{ ObjTitle }}</h3>
                <h4> {{ ObjOriginalTitle }}</h4>
                <div> {{ cardObj.original_language }}
                    <img v-if="cardObj.original_language === 'it'" src="https://flagsapi.com/IT/shiny/32.png" alt="Flag Italy">
                    <img v-if="cardObj.original_language === 'en'" src="https://flagsapi.com/GB/shiny/32.png" alt="Flag England">
                    <img v-if="cardObj.original_language === 'ja'" src="https://flagsapi.com/JP/shiny/32.png" alt="Flag Japan">
                    <img v-if="cardObj.original_language === 'es'" src="https://flagsapi.com/ES/shiny/32.png" alt="Flag Spain">
                </div>
                <p> {{ cardObj.vote_average }}</p>
                <div class="rating-stars">
                    <span v-for="star in rating(cardObj.vote_average)">&#9733;</span>
                    <span v-for="star in 5 - rating(cardObj.vote_average)">&#9734;</span>
                </div>
                <h6>{{ cardObj.overview }}</h6>
            </div>

        </div>
        <!-- Card -->

    </div>

</template>


<style scoped lang="scss">
.container {
  margin-top: 50px;
  .card {
    cursor: pointer;
    position: relative;
    color: white;
    width: 300px;
    
    img {
      width: 300px;
      height: 350px;
      object-fit: cover;
      text-align: center;
    }
    .details {
      padding: 10px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgb(255, 255, 255);
      color: black;
      overflow-y: auto;
      text-align: center;
      h4,
      .rating {
        font-size: 1.30rem;
        margin-bottom: 20px;
        text-align: center;
        color:black;
      }
      span {
        color: orange;
      }
      h6 {
        font-size: 1.20rem;
        font-weight: 100;
        text-align: center;
        color: black;
      }
    }
  }
    h3{
      color: yellow;
    }
  }

</style>



