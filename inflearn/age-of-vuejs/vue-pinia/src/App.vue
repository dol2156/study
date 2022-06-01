<template>
  <div>{{ message }}</div>
  <div>common num : {{ commonStore.num }}</div>
  <div>counter num : {{ this.$counterStore.num }}</div>
  <div>
    <button
      type="button"
      @click="onIncrement"
    >increment
    </button>
  </div>
</template>
<script>
import {useCommonStore} from "@/stores/common";

export default {
  setup() {
    const commonStore = useCommonStore();
    return {commonStore}
  },
  name : 'App',
  data() {
    return {
      message : "HI",
    };
  },
  methods : {
    onIncrement() {
      this.commonStore.increment();
    },
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
