<template>
  <NewsListCpnt :listType="'news'"></NewsListCpnt>
</template>
<script>
import NewsListCpnt from "@/components/NewsListCpnt";
export default {
  name: "NewsView",
  components: { NewsListCpnt },
  created() {
    this.$commonStore.FETCH_NEWS();
  },
};
</script>
<style lang="scss" scoped></style>
