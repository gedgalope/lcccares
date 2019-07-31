<template>
  <v-card class="flex" flat tile>
    <v-container tile grid-list-xs fill fill-height>
      <v-layout column align-right>
        <v-flex xs12>
          <v-container grid-list-xs fill-height>
            <v-layout row wrap align-center>
              <v-flex xs4>
                <v-container grid-list-xs fill-height>
                  <v-layout column wrap align-right>
                    <span class="title">About us</span>
                    <br />
                    <span style="text-align:justify;">{{vmg.comp_about}}</span>
                  </v-layout>
                </v-container>
              </v-flex>
              <v-flex xs4>
                <!-- {{vmg}} -->
                <v-container grid-list-xs fill-height>
                  <v-layout column wrap align-center>
                    <v-flex xs12 style="text-align:justify !important;">
                      <span class="title">Our Mission</span>
                      <br />
                      <span>{{vmg.comp_mission}}</span>
                      <br />
                      <span class="title">Our Goal</span>
                      <br />
                      <span>{{vmg.comp_goal}}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
              <v-flex xs4 class="pa-0 ma-0">
                <!-- {{company_info}} -->
                <v-container grid-list-xs fill-height class="pa-0 ma-0">
                  <v-layout row wrap class="pa-0 ma-0" align-center>
                    <v-flex xs12 class="pa-0 ma-0 text-xs-center">
                      <iframe
                        class="hidden-sm-and-down"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2753.6180494163523!2d-118.48048950632983!3d34.23957556532821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2909bdc69e17b%3A0x1c9055a8f0040f3!2s15909+Tupper+St%2C+North+Hills%2C+CA+91343%2C+USA!5e0!3m2!1sen!2sph!4v1561188172607!5m2!1sen!2sph"
                        width="250px"
                        height="100px"
                        frameborder="0"
                        style="border:0"
                        allowfullscreen
                      ></iframe>
                      <br>
                      <span><strong>{{company_info.comp_location}}</strong></span>

                      <br />
                      <span>
                        <strong>Mobile/Tel Number: </strong>
                        {{company_info.comp_telnum}}
                      </span>
                      <span>/ {{company_info.comp_phonenum}}</span>
                      <br />
                      <span>
                        <strong>Email:  </strong>
                        <span class="email" @click="redirectEmail()">{{company_info.comp_email}}</span>
                      </span>
                      <br />
                      <strong>
                        <span>Licensed by the State of California for 6-beds</span>
                        <br />
                        <span>Residential Facility for the Elderly (RCPE)</span>
                      </strong>

                      <br />
                      <span>
                        <strong>License Number:</strong>
                        {{company_info.comp_license}}
                      </span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs12 class="text-xs-center">
          <template v-for="(icon, index) in icons">
            <v-btn flat icon :key="index" @click="openSocial(index)">
              <v-icon>{{icon}}</v-icon>
            </v-btn>
          </template>
          <br />
          <span>
            <v-icon small>mdi-copyright</v-icon>
            {{ new Date().getFullYear() }} -
            <strong>LCCares</strong>
          </span>
          <br />
          <span style="font-size:10px;">
            Powered by
            <strong>Acatour</strong>
          </span>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app-footer",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
    links: ["home", "services", "about", "contact"]
  }),
  beforeCreate() {
    this.$store.dispatch("posts/getVMG");
    this.$store.dispatch("posts/getCompanyInfo");
  },
  computed: {
    ...mapState({
      vmg: state => state.posts.vmg,
      company_info: state => state.posts.company_info
    })
  },
  methods: {
    redirectEmail() {
      window.open("mailto:LoveandCompassion@gmail.com?subject=Inquiries");
    },
    openSocial(social) {
      switch (social) {
        case 0:
          window.open("https://www.facebook.com/earl.galope");
          break;
        case 1:
          window.open("https://twitter.com/hukplanupu");
          break;
        case 2:
          window.open("https://www.instagram.com/hukplanupu/");
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
.vbtn:hover .link {
  text-decoration: underline;
}
.email:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
