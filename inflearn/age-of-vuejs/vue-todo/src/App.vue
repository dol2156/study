<template>
  <TodoHeader/>
  <TodoInput
    @addOneItem="addOneItem"
  />
  <TodoList
    :todoItems="todoItems"
    @removeOneItem="removeOneItem"
    @toggleTodo="toggleTodo"
  />
  <TodoFooter
    @fnClearAll="onClearAll"
  />
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
      todoItems : [],
    };
  },
  computed : {
    doubleNum() {
      return this.num * 2;
    }
  },
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
    this.loadLocalStorage();
  },
  mounted() {
    this.$nextTick(() => {
      // 전체 화면내용이 렌더링된 후에 아래의 코드가 실행됩니다.
    })
  },
  updated() {
    this.$nextTick(() => {
      // 전체 화면내용이 다시 렌더링된 후에 아래의 코드가 실행됩니다.
    })
  },
  methods : {
    /**
     * 로컬 스토리지 불러오기
     */
    loadLocalStorage() {
      let _len = localStorage.length;
      let _result = [];
      let _key, _item;
      for (let _i = 0; _i < _len; _i++) {
        _key = localStorage.key(_i);
        _item = JSON.parse(localStorage.getItem(_key));
        _result.push(_item);
      }
      
      _result = _result.sort((a, b) => {
        return a.value - b.value;
      });
      
      this.todoItems = _result;
    },
    
    addOneItem(item) {
      // 공백 입력 방지
      if (item.trim() === "") return;
      
      // 새 아이템 생성
      const obj = {completed : false, value : item};
      
      // 저장
      localStorage.setItem(item, JSON.stringify(obj));
      
      // 저장 후 로컬스토리지 불러오기
      this.loadLocalStorage();
    },
    
    removeOneItem(item, idx) {
      localStorage.removeItem(item.value);
      this.todoItems = this.$ArrayUtil.removeByIdx(this.todoItems, idx);
    },
    
    toggleTodo(item) {
      
      // 데이터 갱신
      item.completed = !item.completed;
      
      // 로컬 스토리지도 갱신
      localStorage.removeItem(item.value);
      localStorage.setItem(item.value, JSON.stringify(item));
    },
  
    onClearAll() {
      console.log("onClearAll");
      localStorage.clear();
      this.todoItems = [];
    },
  },
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