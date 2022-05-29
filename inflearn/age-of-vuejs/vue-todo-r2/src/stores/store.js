import {createStore} from "vuex";

// state, getters, mutations, actions, modules
export default createStore({
  // data() - readonly
  // this.$store.state.header_text
  state : {
    header_text : "Hello Todo!",
    counter : 2
  },
  
  // state의 값을 변경할 수 있는 유일한 방법
  // this.$store.commit('setCounter', 20);
  mutations : {
    setCounter(state, value) {
      state.counter = value;
    }
  },
  
  // computed()
  getters : {
    getTwoPowerCounter(state) {
      return state.counter ** 2;
    }
  },
  
  
});