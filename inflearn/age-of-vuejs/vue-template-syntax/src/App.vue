<template>
  <div>App</div>
  <div>{{ message }}</div>
  <div>{{ doubleNum }}</div>
  <div :id="uuid">{{ uuid }}</div>
  <div :class="class_name">{{ class_name }}</div>
  <div v-if="loading===true">
    Loading...
  </div>
  <div v-else>
    로그인 되었습니다.
  </div>
  <div v-show="loading===true">
    Loading...
  </div>
  <button type="button" @click="onLogin">LOGIN</button>
  <div>
    <input
      type="text" name="message" placeholder="placeholder"
      v-model="message"
    />
  </div>
  <div>
    <input
      type="text" name="keyup_test" placeholder="placeholder"
      @keyup.enter="onLogTxt"
    />
  </div>
</template>
<script>
export default {
  name : "App",
  data() {
    return {
      message : "Hello Vue",
      num : 10,
      uuid : 'abc123',
      class_name : 'text_blue',
      loading : true,
    };
  },
  computed : {
    doubleNum() {
      return this.num * 2;
    }
  },
  methods : {
    onLogin() {
      this.loading = false;
    },
    onLogTxt() {
      console.log("onLogTxt");
    },
  },
}
</script>
<style>
.text_blue{ color:blue; }
</style>