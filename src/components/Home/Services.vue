<template>
  <div class="home-services">
    <v-container grid-list-xs fill-height>
      <v-layout align-center row wrap>
        <template v-for="(service, index) in services">
          <v-flex :key="index" xs12 sm6 md4 lg4 xl4>
            <v-card flat color="transparent">
              <v-container grid-list-xs fill-height>
                <v-layout align-center row wrap>
                  <v-flex justify-space-around sm3 md3 lg3 xl3 class="text-xs-center pa-0 ma-0 hidden-xs-only">
                    <v-icon color="#00C853" size="50px">{{service_icons[index]}}</v-icon>
                  </v-flex>
                  <v-flex xs7 sm9 md9 lg9 xl9 class="pa-0 ma-0">
                    <v-container grid-list-xs fill-height class="pa-0 ma-0">
                      <v-layout column wrap align-center class="pa-0 ma-0">
                        <v-flex
                          xs12
                          class="text-no-wrap text-truncate white--text font-weight-medium text-uppercase"
                        >
                          <span style="font-size:17px;">{{service.title}}</span>
                        </v-flex>
                        <v-flex
                          xs12
                          class=" white--text body-1"
                          style="text-align:justify;"
                        >{{service.description}}</v-flex>
                      </v-layout>
                    </v-container>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </template>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "home-services",
  created() {
  },
  computed: {
    ...mapState({
      services: state => state.services.services,
      service_icons: state => state.utils.service_icons,
    })
  }
};
</script>

<style scoped>
</style>

