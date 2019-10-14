<template>
  <div class="HomeCarousel pa-0 ma-0">
    <!-- {{carousel_src}} -->
    <!-- {{CarouselText[0]}} -->
    <v-carousel hide-delimiters show-arrows show-arrows-on-hover>
      <template v-for="(imageData, index) in carousel_src">
        <v-carousel-item :key="index" @mouseover="showContent=true" @mouseleave="showContent=false">
          <v-parallax :src="imageData">
            <!-- <v-scroll-y-transition> -->
            <transition name="slide-fade">
              <carousel-content :carouselText="putText(index)" v-show="showContent"></carousel-content>
            </transition>

            <!-- {{showContent}} -->
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
      showContent: false
    };
  },
  components: {
    CarouselContent
  },
  created() {},
  computed: {
    ...mapState({
      CarouselText: state => state.media.CarouselText,
      carousel_src: state => state.media.CarouselMedia
    })
  },
  methods: {
    /*eslint-disable*/
    putText(index) {
      // console.log(index%2);
      if (index % 2) {
        return this.CarouselText[0];
      } else {
        return this.CarouselText[1];
      }
    }
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
