<template>
  <ul class="todo_list">
    <li v-for="(item, idx) in todo_items" :key="item.id" :data-idx="idx">
      <button class="chk_btn" type="button">
        <i class="fas fa-check-circle"></i>
      </button>
      <div class="text_area">
        <div class="text">{{ item }}</div>
      </div>
      <button
        class="del_btn" type="button"
        @click="removeTodo(item, idx)"
      >
        <i class="fas fa-trash-alt"></i>
      </button>
    </li>
  </ul>
</template>
<script>
const arr = ['0', '1', '2', '3'];
arr.splice(2, 1);
console.log(arr);

export default {
  
  name : "TodoList",
  props : ['propsdata'],
  data() {
    return {
      todo_items : [],
    };
  },
  computed : {
    doubleNum() {
      return 1;
    }
  },
  watch : {
    // num 이 변경될 때마다, 이 함수가 실행될 것 입니다.
    num(new_num, old_num) {
      console.log(new_num, old_num);
    }
  },
  methods : {
    removeTodo(item, idx) {
      console.log(item, idx);
      localStorage.removeItem(item);
      //ArrayUtil.removeByKeyValue()
    },
  },
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
    let len_i = localStorage.length;
    for (let i = 0; i < len_i; i++) {
      this.todo_items.push(localStorage.key(i));
    }
  },
}
</script>
<!--CSS를 이 구성 요소로만 제한하려면 "범위 지정" 속성을 추가하십시오.-->
<style scoped>
.todo_list{ width:100%; margin-top:10px; background-color:white; }
.todo_list > li{ width:100%; display:flex; }
.todo_list > li > *{ height:50px; border:1px solid #ddd; }
.todo_list > li > .text_area{ flex-grow:1; }
.todo_list > li > .text_area > .text{ display:flex; align-items:center; width:100%; height:100%; }
.todo_list > li > .text_area > .text{ padding:0 10px; }
.todo_list > li > .chk_btn{ width:50px; }
.todo_list > li > .del_btn{ width:50px; }
</style>