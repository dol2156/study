<template>
  <NewsListCpnt :propsData="getPropsData"></NewsListCpnt>
</template>
<script>
import NewsListCpnt from "@/components/NewsListCpnt";
export default {
  name : "NewsView",
  components : {NewsListCpnt},
  computed : {
    getPropsData() {
      return {
        list_data : this.$commonStore.newsList,
      };
    }
  },
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
    console.log("created");
    this.$commonStore.getNewsList();
  },
}
</script>
<style lang="scss" scoped>
</style>