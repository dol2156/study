<template>
  <nav>
    <ul>
      <li><router-link to="/main">/main</router-link></li>
      <li><router-link to="/login">/login</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HeaderCpnt",
};
</script>

<style scoped>
nav {
  outline: 1px solid red;
  text-align: center;
}
</style>
