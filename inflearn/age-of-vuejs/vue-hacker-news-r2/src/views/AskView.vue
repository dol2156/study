<template>
  <NewsListCpnt :propsData="getPropsData"></NewsListCpnt>
</template>
<script>
import NewsListCpnt from "@/components/NewsListCpnt";
export default {
  name : "AskView",
  components : {NewsListCpnt},
  data() {
    return {
      propsData : {
        listType : "ask"
      },
    };
  },
  computed : {
    getPropsData() {
      return {
        list_data : this.$commonStore.askList,
      };
    }
  },
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
    console.log("created");
    this.$commonStore.getAskList();
  },
  
};
</script>
<style lang="scss" scoped></style>
