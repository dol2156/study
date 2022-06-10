import axios from "axios";

//https://jsonplaceholder.typicode.com/users
//https://jsonplaceholder.typicode.com/posts

// development 또는 production 구분하기 위한
const isDevMode = (process.env.NODE_ENV === "development") ? true : false;

// axios 인스턴스 생성
// https://axios-http.com/kr/docs/req_config
console.log("process.env.VUE_APP_API_URL : ", process.env.VUE_APP_API_URL);
const instance = axios.create({
  baseURL : process.env.VUE_APP_API_URL,
});

/************************************************
 API 함수들
 *************************************************/

export const fetchUserList = async () => {
  try {
    const path = (isDevMode) ? 'users.json' : 'REAL_API';
    
    const response = await instance.request(path);
    return response;
  } catch (error) {
    console.log(error);
  }
  
}

export const fetchPostList = () => {
  const path = (isDevMode) ? 'posts.json' : 'REAL_API';
  
  return instance.request(path);
}
