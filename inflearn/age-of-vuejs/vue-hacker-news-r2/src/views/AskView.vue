<template>
  <NewsListCpnt
    :props="props"
  ></NewsListCpnt>
</template>
<script>
import NewsListCpnt from "@/components/NewsListCpnt";
export default {
  name : "AskView",
  data() {
    return {
      props : {
        listType : "news"
      },
    };
  },
  components : {NewsListCpnt},
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
    console.log("created");
    this.$commonStore.getAskList();
  },
};
</script>
<style lang="scss" scoped></style>
