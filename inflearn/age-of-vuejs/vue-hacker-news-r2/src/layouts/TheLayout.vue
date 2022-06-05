<template>
  <component :is="this.$route.meta.layout || 'DefaultLayout'">
    <slot></slot>
  </component>
</template>

<script>
import DefaultLayout from "./DefaultLayout.vue";
import EmptyLayout from "./EmptyLayout.vue";

export default {
  name: "TheLayout",
  components: { DefaultLayout, EmptyLayout },
};
</script>

<style></style>
