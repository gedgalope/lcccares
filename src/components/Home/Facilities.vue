<template>
  <div class="Facilities">
    <v-card>
      <!-- {{facilities_media}} hello  -->
      <v-container grid-list-md>
        <v-layout row wrap>
          <template v-for="(media, index) in facilities_content">
            <v-flex xs4 :key="index">
              <!-- <facilities-content :mediaSrc="media.media" :title="media.title" :message="media.message"></facilities-content> -->
              <v-hover v-slot:default="{hover}">
                <!-- <template v-slot:default="{hover}"> -->
                <v-card id="v-card">
                  <v-img aspect-ratio="1.08" :src="media.media" id="v-img">
                    <!-- <div class="content" style="width:100%;height:100%;"></div> -->
                    <v-fade-transition>
                      <!-- <v-overlay v-if="hover" absolute color="#036358"> -->
                      <v-container
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out overlayContainer white--text"
                        fill-height
                        grid-list-xs
                      >
                        <v-layout align-center row wrap>
                          <v-flex xs12></v-flex>
                          <v-flex class="headline darken-2 text-xs-center" xs12>
                            <span class="mediaTitle" @click="facilityMedia(media.title,media.message)">{{media.title}}</span>
                          </v-flex>
                          <v-flex xs12>
                            <span class="body-1">{{media.message}}</span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                      <!-- </v-overlay> -->
                    </v-fade-transition>
                  </v-img>
                </v-card>
                <!-- </template> -->
              </v-hover>
              <!-- <v-carousel hide-controls hide-delimiters>
                <template v-for="(mediaSRC, index) in media">        
                <v-carousel-item  :key="index" :src="mediaSRC"></v-carousel-item>                  
                </template>
              </v-carousel>-->
            </v-flex>
          </template>
        </v-layout>
      </v-container>
    </v-card>
    <facilities-media :photos="clickedFacility" :content="facilityContent"></facilities-media>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import FacilitiesMediaVue from './FacilitiesMedia.vue';
export default {
  name: "facilities",
  beforeCreate() {
  },
  data() {
    return {
      hover: false,
      clickedFacility:[],
      facilityContent:''
    };
  },
  components: {
    'facilities-media':FacilitiesMediaVue
  },
  methods: {
    ...mapMutations({
      showMediaModal:"utils/changeState"
    }),
    facilityMedia(facility,content){
      /*eslint-disable*/
      // console.log(facility);
      if(facility=='Facility\'s Clinic'){
        this.clickedFacility = this.facilities_media.clinic;
      }else if(facility=='Comfort Rooms'){
        this.clickedFacility = this.facilities_media.comfort;
      }else if(facility=='Beds and Bedrooms'){
        this.clickedFacility = this.facilities_media.bed;
      }else if(facility=='Kitchen and Cooking Space'){
        this.clickedFacility = this.facilities_media.kitchen;
      }else if(facility=='Meet our Staff'){
        this.clickedFacility = this.facilities_media.staff;
      }else {
        this.clickedFacility = this.facilities_media.room;
      }
      this.facilityContent=content;
      this.showMediaModal();
    }
  },
  computed: {
    ...mapState({
      test_photos:state=>state.utils.photos,
      facilities_content: state => state.posts.facilities_content,
      facilities_media: state => state.media.facilitiesMedia,
    })
  }
};
</script>

<style scoped>
.overlayContainer {
  /* background-color: #00E676; */
  background-color: #009688;
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.75;
  position: absolute;
  width: 100%;
}
#v-card {
  overflow: hidden;
}
#v-img {
  transition: all 0.5s;
}
#v-card:hover #v-img,
#v-card:focus #v-img {
  transform: scale(1.1);
  display: block;
}
.mediaTitle{
  cursor: pointer;
}
.mediaTitle:hover{
  text-decoration: underline;
}
</style>
