<template>
  <section class="todo_list_section">
    <ul>
      <li>Todo Item</li>
      <li>Todo Item</li>
      <li>Todo Item</li>
      <li>Todo Item</li>
      <li>Todo Item</li>
    </ul>
  </section>
</template>
<script>
export default {
  name : "TodoList",
  props : ['propsdata'],
  data() {
    return {
      message : "Hello Vue",
      num : 10,
    };
  },
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
    console.log('TodoList created');
  },
  mounted() {
    this.$nextTick(function () {
      // 전체 화면내용이 렌더링된 후에 아래의 코드가 실행됩니다.
      console.log('TodoList mounted');
    })
  },
  updated() {
    this.$nextTick(function () {
      // 전체 화면내용이 다시 렌더링된 후에 아래의 코드가 실행됩니다.
      console.log('TodoList updated');
    })
  },
}
</script>
<!--CSS를 이 구성 요소로만 제한하려면 "범위 지정" 속성을 추가하십시오.-->
<style scoped>
.todo_list_section{ margin-top:10px; }
.todo_list_section > ul{ background-color:white; }
.todo_list_section > ul > li{ border:1px solid #dddddd; height:50px; }
.todo_list_section > ul > li{ display:flex; }
</style>