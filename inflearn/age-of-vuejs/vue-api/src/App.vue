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
import {fetchPostList, fetchUserList} from "@/api";
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
    // 인스턴스가 생성된 후 동기적으로 호출
    fetchUserList()
      .then((response) => {
        this.user_list = response.data;
      })
      .catch((error) => {
        // console.log('에러 핸들링');
        console.log(error);
      })
      .then(() => {
        // console.log('항상 실행되는 영역');
      });
    
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
}
</script>
<style>
</style>