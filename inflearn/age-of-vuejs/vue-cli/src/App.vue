<template>
  <div>num : {{num}}</div>
  <AppHeader
    :propsdata="message"
    @renew="renewStr"
  />
</template>
<script>
import AppHeader from "@/components/AppHeader";

export default {
  name : "App",
  components : {AppHeader},
  data() {
    return {
      message : "Hello",
      num:0,
    };
  },
  methods : {
    renewStr() {
      console.log("renewStr");
      this.num++;
    },
    onFunc() {
      console.log("onFunc");
    },
  },
}
</script>
<style>
</style>