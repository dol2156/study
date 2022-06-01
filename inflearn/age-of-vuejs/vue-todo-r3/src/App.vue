<template>
  <div>App : {{ message }}</div>
  <div>commonStore.num : {{ commonStore.num }}</div>
</template>
<script>
import {useCommonStore} from "@/stores/common";

export default {
  setup() {
    const commonStore = useCommonStore();
    return {commonStore}
  },
  name : "App",
  data() {
    return {
      message : "Hello Vue",
    };
  },
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
    console.log('App created');
  },
  mounted() {
    this.$nextTick(function () {
      // 전체 화면내용이 렌더링된 후에 아래의 코드가 실행됩니다.
      console.log('App mounted');
    })
  },
  updated() {
    this.$nextTick(function () {
      // 전체 화면내용이 다시 렌더링된 후에 아래의 코드가 실행됩니다.
      console.log('App updated');
    })
  },
}
</script>
<style>
</style>