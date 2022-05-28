<template>
  <header>
    <h1>Header</h1>
    <div>{{ propsdata }}</div>
    <div><button type="button" @click="sendEvent">emit</button></div>
  </header>
</template>
<script>
export default {
  name : "AppHeader",
  props:['propsdata'],
  methods : {
    sendEvent() {
      this.$emit('renew');
    },
  },
}
</script>
<!--CSS를 이 구성 요소로만 제한하려면 "범위 지정" 속성을 추가하십시오.-->
<style scoped>
</style>