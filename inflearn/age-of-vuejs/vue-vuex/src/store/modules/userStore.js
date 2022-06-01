/*
* userStore :
* */

// state : 여러 컴포넌트에 공유되는 데이터 ( data )
import axios from "axios";
const state = {
  count : 0,
  user_list : [],
}

// getters : 연산된 state 값을 접근하는 속성 ( computed )
const getters = {
  myFunc(state) {
    console.log(state);
  },
}

// mutations : state 값을 변경하는 이벤트 로직, 메서드 ( methods )
const mutations = {
  myFunc(state) {
    console.log(state);
  },
  
  increment(state) {
    state.count = state.count + 2;
  },
  
  updateUserList(state, user_list) {
    state.user_list = user_list;
  },
}

// actions : 비동기 처리 로직을 선언하는 메서드 ( aysync methods )
const actions = {
  myFunc({commit}) {
    console.log(commit);
  },
  
  loadUserList({commit}) {
    // https://axios-http.com/kr/docs/req_config
    const api = "http://jsonplaceholder.typicode.com/users";
    return axios({
      url : api,
      method : 'get',
      responseType : 'json',// 옵션: 'arraybuffer', 'document', 'json', 'text', 'stream'
      timeout : 0, // 기본값은 `0` (타임아웃 없음)
    })
      .then(function (response) {
        // console.log('성공 핸들링');
        commit('updateUserList', response.data);
      })
      .catch(function (error) {
        // console.log('에러 핸들링');
        console.log(error);
      })
      .then(function () {
        // console.log('항상 실행되는 영역');
      });
  },
}

export default {
  namespaced : true,
  state,
  getters,
  mutations,
  actions,
}