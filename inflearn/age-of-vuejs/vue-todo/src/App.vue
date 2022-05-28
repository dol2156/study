<template>
  <TodoHeader/>
  <TodoInput/>
  <TodoList/>
  <TodoFooter/>
</template>
<script>
import TodoHeader from "@/components/TodoHeader";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import TodoFooter from "@/components/TodoFooter";
export default {
  name : "App",
  components : {TodoFooter, TodoList, TodoInput, TodoHeader},
  data() {
    return {
      message : "Hello Vue",
      num : 10,
    };
  },
  computed : {
    doubleNum() {
      return this.num * 2;
    }
  },
}
</script>
<style>
</style>