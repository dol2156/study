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
  components : {AppFooter, AppMain, AppHeader},
  name : "App",
  data() {
    return {
      message : "Hello Vue",
      showModal : false,
    };
  },
}
</script>
<style>
body{ background-color:#ffffd4; }
/**/
#app{ text-align:center; }
#app > *{ padding-left:20px; padding-right:20px; }
/**/
header{ padding-top:30px; padding-bottom:20px; }
header > h1{ font-size:30px; color:darkred; }
main{ padding-top:10px; padding-bottom:10px; }
footer{ padding-top:10px; padding-bottom:10px; }
/**/
.btnui{ background-color:#dddddd; border:1px solid #999999; height:35px; padding-left:10px; padding-right:10px; }
.inpui{ border:1px solid #999999; height:35px; padding-left:10px; padding-right:10px; }
</style>