<template>
  <div class="SocialButtons">
    <v-container grid-list-xs class="pa-0 ma-0">
      <v-layout row wrap>
        <v-flex xs6 class="pa-0 ma-0">
          <span class="hidden-sm-and-down">
            <v-layout row wrap class="pa-0 ma-0">
              <v-flex v-for="(socialmedia, index) in social" :key="index" xs2 shrink>
                <v-btn :color="socialmedia.bgColor" :round="Round" :icon="Icon">
                  <v-icon>{{socialmedia.icon}}</v-icon>
                </v-btn>
              </v-flex>
              <v-flex grow></v-flex>
            </v-layout>
          </span>
          <span class="hidden-md-and-up">
            <v-layout row wrap class="pa-0 ma-0">
              <v-flex v-for="(socialmedia, index) in social" :key="index" xs3 shrink>
                <v-btn :color="socialmedia.bgColor" icon>
                  <v-icon>{{socialmedia.icon}}</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </span>
        </v-flex>
        <v-flex xs6></v-flex>
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
  props: {
    Round: {
      type: Boolean,
      default: false
    },
    Icon: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
</style>


