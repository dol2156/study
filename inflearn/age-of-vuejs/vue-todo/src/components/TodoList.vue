<template>
  <ul class="todo_list">
    <li :class="{ completed : item.completed === true }"
        v-for="(item, idx) in todoItems" :key="item.id" :data-idx="idx">
      <button
        class="chk_btn" type="button"
        @click="toggleTodo(item, idx)"
      >
        <i class="fas fa-check-circle"></i>
      </button>
      <div class="text_area">
        <div class="text">{{ item.value }}</div>
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
export default {
  name : "TodoList",
  props : ['todoItems', 'propsAppData'],
  data() {
    return {};
  },
  methods : {
    toggleTodo(item, idx) {
      this.$emit('toggleTodo', item, idx);
    },
    removeTodo(item, idx) {
      this.$emit('removeOneItem', item, idx);
    },
  },
}
</script>
<!--CSS를 이 구성 요소로만 제한하려면 "범위 지정" 속성을 추가하십시오.-->
<style scoped>
.todo_list{ width:100%; margin-top:10px; background-color:white; }
.todo_list > li{ width:100%; display:flex; }
.todo_list > li > *{ height:50px; border:1px solid #dddddd; }
.todo_list > li > .text_area{ flex-grow:1; }
.todo_list > li > .text_area > .text{ display:flex; align-items:center; width:100%; height:100%; }
.todo_list > li > .text_area > .text{ padding:0 10px; }
.todo_list > li.completed > .text_area > .text{ color:#dddddd; text-decoration:line-through; }
.todo_list > li > .chk_btn{ width:50px; color:dodgerblue; }
.todo_list > li.completed > .chk_btn{ color:#dddddd; }
.todo_list > li > .del_btn{ width:50px; color:darkred; }
.todo_list > li.completed > .del_btn{ color:#dddddd; }
</style>