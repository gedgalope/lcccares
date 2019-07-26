<template>
  <div>
    <div class="divider" v-if="!label"/>

    <div class="or-divider" v-if="label">
      <span class="or-span-divider">
        <span class="or display-2 font-weight-thin" color="#757575">{{label}}</span>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name:'divider',
  props: {
    label: {
      type: String,
      default: "" 
    },
  },
};
</script>

<style scoped>
.divider {
  border-bottom: 1px solid rgb(235, 235, 235) !important;
}
.or-divider {
  text-align: center !important;
  overflow: hidden !important;
}
.or-span-divider {
  position: relative !important;
  padding: 16px !important;
}
.or::before {
  content: "" !important;
  position: absolute !important;
  border-bottom: 1px solid rgb(228, 228, 228) !important;
  top: 50% !important;
  right: 100% !important;
  width: 5000px !important;
}
.or::after {
  content: "" !important;
  position: absolute !important;
  border-bottom: 1px solid rgb(228, 228, 228) !important;
  top: 50% !important;
  left: 100% !important;
  width: 5000px !important;
}
</style>