<template>
  <footer>
    <button class="btnui btn_clear_all" type="button">Clear All</button>
  </footer>
</template>
<script>
export default {
  name : "AppFooter",
  props : ['propsdata'],
  data() {
    return {
      message : "Hello Vue",
      num : 10,
    };
  },
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
  },
  mounted() {
    this.$nextTick(function () {
      // 전체 화면내용이 렌더링된 후에 아래의 코드가 실행됩니다.
    })
  },
  updated() {
    this.$nextTick(function () {
      // 전체 화면내용이 다시 렌더링된 후에 아래의 코드가 실행됩니다.
    })
  },
}
</script>
<!--CSS를 이 구성 요소로만 제한하려면 "범위 지정" 속성을 추가하십시오.-->
<style scoped>
.btn_clear_all{ }
</style>