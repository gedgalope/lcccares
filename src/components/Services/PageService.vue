<template>
  <div class="pagecomp-services">
    <v-container grid-list-md fill-height>
      <v-layout row wrap align-center>
        <template v-for="(service, index) in services">
          <v-flex xs12 sm12 md6 lg6 xl6 :key="index" class="text-xs-center">
            <v-card class="mx-auto" outlined>
              <v-card-title primary-title class="headline font-weight-medium">
                <v-flex xs12 class="text-xs-center">
                  {{service.title}}
                </v-flex>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-xs fill-height class="pa-0 ma-0">
                  <v-layout row wrap align-center>
                    <v-flex sm2 md2 lg2 xl2 class="hidden-xs-only">
                      <v-icon size="50px" color="#1E88E5">{{service_icons[index]}}</v-icon>
                    </v-flex>
                    <v-flex xs12 sm10 md10 lg10 xl10 style="text-align:justify;" class="body-1">{{service.description}}</v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
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
  name: "pagecomp-services",
  created() {
  },
  computed: {
    ...mapState({
      services: state => state.services.services,
      service_icons: state => state.utils.service_icons
    })
  }
};
</script>

<style scoped>
</style>

