<template>
  <div class="home-team">
    <!-- {{team_members}} -->
    <v-container grid-list-md fill-height>
      <v-layout align-center row wrap>
        <template v-for="(member, index) in team_members">
          <v-flex :key="index" xs4>
            <v-card min-height="350px"  >
              <v-img height="200px" :src="member.media"></v-img>
              <v-card-text class="pa-0 ma-0">
                <v-container grid-list-xs fill-height>
                  <v-layout column align-center>
                    <!-- <v-avatar
                      size="70px"
                    >
                      <img :src="member.media">
                    </v-avatar> -->
                    <v-flex
                      xs12
                      class="text-no-wrap text-truncate black--text font-weight-meddium text-uppercase"
                    >
                      <span style="font-size:17px; ">{{member.name}}</span>
                      <v-divider></v-divider>
                    </v-flex>
                    
                    <v-flex xs12 class="black--text body-1" style="text-align:justify;">{{member.info}}</v-flex>
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
  name: "home-team",
  beforeCreate() {
  },
  computed: {
    ...mapState({
      team_members: state => state.team.team_members
    })
  }
};
</script>

<style scoped>
</style>
