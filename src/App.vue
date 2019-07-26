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
          <v-tab large class="vtab text-capitalize">Home</v-tab>
          <v-tab large class="vtab text-capitalize">Services</v-tab>
          <v-tab large class="vtab text-capitalize">About Us</v-tab>
          <v-tab large class="vtab text-capitalize">Contact Us</v-tab>
        </v-tabs>
      </span>
      <span class="hidden-sm-and-up">
        <v-menu offset-y>
          <v-btn icon color="transparent" slot="activator">
            <v-icon>mdi-apps</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title>Services</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title>About Us</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title>Contact Us</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </span>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  created() {
  },
  components: {},
  data() {
    return {
      //
    };
  }
};
</script>
