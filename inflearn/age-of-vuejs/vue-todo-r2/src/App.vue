<template>
  <AppHeader/>
  <AppMain/>
  <AppFooter/>
</template>
<script>
import AppHeader from "@/components/AppHeader";
import AppMain from "@/components/AppMain";
import AppFooter from "@/components/AppFooter";
export default {
  name : "App",
  components : {AppFooter, AppMain, AppHeader},
  data() {
    return {
      todo_list : []
    };
  },
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
  },
  mounted() {
    this.$nextTick(function () {
      // 전체 화면내용이 렌더링된 후에 아래의 코드가 실행됩니다.
    })
  },
  updated() {
    this.$nextTick(function () {
      // 전체 화면내용이 다시 렌더링된 후에 아래의 코드가 실행됩니다.
    })
  },
}
</script>
<style>
body{ background-color:#ffffd4; }
#app{ text-align:center; padding:20px; }
.inpui{ padding-left:10px; padding-right:10px; height:50px; }
.btnui{ padding-left:10px; padding-right:10px; height:50px; background-color:#dddddd; }
</style>