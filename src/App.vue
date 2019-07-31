<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>LCCares</span>
        <span class="font-weight-light">Logo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <span class="hidden-xs-only">
        <v-tabs color="transparent">
          <v-tab large class="vtab text-capitalize" @click="toPage('home')" >Home</v-tab>
          <v-tab large class="vtab text-capitalize" @click="toPage('services')" >Services</v-tab>
          <v-tab large class="vtab text-capitalize" @click="toPage('about')" >About Us</v-tab>
          <v-tab large class="vtab text-capitalize" @click="toPage('contact')" >Contact Us</v-tab>
        </v-tabs>
      </span>
      <span class="hidden-sm-and-up">
        <v-menu offset-y>
          <v-btn icon color="transparent" slot="activator">
            <v-icon>mdi-apps</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile>
              <v-list-tile-title @click="toPage('home')">Home</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title @click="toPage('services')">Services</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title @click="toPage('about')">About Us</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title @click="toPage('contact')">Contact Us</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </span>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer height="auto" dark >
      <app-footer></app-footer>
    </v-footer>
  </v-app>
</template>

<script>
import FooterVue from "./views/Footer";
export default {
  name: "App",
  created() {},
  components: {
    "app-footer": FooterVue
  },
  data() {
    return {
      //
    };
  },
  methods: {
    /*eslint-disable*/
    toPage(link){
      // console.log(link)
      this.$router.replace({name:link});
    }
  },

};
</script>
