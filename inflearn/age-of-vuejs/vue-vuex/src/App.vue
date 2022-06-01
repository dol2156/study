<template>
  <div>{{ this.$store.state.userStore.count }}</div>
  <button type="button" @click="increaseCount">숫자 증가</button>
  <h2>유저 리스트</h2>
  <ul>
    <li v-for="(item, idx) in this.$store.state.userStore.user_list" :key="item.id" :data-idx="idx">
      {{ idx }} / {{ item.name }}
    </li>
  </ul>
  <hr>
  <h2>TODO LIST</h2>
  <ul>
    <li v-for="(item, idx) in this.$store.state.todoStore.todo_list" :key="item.id" :data-idx="idx">
      {{ idx }} / {{ item.title }}
    </li>
  </ul>
</template>
<script>
export default {
  name : 'App',
  data() {
    return {};
  },
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
    
    // 유저 데이터 호출
    this.$store.dispatch('userStore/loadUserList');
    
    // Todo 목록 데이터 호출
    this.$store.dispatch('todoStore/loadTodoList');
  },
  methods : {
    increaseCount() {
      this.$store.commit('userStore/increment');
    },
  },
}
</script>
<style>
#app{
  font-family:Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  text-align:center;
  color:#2c3e50;
  margin-top:60px;
}
</style>
