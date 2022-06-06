<template>
  <NewsListCpnt></NewsListCpnt>
</template>
<script>
import NewsListCpnt from "@/components/NewsListCpnt";
export default {
  name : "NewsView",
  components : {NewsListCpnt},
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
    console.log("created");
    this.$commonStore.getNewsList();
  },
}
</script>
<style lang="scss" scoped>
</style>