<template>
  <div class="SocialButtons">
    <v-container grid-list-xs class="pa-0 ma-0">
      <v-layout row>
        <v-flex xs12 sm6 md6 lg6 xl6 class="pa-0 ma-0">
          <span class="hidden-sm-and-down text-xs-center">
            <v-layout row class="pa-0 ma-0">
              <v-flex v-for="(socialmedia, index) in social" :key="index" xs2 shrink>
                <v-btn
                  :color="socialmedia.bgColor"
                  round
                  @click="shareToSocial(index)"
                >
                  <v-icon>{{socialmedia.icon}}</v-icon>
                </v-btn>
              </v-flex>
              <v-flex grow></v-flex>
            </v-layout>
          </span>
          <span class="hidden-md-and-up">
            <v-layout row wrap class="pa-0 ma-0">
              <v-flex v-for="(socialmedia, index) in social" :key="index" xs3 shrink>
                <v-btn :color="socialmedia.bgColor" icon @click="shareToSocial(index)">
                  <v-icon>{{socialmedia.icon}}</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </span>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "social-buttons",
  data() {
    return {
      social: [
        {
          name: "facebook",
          icon: "mdi-facebook",
          bgColor: "#2f55a4"
        },
        {
          name: "twitter",
          icon: "mdi-twitter",
          bgColor: "#38A1F3"
        },
        {
          name: "pinterest",
          icon: "mdi-pinterest",
          bgColor: "#c8232c"
        },
        {
          name: "linkedin",
          icon: "mdi-linkedin",
          bgColor: "#0077B5"
        }
      ]
    };
  },
  methods: {
    /*eslint-disable*/
    shareToSocial(social) {
      // let currentURL = window.location.href;
      // console.log(currentURL)
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
    }
  },
  props: {
  }
};
</script>

<style scoped>
</style>


