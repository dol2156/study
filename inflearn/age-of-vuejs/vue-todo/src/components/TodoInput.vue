<template>
  <div class="input_box">
    <input
      type="text" name="name" placeholder="placeholder"
      v-model="newTodoItem"
      @keyup.enter="addTodo"
    />
    <button
      class="add_btn"
      type="button"
      @click="addTodo"
    >
      <i class="fas fa-plus"></i>
    </button>
    
  </div>
</template>
<script>
export default {
  name : "TodoInput",
  props : ['propsdata'],
  data() {
    return {
      newTodoItem : "",
    };
  },
  computed : {
    doubleNum() {
      return this.num * 2;
    }
  },
  watch : {
    // num 이 변경될 때마다, 이 함수가 실행될 것 입니다.
    num(new_num, old_num) {
      console.log(new_num, old_num);
    }
  },
  methods : {
    addTodo() {
      this.$emit('addOneItem', this.newTodoItem);
      this.clearInput();
    },
    clearInput(){
      this.newTodoItem = '';
    }
  },
}
</script>
<!--CSS를 이 구성 요소로만 제한하려면 "범위 지정" 속성을 추가하십시오.-->
<style scoped>
.input_box{ font-size:0; display:flex; }
.input_box > *{ font-size:0.9rem; height:50px; }
.input_box > input{ flex-grow:1; }
.input_box > .add_btn{ display:inline-block; width:50px; background-color:plum; }
</style>