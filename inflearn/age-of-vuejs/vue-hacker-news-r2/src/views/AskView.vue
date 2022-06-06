<template>
  <NewsListCpnt :listType="'ask'"></NewsListCpnt>
</template>
<script>
import NewsListCpnt from "@/components/NewsListCpnt";
export default {
  name : "AskView",
  components : {NewsListCpnt},
  created() {
    this.$commonStore.getAskList();
  },
};
</script>
<style lang="scss" scoped></style>
