<template>
  <NewsListCpnt :listType="'jobs'"></NewsListCpnt>
</template>
<script>
import NewsListCpnt from "@/components/NewsListCpnt";
export default {
  name : "JobsView",
  components : {NewsListCpnt},
  created() {
    this.$commonStore.getJobsList();
  },
};
</script>
<style scoped></style>
