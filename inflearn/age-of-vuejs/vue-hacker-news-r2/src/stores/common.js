import { defineStore } from "pinia";
import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
} from '@/api/index';

export const useCommonStore = defineStore("common", {

  // state : 여러 컴포넌트에 공유되는 데이터 ( data )
  state: () => ({
    num: 100,
    NewsListCpnt: {
      newsList: [],
      askList: [],
      jobsList: [],
    },
  }),

  // getters : 연산된 state 값을 접근하는 속성 ( computed )
  getters: {
    doubleCount(state) {
      return state.num * 2;
    }
  },

  // actions : state 값을 변경하는 이벤트 로직, 메서드 ( methods )
  actions: {
    async FETCH_NEWS() {
      console.log('FETCH_NEWS');
      try {
        const response = await fetchNewsList();
        this.NewsListCpnt.newsList = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    getAskList() {
      return fetchAskList()
        .then((response) => {
          // success
          this.NewsListCpnt.askList = response.data;
        })
        .catch((error) => {
          // error
          console.log(error);
        })
        .then(() => {
          // complete
        });
    },


    getJobsList() {
      return fetchJobsList()
        .then((response) => {
          // success
          this.NewsListCpnt.jobsList = response.data;
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