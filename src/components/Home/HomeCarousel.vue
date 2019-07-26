<template>
  <div class="HomeCarousel pa-0 ma-0">
    <!-- {{carousel_src}} -->
    <!-- {{CarouselText[0]}} -->
    <v-carousel hide-delimiters show-arrows show-arrows-on-hover>
      <template v-for="(imageData, index) in carousel_src">
        <v-carousel-item :key="index">
          <v-parallax :src="imageData">
            <!-- <v-scroll-y-transition> -->
              <carousel-content :carouselText="putText(index)"></carousel-content>
            <!-- </v-scroll-y-transition> -->
          </v-parallax>
        </v-carousel-item>
      </template>
    </v-carousel>
  </div>
</template>

<script>
import CarouselContent from "./CarouselContent";
import { mapState } from "vuex";
export default {
  /*eslint-disable*/
  name: "home-carousel",
  data() {
    return {
      // carousel_src: []
    };
  },
  components: {
    CarouselContent
  },
  created(){
    this.$store.dispatch('media/getCarouselMedia');
  },
  computed: {
    ...mapState({
      CarouselText: state => state.media.CarouselText,
      carousel_src: state => state.media.CarouselMedia,
    })
  },
  methods: {
    /*eslint-disable*/
    putText(index) {
      // console.log(index%2);
      if (index%2) {
        return this.CarouselText[0];
      } else {
        return this.CarouselText[1];
      }
    }
  }
};
</script>

<style scoped>
</style>
