<template>
  <footer>
    <button
      class="btnui" type="button"
      @click="onDeleteAll"
    >모두 삭제</button>
    <div>Copyright ⓒ. All rights reserved.</div>
  </footer>
</template>
<script>
export default {
  name : "AppFooter",
  data() {
    return {
      message : "Hello Vue",
    };
  },
  methods : {
    onDeleteAll() {
      this.$commonStore.deleteAllTodoItem();
    },
  },
}
</script>
<!--CSS를 이 구성 요소로만 제한하려면 "범위 지정" 속성을 추가하십시오.-->
<style scoped>
</style>