<template>
    <v-btn class="white--text text-transform-none" v-on="btnListeners" large flat block>
      <icon class="mr-2" icon-name="facebook logo" viewBox="0 0 32 32">
        <icon-facebook/>
      </icon>
      <span>
        <slot/>
      </span>
    </v-btn>
</template>

<script>
import Icon from "./Icon";
import IconFacebook from "../icons/IconFacebook";

export default {
  name:"btn-facebook",
  components: {
    Icon,
    IconFacebook
  },
  computed: {
    btnListeners() {
      return Object.assign({}, this.$listeners); 
    }
  },
};
</script>

<style scoped>
.v-btn {
  font-size: 14px;
  font-weight: 500;
  background: #3c5a99;
}
</style>