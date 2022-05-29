<template>
  <section class="todo_list_section">
    <ul>
      <li v-for="(todo_obj, idx) in props_todo_list" :key="todo_obj.id" :data-idx="idx">
        <button
          class="btnui btn_ok" type="button"
        >OK</button>
        <div class="text_area">
          <div>
            {{ todo_obj.value }}
          </div>
        </div>
        <button
          class="btnui btn_del" type="button"
          @click="onDelTodo(todo_obj)"
        >DEL</button>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name : "TodoList",
  props : ['props_todo_list'],
  data() {
    return {};
  },
  methods : {
    onDelTodo(todo_obj) {
      this.$emit('eDelTodo', todo_obj);
    },
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
  },
}
</script>
<!--CSS를 이 구성 요소로만 제한하려면 "범위 지정" 속성을 추가하십시오.-->
<style scoped>
.todo_list_section{ margin-top:10px; }
.todo_list_section > ul{ }
.todo_list_section > ul > li{ border:1px solid #dddddd; background-color:white; }
.todo_list_section > ul > li{ display:flex; }
.todo_list_section > ul > li + li{ margin-top:5px; }
.todo_list_section > ul > li > *{ height:50px; }
.todo_list_section > ul > li > .btn_ok{ width:50px; }
.todo_list_section > ul > li > .text_area{ flex-grow:1; display:flex; align-items:center; }
.todo_list_section > ul > li > .text_area{ padding-left:10px; padding-right:10px; }
.todo_list_section > ul > li > .btn_del{ width:50px; }
</style>