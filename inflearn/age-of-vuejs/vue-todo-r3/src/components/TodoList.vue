<template>
  <section style="margin-top:20px;">
    <ul class="todo_list">
      <li v-for="(item, idx) in 3" :key="item.id" :data-idx="idx">
        <button class="btnui btn_complete_toggle" type="button">완료 체크</button>
        <div class="title">{{ idx }}</div>
        <button class="btnui btn_del" type="button">삭제</button>
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
}
</script>
<!--CSS를 이 구성 요소로만 제한하려면 "범위 지정" 속성을 추가하십시오.-->
<style scoped>
.todo_list{}
.todo_list > li{ display:flex; background-color:white; }
.todo_list > li + li{ margin-top:10px; }
.todo_list > li > .btn_complete_toggle{ width:35px; font-size:0; }
.todo_list > li > .title{ flex-grow:1; display:flex; align-items:center; }
.todo_list > li > .title{ padding-left:10px; padding-right:10px; border:1px solid #999999; }
.todo_list > li > .btn_del{ width:35px; font-size:0; }
</style>