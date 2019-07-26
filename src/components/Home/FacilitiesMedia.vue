<template>
  <v-dialog fullscreen v-model="ishidden" >
  <!-- :scrollable="true" -->
    <v-card class="card">
      <v-container align-center grid-list-md>
        <v-flex offset-sm12>
          <v-btn fab flat small right relative @click="close" class="close">
            <v-icon color="#FFFFFF" large>close</v-icon>
          </v-btn>
        </v-flex>
        <v-layout fluid row>
          <v-flex lg10 md9 sm9 xs12 align-self-center offset-xs1>
            <v-layout fluid row>
              <div>
                <v-btn
                  @click="prev()"
                  style="background-color:transparent; box-shadow:none; height:100% !important; padding:0; margin:0;"
                >
                  <v-icon color="#FFFFFF" style="font-size:100px">mdi-chevron-left</v-icon>
                </v-btn>
              </div>
              <v-flex lg10 md10 sm10 xs10>
                <!-- <ul>
                <li>-->
                <span>
                  <!-- <v-img :src="photos[this.imageIndex].url" :aspect-ratio="1.7778"></v-img> -->
                  <v-img :src="photos[imageIndex]" :aspect-ratio="1.7778"></v-img>
                </span>
                <!-- </li>
                </ul>-->
              </v-flex>
              <div>
                <v-btn
                  @click="next()"
                  style="background-color:transparent; box-shadow:none; height:100% !important; padding:0; margin:0;"
                >
                  <v-icon color="#FFFFFF" style="font-size:100px">mdi-chevron-right</v-icon>
                </v-btn>
              </div>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-layout fluid row>
          <v-expansion-panel
            expand
            light
            v-model="panel"
            style="box-shadow:none !important; width: 69% !important; margin:0 auto;"
          >
            <v-expansion-panel-content style="background-color:transparent;">
              <div
                slot="header"
                style="background-color:transparent; text-align:left !important; color:white;"
              >
                {{content}}
                <!-- {{this.photos[this.imageIndex].desc}} -->
              </div>
              <div class="scroll-container">
                <v-layout
                  d-inline-block
                  v-for="(photo,index) in photos"
                  :key="index"
                  class="scroll-item-container"
                >
                  <v-btn
                    style="margin:0px; padding:0px; width:100px; height:67px;"
                    @click="newIndex(index)"
                    :class="{'imageInactive':imageIndex != index,'imageActive':imageIndex == index}"
                    :id="'button'+index"
                  >
                    <v-img
                      style="width:100px; height:67px;"
                      :src="photos[index]"
                      :aspect-ratio="1.778"
                    ></v-img>
                  </v-btn>
                </v-layout>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "facilities-media",
  props: {
    photos: {
      type: Array
    },
    content:{
      type:String,
      default:"We care for your loved ones."
    }
  },
  computed: {
    ...mapState({
      ishidden: state => state.utils.ishidden
    })
  },
  data() {
    return {
      imageIndex: 0,
      panel: 0
    };
  },
  watch: {},
  methods: {
    ...mapMutations({
      changeState: "utils/changeState"
    }),
    close() {
      this.changeState();
    },
    next() {
      // console.log(this.imageIndex + String (this.photos.length))
      if (this.imageIndex == this.photos.length - 1) {
        this.imageIndex = 0;
      } else {
        this.imageIndex++;
      }
      var elemntId = "#button" + this.imageIndex;
      var elemnt = document.querySelector(elemntId);
      elemnt.scrollIntoView({ inline: "center" });
    },
    prev() {
      if (this.imageIndex == 0) {
        this.imageIndex = this.photos.length - 1;
      } else {
        this.imageIndex--;
      }
      var elemntId = "#button" + this.imageIndex;
      var elemnt = document.querySelector(elemntId);
      elemnt.scrollIntoView({ inline: "center" });
    },
    newIndex(newIndex) {
      this.imageIndex = newIndex;
      var elemntId = "#button" + newIndex;
      var elemnt = document.querySelector(elemntId);
      elemnt.scrollIntoView({inline: "center"});
    }
  }
};
</script>

<style scoped>
.test {
  background-color: red;
}

.card {
  background-color: #424242;
}

.imageActive {
  filter: brightness(100%);
}

.imageInactive {
  cursor: pointer;
  box-shadow: none;
  filter: brightness(70%);
}
.imageInactive:hover {
  cursor: pointer;
  box-shadow: none;
  filter: brightness(100%);
}
.imageInactive:active {
  cursor: pointer;
  transform: translateY(2px);
}
.scroll-container {
  /* margin:0 auto; */
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
}
.scroll-item-container {
  padding: 0.75%;
}
.scroll-container::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* Chrome/Safari/Webkit */
}

.scroll-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>
