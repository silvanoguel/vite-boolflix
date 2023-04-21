<script>

import { store } from '../store';

export default {
    name: "AppCard",
    props: {
        cardObj: Object,
    },
    data() {
        return {
            store,
            showInfo: false,
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
      <div class="card text-bg-dark card_shadow card_hover" @mouseover="showInfo = true" @mouseleave="showInfo = false">
          <div v-show="!showInfo" class="py-4">
              <div class="my-card-image">
                <img :src="`https://image.tmdb.org/t/p/w342${cardObj.poster_path}`" alt="">
              </div>
          </div>

          <div class="details" v-show="showInfo">
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
}

.details {
  height: 100%;
  img {
    width: 30px,
  }
}
.card {
  cursor: pointer;
  height: 100%;
  background-color: black;
}

.my-card-image {
  min-height: 300px;
  img {
    max-height: 300px; 
    object-fit: contain;
  }
}
.rating-stars {
  color: orange
}

</style>



