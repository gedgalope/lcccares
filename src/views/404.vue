<template>
  <div class="404">
    <v-card>
      <v-container fill-height grid-list-xs>
        <v-layout row wrap>
          <v-flex xs6 class="text-xs-center">
            <v-avatar size="400">
              <v-img :src="images.dogNotFound" alt="404"></v-img>
            </v-avatar>
          </v-flex>
          <v-flex grow>
            <v-layout column>
              <v-flex xs12 class="font-weight-black display-4 text-xs-center">
                <span>404!</span>
              </v-flex>
              <v-flex xs12 class="font-weight-black display-1 text-xs-center">
                <span>Page not Found</span>
              </v-flex>
              <v-flex xs12 class="font-weight-black headline text-xs-center">
                <span>
                  Try:
                  <br>
                  <router-link to="/home" class="links">Home </router-link>
                  <br>
                  <router-link to="/services" class="links">Services </router-link>
                  <br>
                  <router-link to="/about" class="links">About us </router-link>
                </span>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
// import notFound from '../assets/dogNotFound'
export default {
  name: "page-not-found",
  data() {
    return {
      images: {
        dogNotFound: require("../assets/dogNotFound.jpeg")
      }
    };
  }
};
</script>

<style scoped>
.links{
  color: blue;
  cursor: pointer;
}
</style>
