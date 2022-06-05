<template>
  <nav>
    <ul>
      <li><router-link to="/main">/main</router-link></li>
      <li><router-link to="/login">/login</router-link></li>
    </ul>
  </nav>
  <div>MainView</div>
  <div>$commonStore.num : {{ $commonStore.num }}</div>
</template>

<script>
export default {
  name: "MainView",
  created() {
    this.$api
      .fetchUserList()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
