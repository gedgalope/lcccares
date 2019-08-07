<template>
  <div class="gallery-thumbnail">
    <v-card flat color="transparent">
      <v-container fluid grid-list-sm fill-height pa-0>
        <v-layout row wrap>
          <v-flex xs12 lg6 md6 sm8 grow>
            <v-card hover class="hidden-sm-and-down" id="v-card">
              <v-img :src="gallery[0]" aspect-ratio="1.8" id="v-img" @click="changeIndex(0)"></v-img>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 md6 shrink>
            <v-container fluid grid-list-xs pa-0>
              <v-layout row wrap justify-space-around>
                <v-flex md6 sm6>
                  <v-card hover class="hidden-sm-and-down" id="v-card">
                    <v-img :src="gallery[1]" aspect-ratio="1.8" id="v-img" @click="changeIndex(1)"></v-img>
                  </v-card>
                </v-flex>
                <v-flex md6>
                  <v-card hover class="hidden-md-and-down" id="v-card">
                    <v-img :src="gallery[2]" aspect-ratio="1.8" id="v-img" @click="changeIndex(2)"></v-img>
                  </v-card>
                </v-flex>
                <v-flex md6 sm6>
                  <v-card hover class="hidden-sm-and-down" id="v-card">
                    <v-img :src="gallery[3]" aspect-ratio="1.8" id="v-img" @click="changeIndex(3)"></v-img>
                  </v-card>
                </v-flex>
                <v-flex md6>
                  <v-card hover class="hidden-md-and-down" id="v-card">
                    <v-img :src="gallery[4]" aspect-ratio="1.8" id="v-img" @click="changeIndex(4)"></v-img>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex xs12 class="hidden-md-and-up">
            <v-carousel hide-delimiters hide-controls>
              <template v-for="(photo,index) in gallery">
                <v-carousel-item :key="index" :src="photo" />
              </template>
            </v-carousel>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>

    <v-btn
      class="social"
      color="transparent"
      dark
      small
      relative
      bottom
      left
      fab
      @click="shareToSocial(1)"
    >
      <v-icon color="#2f55a4">mdi-facebook</v-icon>
    </v-btn>
    <v-btn
      class="social"
      color="transparent"
      dark
      small
      relative
      bottom
      left
      fab
      @click="shareToSocial(2)"
    >
      <v-icon color="#38A1F3" medium>mdi-twitter</v-icon>
    </v-btn>
    <v-btn
      class="social"
      color="transparent"
      dark
      small
      relative
      bottom
      left
      fab
      @click="shareToSocial(3)"
    >
      <v-icon color="#c8232c" medium>mdi-pinterest</v-icon>
    </v-btn>
    <v-btn
      class="social"
      color="transparent"
      dark
      small
      relative
      bottom
      left
      fab
      @click="shareToSocial(4)"
    >
      <v-icon color="#0077B5" medium>mdi-linkedin</v-icon>
    </v-btn>
    <media-gallery :photos="gallery" :imageIndex="imageIndex"></media-gallery>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import FacilitiesMediaVue from '../Home/FacilitiesMedia.vue';
export default {
  name: "gallery-thumbnail",
  beforeCreate() {
  },
  data() {
    return {
      imageIndex:0
    };
  },
  computed: {
    ...mapState({
      gallery: state => state.media.gallery,
      ishidden:state =>state.utils.ishidden
    })
  },
  methods: {
    ...mapMutations({
      changeState: "utils/changeState",
    }),
    shareToSocial(social) {
      // let currentURL = window.location.href;
      switch (social) {
        case 0:
          window.open("https://www.facebook.com/sharer/sharer.php");
          break;
        case 1:
          window.open("https://twitter.com/intent/tweet");
          break;
        case 2:
          window.open("https://pinterest.com/pin/create/button");
          break;
        case 3:
          window.open("https://www.linkedin.com/shareArticle");
          break;
        default:
          break;
      }
    },
    changeIndex(index){
      this.imageIndex=index;
      this.changeState();
    }
  },
  components: {
    'media-gallery':FacilitiesMediaVue
  }
};
</script>

<style scoped>
.social {
  transition: all 0.5;
}
.social:hover {
  transform: scale(1.7);
}
#v-card {
  overflow: hidden;
}
#v-img {
  transition: all 0.5s;
}
#v-card:hover #v-img,
#v-card:focus #v-img {
  transform: scale(1.1);
  display: block;
}
</style>
