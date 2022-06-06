<template>
  <NewsListCpnt :listType="'news'"></NewsListCpnt>
</template>
<script>
import NewsListCpnt from "@/components/NewsListCpnt";
export default {
  name : "NewsView",
  components : {NewsListCpnt},
  created() {
    this.$commonStore.getNewsList();
  },
}
</script>
<style lang="scss" scoped></style>