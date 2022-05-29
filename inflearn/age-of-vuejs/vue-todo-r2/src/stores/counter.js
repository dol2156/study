// stores/counter.js
import {defineStore} from "pinia";

export const useCounterStore = defineStore("counter", {
  
  // data 랑 비슷
  state : () => ({
    count : 99
  }),
  
  // method 랑 비슷
  actions : {
    increment() {
      this.count++;
    }
  },
  
  // computed 랑 비슷
  getters : {
    doubleCount(state) {
      return state.count * 2;
    }
  }
});