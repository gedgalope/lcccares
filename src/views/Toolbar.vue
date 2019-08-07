<template>
  <div class="page-toolbar">
    <v-toolbar>
      <v-toolbar-title class="headline text-uppercase">
        <span>LCCares</span>
        <span class="font-weight-light">Logo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <span class="hidden-xs-only">
        <v-tabs color="transparent">
          <v-tab optional exact large class="vtab text-capitalize" replace to="/">Home</v-tab>
          <v-tab optional exact large class="vtab text-capitalize" replace to="/services">Services</v-tab>
          <v-tab optional exact large class="vtab text-capitalize" replace to="/about">About Us</v-tab>
          <v-tab optional exact large class="vtab text-capitalize" replace to="/contact">Contact Us</v-tab>
        </v-tabs>
      </span>
      <span class="hidden-sm-and-up">
        <v-menu offset-y>
          <v-btn icon color="transparent" slot="activator">
            <v-icon>mdi-apps</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile replace to="/">
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile>
            <v-list-tile replace to="/services">
              <v-list-tile-title>Services</v-list-tile-title>
            </v-list-tile>
            <v-list-tile replace to="/about">
              <v-list-tile-title>About Us</v-list-tile-title>
            </v-list-tile>
            <v-list-tile replace to="/contact">
              <v-list-tile-title>Contact Us</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </span>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "page-toolbar"
};
</script>