<template>
  <!-- <HelloWorld /> -->
  <div class="home-page">
    <home-carousel></home-carousel>
    <divider class="py-4 my-4" :label="facilities_label"></divider>
    <facilities></facilities>
    <v-parallax  :src="parallax_src" class="parallax hidden-sm-and-down">
      <divider class="py-4 my-4" :label="services_label"></divider>
      <home-services></home-services>
    </v-parallax>
      <divider class="py-4 my-4 hidden-md-and-up" :label="services_label"></divider>
    <v-img  :src="parallax_src" class="hidden-md-and-up">
      <home-services></home-services>
    </v-img>
    <divider class="py-4 my-4" :label="team_label"></divider>
    <home-team></home-team>
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld'
import HomeCarousel from "../components/Home/HomeCarousel";
import DividerVue from "../components/util/Divider.vue";
import FacilitiesVue from "../components/Home/Facilities.vue";
import TeamVue from "../components/Home/Team.vue";
import { mapState } from "vuex";
import ServicesVue from "../components/Home/Services.vue";

export default {
  name: "home-page",
  data() {
    return {
      facilities_label: "Take a Look at our Facilities",
      services_label: "What we can provide",
      team_label: "Meet Our Team!"
    };
  },
  computed: {
    ...mapState({
      parallax_src: state => state.media.parallax_src
    })
  },
  components: {
    // HelloWorld
    HomeCarousel,
    divider: DividerVue,
    facilities: FacilitiesVue,
    "home-team": TeamVue,
    "home-services": ServicesVue
  }
};
</script>

<style scoped>
.parallax {
  height: 100% !important;
}
</style>
