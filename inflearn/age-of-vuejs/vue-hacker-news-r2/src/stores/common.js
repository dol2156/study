import {defineStore} from "pinia";
import api from '@/api/index';

export const useCommonStore = defineStore("common", {
  
  // state : 여러 컴포넌트에 공유되는 데이터 ( data )
  state : () => ({
    num : 100,
    newsList : [],
    askList : [],
  }),
  
  // getters : 연산된 state 값을 접근하는 속성 ( computed )
  getters : {
    doubleCount(state) {
      return state.num * 2;
    }
  },
  
  // actions : state 값을 변경하는 이벤트 로직, 메서드 ( methods )
  actions : {
    increment() {
      console.log('increment');
      this.num++;
    },
    getNewsList() {
      api.fetchNewsList()
        .then((response) => {
          // success
          console.table(response.data[0]);
          this.newsList = response.data;
        })
        .catch((error) => {
          // error
          console.log(error);
        })
        .then(() => {
          // complete
        });
    },
    getAskList() {
      api.fetchAskList()
        .then((response) => {
          // success
          console.table(response.data[0]);
          this.askList = response.data;
        })
        .catch((error) => {
          // error
          console.log(error);
        })
        .then(() => {
          // complete
        });
    },
  },
  
});