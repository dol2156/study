<template>
  <div>NewsView</div>
  <ul>
    <li v-for="(item, idx) in new_list" :key="item.id" :data-idx="idx">
      {{item.title}}
    </li>
  </ul>
</template>
<script>
export default {
  name : "NewsView",
  data() {
    return {
      new_list : [],
    };
  },
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
    console.log("NewsView created");
    this.$api.newsList()
      .then((response) => {
        // success
        console.log(response.data);
        this.new_list = response.data;
      })
      .catch((error) => {
        // error
        console.log(error);
      })
      .then(() => {
        // complete
      });
  },
}
</script>
<!--CSS를 이 구성 요소로만 제한하려면 "범위 지정" 속성을 추가하십시오.-->
<style scoped>
</style>