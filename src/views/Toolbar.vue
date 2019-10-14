<template>
  <div class="page-toolbar">
    <v-toolbar height="100" dark>
      <v-toolbar-title class="headline text-uppercase pl-4   pr-0 mr-0">
        <!-- <span>LCCares</span>
        <span class="font-weight-light">Logo</span> -->
        <!-- <v-img :src="lcLogo" ></v-img> -->
        <icon-holder  viewBox="0, 0, 400,399.93529602070527" height="125" width="125" iconName="LCCares">
          <logo-icon></logo-icon>
        </icon-holder>
      </v-toolbar-title>
      <span class="pl-0 ml-0 mt-4 title font-weight-medium text-uppercase" style="color:#F5F5F5">LCCares</span>
      <v-spacer></v-spacer>

      <span class="hidden-xs-only">
        <v-tabs color="transparent">
          <v-tab optional exact large class="vtab text-capitalize" replace to="/">Home</v-tab>
          <v-tab optional exact large class="vtab text-capitalize" replace to="/services">Services</v-tab>
          <!-- <v-tab optional exact large class="vtab text-capitalize" replace to="/about">About Us</v-tab> -->
          <v-tab optional exact large class="vtab text-capitalize" replace to="/contact">About Us</v-tab>
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
            <!-- <v-list-tile replace to="/about">
              <v-list-tile-title>About Us</v-list-tile-title>
            </v-list-tile> -->
            <v-list-tile replace to="/contact">
              <v-list-tile-title>About Us</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </span>
    </v-toolbar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import IconHolder from '../components/util/Icon'
import LogoIcon from '../components/icons/Logo'
export default {
  name: "page-toolbar",
  computed:{
    ...mapState({
      lcLogo:state=>state.media.logo_src
    })
  },
  components:{
    'icon-holder':IconHolder,
    'logo-icon':LogoIcon
  }
};
</script>