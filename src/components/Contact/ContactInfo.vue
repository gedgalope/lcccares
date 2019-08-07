<template>
  <div class="contact-info">
    <v-container grid-list-xs fill-height>
      <v-layout row wrap align-center>
        <v-flex xs12 xl6 lg6 class="hidden-md-and-down">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2753.6180494163523!2d-118.48048950632983!3d34.23957556532821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2909bdc69e17b%3A0x1c9055a8f0040f3!2s15909+Tupper+St%2C+North+Hills%2C+CA+91343%2C+USA!5e0!3m2!1sen!2sph!4v1561188172607!5m2!1sen!2sph"
            width="500px"
            height="400px"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </v-flex>
        <v-flex xl6 lg6 xs12  class="text-xs-left">
          <v-container grid-list-xs fill-height class="pa-0">
            <v-layout column>
              <v-flex xs12 class="text-xs-center">
                <span class="display-2 font-weight-regular">Get in touch with us</span>
              </v-flex>
              <v-flex xs12>
                <v-container grid-list-xs fill-height class="px-0 pb-0 ">
                  <v-layout row wrap align-content-start>
                    <v-flex xs6>
                      <strong>
                        <v-icon>mdi-phone</v-icon>
                      </strong>
                      {{company_info.comp_telnum}}
                    </v-flex>
                    <v-flex xs6 class="text-xs-right">
                      <strong>
                        <v-icon>mdi-email</v-icon>
                      </strong>
                      <span class="email" @click="redirectEmail()">{{company_info.comp_email}}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
              <v-flex xs12 class="text-xs-left pb-3">
                <span>
                  <strong>
                    <v-icon>mdi-cellphone</v-icon>
                  </strong>
                  {{company_info.comp_phonenum}}
                </span>
              </v-flex>
              <v-divider></v-divider>
              <v-flex xs12 class="py-3">
                <span>
                  <strong>
                    <v-icon>mdi-map-marker-outline</v-icon>
                    {{company_info.comp_location}}
                  </strong>
                </span>
                <br />
                <span>
                  <strong>
                    <v-icon>mdi-card-text</v-icon>License Number:
                  </strong>
                  {{company_info.comp_license}}
                </span>
                <br />

                <span class="pl-3">
                  Licensed by the State of California for 6-beds
                  Residential Facility for the Elderly
                </span>
              </v-flex>
              <v-divider></v-divider>
              <v-flex xs12 class=" headline font-weight-regular pt-3">We are Social</v-flex>
              <v-flex xs12>
                <template v-for="(icon, index) in icons">
                  <v-btn flat icon :key="index" @click="openSocial(index)">
                    <v-icon size="35px">{{icon}}</v-icon>
                  </v-btn>
                </template>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "contact-info",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"]
    };
  },
  computed: {
    ...mapState({
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
.email:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>

