<template>
  <div class="HomeCarousel">
    <!-- {{carousel_src}} -->
    <!-- {{CarouselText[0]}} -->
    <v-carousel
      interval="10000"
      transition="car-trans"
      hide-delimiters
    >
      <template v-for="(imageData, index) in carousel_src">
        <v-carousel-item
          :key="index"
          @mouseover="showContent=true"
          @mouseleave="showContent=false"
          transition="carousel"
          reverse="carousel"
        >
          <v-img aspect-ratio="3.04" :src="imageData">
            <div style="height: 374px;"></div>

            <!-- <v-scroll-y-transition> -->
            <transition name="slide-fade">
              <!-- <v-container align-end fill-height class="pa-0 ma-0"> -->
              <carousel-content
                style="width:100%;"
                :carouselText="putText(index)"
                v-show="showContent"
              ></carousel-content>
              <!-- </v-container> -->
            </transition>

            <!-- {{showContent}} -->
            <!-- </v-scroll-y-transition> -->
          </v-img>
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
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-active
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.carousel-enter-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.carousel-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.carousel-enter, .carousel-leave-active
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateZ(10px);
  opacity: 0;
}
</style>