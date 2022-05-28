<template>
  <div>TodoFooter : {{ message }}</div>
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
    onFunc() {
      console.log("onFunc");
    },
  },
}
</script>
<!--CSS를 이 구성 요소로만 제한하려면 "범위 지정" 속성을 추가하십시오.-->
<style scoped>
</style>