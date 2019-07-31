<template>
  <div class="pagecomp-services">
    <v-container grid-list-md fill-height>
      <v-layout row wrap align-center>
        <template v-for="(service, index) in services">
          <v-flex xs6 :key="index" class="text-xs-center">
            <v-card class="mx-auto" outlined>
              <v-card-title primary-title class="headline font-weight-medium">
                <v-flex xs12 class="text-xs-center">
                  {{service.title}}
                </v-flex>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-xs fill-height class="pa-0 ma-0">
                  <v-layout row wrap align-center>
                    <v-flex xs2>
                      <v-icon size="50px" color="#1E88E5">{{service_icons[index]}}</v-icon>
                    </v-flex>
                    <v-flex xs10 style="text-align:justify !important;" class="body-1">{{service.description}}</v-flex>
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
    this.$store.dispatch("services/getServicesPost");
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

