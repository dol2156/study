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
    return {};
  },
  computed : {
    doubleNum() {
      return this.num * 2;
    }
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
  }
}
</script>
<style>
*{ box-sizing:border-box; }
body{
  text-align:center;
  background-color:#f6f6f6;
}
input{
  outline:none;
  border:1px groove #dedede;
  width:200px;
  padding:0 5px;
}
button{
  border:1px groove #dedede;
  cursor:pointer;
}
.shadow{
  box-shadow:5px 10px 10px rgba(0, 0, 0, 0.03);
}
#app{ padding:10px; }
</style>