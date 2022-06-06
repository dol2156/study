<template>
  <component :is="this.$route.meta.layout || 'DefaultLayout'">
    <main>
      <slot></slot>
    </main>
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

<style lang="scss">
main{ padding:10px; }
</style>
