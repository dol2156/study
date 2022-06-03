import {defineStore} from "pinia";
import api from '@/api/index';

export const useCommonStore = defineStore("common", {
  
  // state : 여러 컴포넌트에 공유되는 데이터 ( data )
  state : () => ({
    news_list : [],
    ask_list : [],
    jobs_list : [],
  }),
  
  // getters : 연산된 state 값을 접근하는 속성 ( computed )
  getters : {
    doubleCount(state) {
      return state.num * 2;
    }
  },
  
  // actions : state 값을 변경하는 이벤트 로직, 메서드 ( methods )
  actions : {
    storeNewList() {
      api.fetchNewsList()
        .then((response) => {
          // success
          this.news_list = response.data;
        })
        .catch((error) => {
          // error
          console.log(error);
        })
        .then(() => {
          // complete
        });
    },
    storeAskList() {
      api.fetchAskList()
        .then((response) => {
          // success
          this.ask_list = response.data;
        })
        .catch((error) => {
          // error
          console.log(error);
        })
        .then(() => {
          // complete
        });
    },
    storeJobsList() {
      api.fetchJobsList()
        .then((response) => {
          // success
          this.jobs_list = response.data;
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