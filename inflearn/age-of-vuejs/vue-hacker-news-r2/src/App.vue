<template>
  <TheLayout>
    <router-view></router-view>
  </TheLayout>

  <!-- 
    <template v-slot:ksm>
      <router-view></router-view>
    </template>
     -->
</template>

<script>
import TheLayout from "./layouts/TheLayout.vue";
export default {
  name: "App",
  created() {
    console.log("App created");
  },
  components: { TheLayout },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  padding: 10px;
}
</style>
