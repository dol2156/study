<template>
  <header>
    <h1>{{ commonStore.user_name }} TODO it!!</h1>
  </header>
</template>
<script>
import {useCommonStore} from "@/stores/common";
export default {
  setup() {
    const commonStore = useCommonStore();
    return {commonStore}
  },
  name : "AppHeader",
  data() {
    return {
      message : "Hello Vue",
    };
  },
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
    console.log("AppHeader created");
  },
}
</script>
<!--CSS를 이 구성 요소로만 제한하려면 "범위 지정" 속성을 추가하십시오.-->
<style scoped>
</style>