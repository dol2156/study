<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  outline:1px dashed red; box-shadow:0px 0px 10px cornflowerblue;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
