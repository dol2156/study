<template>
  <TheLayout>
    <router-view></router-view>
  </TheLayout>
</template>

<script>
import TheLayout from "./layouts/TheLayout.vue";
export default {
  name: "App",
  components: { TheLayout },
};
</script>

<style></style>
