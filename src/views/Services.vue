<template>
  <div class="services--page">
    <gallery-thumbnail class="pa-1 ma-1"></gallery-thumbnail>
    <divider class="py-4 my-4 " label="Take a look around"></divider>
    <v-parallax :src="parallax_src" class="parallax hidden-md-and-down">
      <pagecomp-service></pagecomp-service>
    </v-parallax>
    <v-img :src="parallax_src" class="hidden-lg-and-up">
      <pagecomp-service></pagecomp-service>
    </v-img>
  </div>
</template>

<script>
import PageServiceVue from "../components/Services/PageService.vue";
import GalleryThumbnailVue from "../components/Services/GalleryThumbnail.vue";
import DividerVue from "../components/util/Divider.vue";
import { mapState } from "vuex";
export default {
  name: "services--page",
  beforeCreate() {},
  components: {
    "gallery-thumbnail": GalleryThumbnailVue,
    "pagecomp-service": PageServiceVue,
    divider: DividerVue
  },
  computed: {
    ...mapState({
      parallax_src: state => state.media.parallax_src
    })
  }
};
</script>

<style scoped>
.parallax {
  height: 100% !important;
}
</style>

