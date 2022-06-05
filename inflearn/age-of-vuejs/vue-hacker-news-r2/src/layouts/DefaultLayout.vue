<template>
  <HeaderCpnt></HeaderCpnt>
  <slot></slot>
</template>

<script>
import HeaderCpnt from "@/components/HeaderCpnt.vue";
export default {
  name: "DefaultLayout",
  components: { HeaderCpnt },
};
</script>

<style></style>
