<template>
  <div class="about--page">
    <divider class="py-4 my-4" label="We are Love and Compassion Board and Care"></divider>
    <team-comp></team-comp>
  </div>
</template>

<script>
import DividerVue from '../components/util/Divider.vue';
import TeamVue from '../components/Home/Team.vue';
export default {
  name:"about--page",
  components:{
    "divider":DividerVue,
    "team-comp":TeamVue
  }
}
</script>
