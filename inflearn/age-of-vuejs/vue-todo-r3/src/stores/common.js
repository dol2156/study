import {defineStore} from "pinia";

export const useCommonStore = defineStore("common", {
  
  // state : 여러 컴포넌트에 공유되는 데이터 ( data )
  state : () => ({
    num : 200,
    todo_list : [],
    user_name : "강석민",
  }),
  
  // getters : 연산된 state 값을 접근하는 속성 ( computed )
  getters : {
    doubleCount : (state) => state.num * 2,
  },
  
  // actions : state 값을 변경하는 이벤트 로직, 메서드 ( methods )
  actions : {
    increment() {
      this.count++;
    },
    
    
    addTodoItem(todo_title) {
      const obj = {
        title : todo_title.trim(),
        is_complete : false,
      };
      localStorage.setItem(todo_title, JSON.stringify(obj));
      
      this.loadTodoList();
    },
    
    deleteTodoItem(todo_title){
      localStorage.removeItem(todo_title);
  
      this.loadTodoList();
    },
  
    deleteAllTodoItem() {
      localStorage.clear();
      
      this.loadTodoList();
    },
    
    toggleTodoItem(todo_title){
      const _todo_obj = JSON.parse(localStorage.getItem(todo_title));
      _todo_obj.is_complete = !_todo_obj.is_complete;
  
      localStorage.setItem(todo_title, JSON.stringify(_todo_obj));
  
      this.loadTodoList();
    },
    
    loadTodoList() {
      const arr = [];
  
      const _len = localStorage.length;
      for (let _i = 0; _i < _len; _i++) {
        const _obj = JSON.parse(localStorage.getItem(localStorage.key(_i)));
        arr.push(_obj);
      }
      
      this.todo_list = arr;
    },
  },
  
});