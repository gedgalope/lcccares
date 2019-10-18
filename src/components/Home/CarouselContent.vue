<template>
  <div class="CarouselContent" style="width:100%;">
    <v-card flat color="transparent" class="card-container">
      <v-card-text>
        <v-container grid-list-xs class="pa-0 ma-0">
          <v-layout column wrap>
            <v-flex xs12>
              <!-- <v-layout row class="pa-0 ma-0">
              <v-flex xs12 sm6 md6 lg6 xl6 >-->
              <span
                class="subtitle-1 font-weight-regular text-uppercase carousel-text"
              >{{carouselText.title}}</span>
              <!-- </v-flex>
              </v-layout>-->
            </v-flex>
            <!-- <v-divider color="black" style="width:50%;"></v-divider>
            <v-flex xs12>
              <social-buttons></social-buttons>
            </v-flex>
            <v-divider color="black" style="width:62%;"></v-divider>-->
            <v-flex xs12>
              <!-- <v-layout row>
              <v-flex xs12 sm12 md6 lg6 xl6 class="hidden-xs-only">-->
              <span class="body-1 font-weight-light carousel-text">{{carouselText.text}}</span>
              <!-- </v-flex>
              </v-layout>-->
            </v-flex>
            <v-flex xs12>
              <social-buttons></social-buttons>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SocialButtonsVue from "../icons/SocialButtons.vue";
export default {
  name: "carousel-content",
  methods: {},
  computed: {
    ...mapState({
      CarouselText: state => state.carousel.CarouselText
    })
  },
  components: {
    "social-buttons": SocialButtonsVue
  },
  props: {
    carouselText: Object
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.CarouselContent {
  background-color: rgba(97, 97, 97, 0.7);
}
.carousel-text {
  color: #e0e0e0;
}
</style>
