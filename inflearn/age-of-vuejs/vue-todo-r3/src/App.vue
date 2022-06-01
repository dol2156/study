<template>
  <header>
    <h1>TODO it!!</h1>
  </header>
  <main>
    <section>
      <div class="todo_input_box">
        <input class="inpui inp_todo_title" type="text" name="name" placeholder="placeholder"/>
        <button class="btnui btn_add_todo" type="button">할일 추가</button>
      </div>
    </section>
    <section style="margin-top:20px;">
      <ul class="todo_list">
        <li v-for="(item, idx) in 3" :key="item.id" :data-idx="idx">
          <button class="btnui btn_complete_toggle" type="button">완료 체크</button>
          <div class="title">{{ idx }}</div>
          <button class="btnui btn_del" type="button">삭제</button>
        </li>
      </ul>
    </section>
  </main>
  <footer>
    <button class="btnui" type="button">모두 삭제</button>
    <div>Copyright ⓒ. All rights reserved.</div>
  </footer>
</template>
<script>
import {useCommonStore} from "@/stores/common";

export default {
  setup() {
    const commonStore = useCommonStore();
    return {commonStore}
  },
  name : "App",
  data() {
    return {
      message : "Hello Vue",
    };
  },
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
    console.log('App created');
    this.commonStore.loadTodoList()
  },
  mounted() {
    this.$nextTick(function () {
      // 전체 화면내용이 렌더링된 후에 아래의 코드가 실행됩니다.
      console.log('App mounted');
    })
  },
  updated() {
    this.$nextTick(function () {
      // 전체 화면내용이 다시 렌더링된 후에 아래의 코드가 실행됩니다.
      console.log('App updated');
    })
  },
}
</script>
<style>
body{ background-color:#ffffd4; }
/**/
#app{ text-align:center; }
#app > *{ padding-left:20px; padding-right:20px; }
/**/
header{ padding-top:30px; padding-bottom:20px; }
header > h1{ font-size:30px; color:darkred; }
main{ padding-top:10px; padding-bottom:10px; }
footer{ padding-top:10px; padding-bottom:10px; }
/**/
.btnui{ background-color:#dddddd; border:1px solid #999999; height:35px; padding-left:10px; padding-right:10px; }
.inpui{ border:1px solid #999999; height:35px; padding-left:10px; padding-right:10px; }
/**/
.todo_input_box{ display:flex; }
.todo_input_box > *{ }
.todo_input_box > .inp_todo_title{ flex-grow:1; }
.todo_input_box > .btn_add_todo{ width:35px; font-size:0; }
/**/
.todo_list{}
.todo_list > li{ display:flex; background-color:white; }
.todo_list > li + li{ margin-top:10px; }
.todo_list > li > .btn_complete_toggle{ width:35px; font-size:0; }
.todo_list > li > .title{ flex-grow:1; display:flex; align-items:center; }
.todo_list > li > .title{ padding-left:10px; padding-right:10px; border:1px solid #999999; }
.todo_list > li > .btn_del{ width:35px; font-size:0; }
</style>