import axios from "axios";

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
    let response;
    if (isDevMode) {
      response = await instance.get('users.json');
    } else {
      response = await instance.get('REAL_API');
    }
    
    return response;
  } catch (error) {
    console.log(error);
  }
  
}

export const fetchPostList = () => {
  let response;
  if (isDevMode) {
    response = instance.get('posts.json');
  } else {
    response = instance.get('REAL_API');
  }
  
  return response;
}
