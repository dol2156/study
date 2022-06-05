<template>
  <HeaderCpnt></HeaderCpnt>
  <div>HI</div>
  <FooterCpnt></FooterCpnt>
</template>

<script>
import HeaderCpnt from "./components/HeaderCpnt.vue";
import FooterCpnt from "./components/FooterCpnt.vue";
export default {
  name: "App",
  components: { HeaderCpnt, FooterCpnt },
};
</script>

<style></style>
