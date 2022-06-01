<template>
  <section>
    <div class="todo_input_box">
      <input
        class="inpui inp_todo_title" type="text" name="name" placeholder="todo_title"
        v-model="todo_title"
        @keyup.enter="onAddTodo"
      />
      <button
        class="btnui btn_add_todo" type="button"
        @click="onAddTodo"
      >할일 추가
      </button>
    </div>
  </section>
</template>
<script>
export default {
  name : "TodoInput",
  data() {
    return {
      message : "Hello Vue",
      todo_title : "",
    };
  },
  methods : {
    onAddTodo() {
      this.$commonStore.addTodoItem(this.todo_title);
      this.todo_title = '';
    },
  },
}
</script>
<!--CSS를 이 구성 요소로만 제한하려면 "범위 지정" 속성을 추가하십시오.-->
<style scoped>
/**/
.todo_input_box{ display:flex; }
.todo_input_box > *{ }
.todo_input_box > .inp_todo_title{ flex-grow:1; }
.todo_input_box > .btn_add_todo{ width:35px; font-size:0; }
</style>