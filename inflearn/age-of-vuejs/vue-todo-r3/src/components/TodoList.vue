<template>
  <section style="margin-top:20px;">
    <ul class="todo_list">
      <li
        :class="{ is_complete : item.is_complete }"
        v-for="(item, idx) in this.$commonStore.todo_list" :key="item.id" :data-idx="idx">
        <button
          class="btnui btn_complete_toggle" type="button"
          @click="onCompleteToggleTodo(item.title)"
        >완료 체크</button>
        <div class="title">{{ item.title }}</div>
        <button
          class="btnui btn_del" type="button"
          @click="onDeleteTodo(item.title)"
        >삭제</button>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name : "TodoList",
  data() {
    return {
      message : "Hello Vue",
    };
  },
  methods : {
    onDeleteTodo(todo_title) {
      this.$commonStore.deleteTodoItem(todo_title);
    },
    onCompleteToggleTodo(todo_title) {
      this.$commonStore.toggleTodoItem(todo_title);
    },
  },
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
    console.log("TodoList created");
    this.$commonStore.loadTodoList();
  },
}
</script>
<!--CSS를 이 구성 요소로만 제한하려면 "범위 지정" 속성을 추가하십시오.-->
<style scoped>
.todo_list{}
.todo_list > li{ display:flex; background-color:white; }
.todo_list > li.is_complete{ opacity:0.5; }
.todo_list > li + li{ margin-top:10px; }
.todo_list > li > .btn_complete_toggle{ width:35px; font-size:0; }
.todo_list > li > .title{ flex-grow:1; display:flex; align-items:center; }
.todo_list > li > .title{ padding-left:10px; padding-right:10px; border:1px solid #999999; }
.todo_list > li > .btn_del{ width:35px; font-size:0; }
</style>