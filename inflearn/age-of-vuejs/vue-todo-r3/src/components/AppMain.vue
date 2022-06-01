<template>
  <main>
    <TodoInput/>
    <TodoList/>
  </main>
</template>
<script>
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
export default {
  name : "AppMain",
  components : {TodoList, TodoInput},
  data() {
    return {
      message : "Hello Vue",
    };
  },
}
</script>
<!--CSS를 이 구성 요소로만 제한하려면 "범위 지정" 속성을 추가하십시오.-->
<style scoped>
</style>