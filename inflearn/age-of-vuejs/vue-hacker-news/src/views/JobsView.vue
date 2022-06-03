<template>
  <div>JobsView</div>
  <ul>
    <li v-for="(item, idx) in $commonStore.jobs_list" :key="item.id" :data-idx="idx">
      {{ idx }} {{ item.title }}
    </li>
  </ul>
</template>
<script>
export default {
  name : "JobsView",
  data() {
    return {};
  },
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
    this.$commonStore.storeJobsList();
  },
}
</script>
<!--CSS를 이 구성 요소로만 제한하려면 "범위 지정" 속성을 추가하십시오.-->
<style scoped>
</style>