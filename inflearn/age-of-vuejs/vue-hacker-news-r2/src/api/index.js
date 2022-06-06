import axios from "axios";

/*
News	https://api.hnpwa.com/v0/news/1.json
Newest	https://api.hnpwa.com/v0/newest/1.json
Ask	https://api.hnpwa.com/v0/ask/1.json
Show	https://api.hnpwa.com/v0/show/1.json
Jobs	https://api.hnpwa.com/v0/jobs/1.json
 */

// HTTP Request & Response 와 관련된 기본설정
const config = {
  baseUrl : "https://api.hnpwa.com/v0"
}

/************************************************
 API 함수들
 *************************************************/

const fetchNewsList = () => {
  return axios.get(`${config.baseUrl}/news/1.json`);
}

const fetchAskList = () => {
  return axios.get(`${config.baseUrl}/ask/1.json`);
}

export default {
  fetchNewsList,
  fetchAskList,
}