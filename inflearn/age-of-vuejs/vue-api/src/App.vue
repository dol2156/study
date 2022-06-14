<template>
  <div>App : {{ message }}</div>
  <h1>UserList</h1>
  <ul>
    <li v-for="(item, idx) in user_list" :key="item.id" :data-idx="idx">
      {{ item.name }}
    </li>
  </ul>
  <h1>PostList</h1>
  <ul>
    <li v-for="(item, idx) in post_list" :key="item.id" :data-idx="idx">
      {{ item.title }}
    </li>
  </ul>
</template>
<script>
import {fetchPostList, fetchUserList} from "@/api/index";
export default {
  name : "App",
  data() {
    return {
      message : "Hello Vue",
      user_list : [],
      post_list : [],
    };
  },
  created() {
    (async () => {
      const response = await fetchUserList();
      this.user_list = response.data;
    })();
    
    fetchPostList()
      .then((response) => {
        this.post_list = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
      });
  },
};
</script>
<style></style>
