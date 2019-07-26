<template>
    <v-btn class="black--text" v-on="btnListeners" outline color="black" large flat block>
      <icon class="mr-2" icon-name="facebook logo">
        <icon-google/>
      </icon>
      <span>
        <slot/>
      </span>
    </v-btn>
</template>

<script>
import Icon from "./Icon";
import IconGoogle from "../icons/IconGoogle";

export default {
  name: "btn-google",
  components: {
    Icon,
    IconGoogle
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
}
</style>