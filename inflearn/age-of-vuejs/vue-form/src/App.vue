<template>
  <form @submit.prevent="onSubmitForm">
    <div>
      <label for="userName">id : </label>
      <input
        id="userName" type="text" name="username" placeholder="아이디"
        v-model="username"
      />
    </div>
    <div>
      <label for="password">pw : </label>
      <input
        id="password" type="text" name="password" placeholder="비밀번호"
        v-model="password"
      />
    </div>
    <div>
      <button type="submit">SUBMIT</button>
    </div>
  </form>
</template>
<script>
import axios from 'axios'

export default {
  name : "App",
  data() {
    return {
      message : "Hello Vue",
      username : '111',
      password : '222',
      
    };
  },
  methods : {
    onSubmitForm(e) {
      var formdata = new FormData(e.target);
      
      const params = {};
      for (let [key, value] of formdata) {
        params[key] = value;
      }
      
      
      // https://axios-http.com/kr/docs/req_config
      var api = "http://jsonplaceholder.typicode.com/users";
      axios({
        url : api,
        method : 'post',
        data : params, // 'PUT', 'POST', 'PATCH', 'DELETE' 메소드에서만 적용 가능합니다.
        responseType : 'json',// 옵션: 'arraybuffer', 'document', 'json', 'text', 'stream'
        timeout : 0, // 기본값은 `0` (타임아웃 없음)
      })
        .then(function (response) {
          console.log('성공 핸들링');
          console.log(response);
        })
        .catch(function (error) {
          console.log('에러 핸들링');
          console.log(error);
        })
        .then(function () {
          console.log('항상 실행되는 영역');
        });
    },
  },
}
</script>
<style>
</style>