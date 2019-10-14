<template>
  <v-app>
    <page-toolbar></page-toolbar>
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
import ToolbarVue from './views/Toolbar.vue';
export default {
  name: "App",
  beforeCreate() {
    this.$store.dispatch("posts/getFacilitiesContent");
    this.$store.dispatch("posts/getVMG");
    this.$store.dispatch("media/getParallax");
    this.$store.dispatch("posts/getCompanyInfo");
    this.$store.dispatch("media/getroomsMedia");
    this.$store.dispatch('media/getCarouselMedia');
    this.$store.dispatch("services/getServicesPost");
    this.$store.dispatch("team/getTeamMembers");
    this.$store.dispatch("media/getGalleryItems");
    this.$store.dispatch("media/getLogo");
  },
  components: {
    "app-footer": FooterVue,
    "page-toolbar":ToolbarVue
  },
  data() {
    return {
      //
    };
  },
  methods: {},

};
</script>
