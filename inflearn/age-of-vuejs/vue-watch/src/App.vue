<template>
  <div>App</div>
  <div>{{ message }}</div>
  <div>{{ num }}</div>
  <div>{{ property }}</div>
  <div>
    <button type="button" @click="addNum">increase</button>
  </div>
  <div :class="cname">Hello</div>
  <div :class="errorTextColor">Hello</div>
  <div>
    <button type="button" @click="changeWarning">WARNING</button>
  </div>
</template>
<script>
export default {
  name : "App",
  props : ['propsdata'],
  data() {
    return {
      message : "Hello Vue",
      num : 10,
      cname : 'blue-text',
      isError : false,
    };
  },
  methods : {
    addNum() {
      this.num = this.num + 1;
    },
    changeWarning(){
      this.isError = true;
    }
  },
  watch : {
    // num 이 변경될 때마다, 이 함수가 실행될 것 입니다.
    num(new_num, old_num) {
      console.log(new_num, old_num);
    }
  },
  computed : {
    property() {
      return this.num * 2;
    },
    errorTextColor() {
      if(this.isError===true){
        return "warning";
      }else{
        return null;
      }
    },
  },
}
</script>
<style>
.warning{ color:red; }
</style>