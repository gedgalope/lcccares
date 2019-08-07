<template>
  <div class="services--page">
    <gallery-thumbnail class="pa-1 ma-1"></gallery-thumbnail>
    <v-parallax :src="parallax_src" class="parallax">
    <divider class="py-4 my-4" label="Take a look around"></divider>

        <!-- <divider class="py-4 my-4" label="Do not Worry"></divider> -->
        <pagecomp-service></pagecomp-service>
    </v-parallax>
  </div>
</template>

<script>
import PageServiceVue from "../components/Services/PageService.vue";
import GalleryThumbnailVue from "../components/Services/GalleryThumbnail.vue";
import DividerVue from "../components/util/Divider.vue";
import { mapState } from "vuex";
export default {
  name: "services--page",
  beforeCreate() {
  },
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

