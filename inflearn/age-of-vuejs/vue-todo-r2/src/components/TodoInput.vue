<template>
  <section class="input_section">
    <input class="inpui input_todo" type="text" name="name" placeholder="placeholder"/>
    <button class="btnui btn_add" type="button">ADD</button>
  </section>
</template>
<script>
export default {
  name : "TodoInput",
  props : ['propsdata'],
  data() {
    return {
      message : "Hello Vue",
      num : 10,
    };
  },
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
    console.log('TodoInput created');
  },
  mounted() {
    this.$nextTick(function () {
      // 전체 화면내용이 렌더링된 후에 아래의 코드가 실행됩니다.
      console.log('TodoInput mounted');
    })
  },
  updated() {
    this.$nextTick(function () {
      // 전체 화면내용이 다시 렌더링된 후에 아래의 코드가 실행됩니다.
      console.log('TodoInput updated');
    })
  },
}
</script>
<!--CSS를 이 구성 요소로만 제한하려면 "범위 지정" 속성을 추가하십시오.-->
<style scoped>
.input_section{ display:flex; }
.input_section > .input_todo{ flex-grow:1; }
.input_section > .btn_add{ width:50px; }
</style>