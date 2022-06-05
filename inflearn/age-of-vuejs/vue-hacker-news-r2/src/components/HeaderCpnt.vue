<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/news">News</router-link></li>
        <li><router-link to="/ask">Ask</router-link></li>
        <li><router-link to="/jobs">Jobs</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderCpnt",
};
</script>

<style scoped>
header {
  background-color: green;
}
nav > ul {
  padding: 10px;
}
nav > ul > li {
  display: inline-block;
}
nav > ul > li + li {
  margin-left: 10px;
}
nav > ul > li > a {
  opacity: 0.5;
  display: inline-flex;
  color: white;
  font-size: 24px;
}
nav > ul > li > a.router-link-active {
  opacity: 1;
}
</style>
