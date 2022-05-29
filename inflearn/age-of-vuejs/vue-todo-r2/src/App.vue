<template>
  <header>Header</header>
  <main>Main</main>
  <footer>Footer</footer>
</template>
<script>
export default {
  name : "App",
  data() {
    return {
      message : "Hello Vue",
      num : 10,
    };
  },
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
    console.log('created');
  },
  mounted() {
    this.$nextTick(function () {
      // 전체 화면내용이 렌더링된 후에 아래의 코드가 실행됩니다.
      console.log('mounted');
    })
  },
  updated() {
    this.$nextTick(function () {
      // 전체 화면내용이 다시 렌더링된 후에 아래의 코드가 실행됩니다.
      console.log('updated');
    })
  },
}
</script>
<style>
</style>