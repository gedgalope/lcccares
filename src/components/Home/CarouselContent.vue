<template>
  <div class="CarouselContent pa-5 ma-0">
    <v-card flat fill-height color="transparent" class="card-container">
      <v-card-text fill-height >
        <v-container fill-height grid-list-xs>
          <v-layout column wrap>
            <v-flex xs8>
              <v-layout row class="pa-0 ma-0">
                <v-flex xs12 sm6 md6 lg6 xl6 >
                  <span
                    class="title font-weight-regular font-italic carousel-text"
                    
                  >{{carouselText.title}}</span>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-divider color="black" style="width:50%;"></v-divider>
            <v-flex xs12>
              <social-buttons></social-buttons>
            </v-flex>
            <v-divider color="black" style="width:62%;"></v-divider>
            <v-flex xs12>
              <v-layout row>
                <v-flex xs12 sm12 md6 lg6 xl6 class="hidden-xs-only">
                  <span
                    class="display-1 font-weight-light carousel-text"
                    
                  >{{carouselText.text}}</span>
                </v-flex>
              </v-layout>
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
.CarouselContent{
  background-color: rgba(97, 97, 97, 0.7);
}
.carousel-text{
  color: #E0E0E0;
}
</style>
