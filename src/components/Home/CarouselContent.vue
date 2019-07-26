<template>
  <div class="CarouselContent pa-5 ma-0">
    <v-card flat fill-height color="transparent">
      <v-card-text fill-height>
        <v-container fill-height grid-list-xs>
          <v-layout column wrap>
            <v-flex xs12>
              <v-layout row class="pa-0 ma-0">
                <v-flex xs6>
                  <span
                    class="title font-weight-regular font-italic"
                    style="color:#757575; width:50% !important;"
                  >{{carouselText.title}}</span>
                </v-flex>
                <v-flex xs6></v-flex>
              </v-layout>
            </v-flex>
            <v-divider color="black" style="width:50%;"></v-divider>
            <v-flex xs12>
              <social-buttons :Round="true"></social-buttons>
            </v-flex>
            <v-divider color="black" style="width:62%;"></v-divider>
            <v-flex xs12>
              <v-layout row>
                <v-flex xs6>
                  <span
                    class="display-1 font-weight-light"
                    style="color:#424242;"
                  >{{carouselText.text}}</span>
                </v-flex>
                <v-flex xs6></v-flex>
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
</style>
