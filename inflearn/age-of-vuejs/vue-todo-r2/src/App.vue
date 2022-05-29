<template>
  <AppHeader/>
  <main>
    <TodoInput @addTodoItem="setData"/>
    <TodoList
      :props_todo_list="this.todo_list"
      @eDelTodo="onDelTodo"
    />
  </main>
  <AppFooter @eRemoveAll="onRemoveAll"/>
</template>
<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
export default {
  name : "App",
  components : {TodoList, TodoInput, AppFooter, AppHeader},
  data() {
    return {
      todo_list : []
    };
  },
  methods : {
    onRemoveAll() {
      localStorage.clear();
      
      this.syncData();
    },
    
    onDelTodo(todo_obj) {
      const _key = todo_obj.value;
      localStorage.removeItem(_key);
      
      this.syncData();
    },
    
    
    setData(todo_obj) {
      const _key = todo_obj.value;
      const _value = JSON.stringify(todo_obj);
      localStorage.setItem(_key, _value);
      
      this.syncData();
    },
    
    
    syncData() {
      let _len = localStorage.length;
      let _key, _item, _arr = [];
      for (let _i = 0; _i < _len; _i++) {
        _key = localStorage.key(_i);
        _item = localStorage.getItem(_key);
        _item = JSON.parse(_item);
        _arr.push(_item);
      }
      this.todo_list = _arr;
    },
  },
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
    this.syncData();
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
<style>
body{ background-color:#ffffd4; }
#app{ text-align:center; padding:20px; }
main{ padding-top:20px; padding-bottom:20px; }
.inpui{ padding-left:10px; padding-right:10px; height:50px; }
.btnui{ padding-left:10px; padding-right:10px; height:50px; background-color:#dddddd; }
</style>