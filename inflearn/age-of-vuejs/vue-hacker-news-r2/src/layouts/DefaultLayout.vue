<template>
  <div>DefaultLayout</div>
  <HeaderCpnt></HeaderCpnt>
  <slot></slot>
  <FooterCpnt></FooterCpnt>
</template>

<script>
import HeaderCpnt from "@/components/HeaderCpnt.vue";
import FooterCpnt from "@/components/FooterCpnt.vue";
export default {
  name: "DefaultLayout",
  components: { HeaderCpnt, FooterCpnt },
};
</script>

<style></style>
