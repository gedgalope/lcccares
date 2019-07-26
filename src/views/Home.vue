<template>
  <!-- <HelloWorld /> -->
  <div class="home-page pa-0 ma-0">
    <home-carousel></home-carousel>
    <divider class="py-4 my-4" :label="Label"></divider>
    <facilities></facilities>
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld'
import HomeCarousel from "../components/Home/HomeCarousel";
import DividerVue from "../components/util/Divider.vue";
import FacilitiesVue from '../components/Home/Facilities.vue';

export default {
  name: "home-page",
  data() {
    return {
      Label: "Take a Look at our Facilities"
    };
  },
  components: {
    // HelloWorld
    HomeCarousel,
    'divider': DividerVue,
    'facilities':FacilitiesVue,
  }
};
</script>
