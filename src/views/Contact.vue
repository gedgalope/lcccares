<template>
  <div class="page-contact">
    <v-container grid-list-xs>
      <v-layout align-center>
        <v-flex xs12 class="hidden-lg-and-up text-xs-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2753.6180494163523!2d-118.48048950632983!3d34.23957556532821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2909bdc69e17b%3A0x1c9055a8f0040f3!2s15909+Tupper+St%2C+North+Hills%2C+CA+91343%2C+USA!5e0!3m2!1sen!2sph!4v1561188172607!5m2!1sen!2sph"
            width="310px"
            height="400px"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </v-flex>
      </v-layout>
    </v-container>
    <contact-info></contact-info>
  </div>
</template>

<script>
import ContactInfoVue from "../components/Contact/ContactInfo.vue";
export default {
  name: "page-contact",
  components: {
    "contact-info": ContactInfoVue,
  }
};
</script>

<style scoped>
</style>
