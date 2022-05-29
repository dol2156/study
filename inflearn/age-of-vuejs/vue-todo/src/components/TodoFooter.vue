<template>
  <footer>
    <button
      class="btn_clear_all" type="button"
      @click="onClearAll"
    >Clear All</button>
  </footer>
</template>
<script>
export default {
  name : "TodoFooter",
  props : ['propsdata'],
  data() {
    return {
      message : "Hello Vue",
      num : 10,
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
    onClearAll() {
      this.$emit('fnClearAll');
    },
  },
}
</script>
<!--CSS를 이 구성 요소로만 제한하려면 "범위 지정" 속성을 추가하십시오.-->
<style scoped>
footer{ margin-top:10px; }
footer > .btn_clear_all{ width:100%; font-size:16px; height:50px; background-color:#999; }
</style>