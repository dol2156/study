<template>
  <div>{{ message }}</div>
  <div>counter count : {{ common.num }}</div>
  <div>counter count : {{ $counterStore.num }}</div>
</template>
<script>
import {commonStore} from "@/stores/commomStore";

export default {
  setup() {
    const common = commonStore();
    return {common}
  },
  name : 'App',
  data() {
    return {
      message : "HI",
    };
  },
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
    console.log("created");
    console.log("this.$counterStore.num :", this.$counterStore.num);
  },
}
</script>
<style>
#app{
  font-family:Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  text-align:center;
  color:#2c3e50;
  margin-top:60px;
}
</style>
