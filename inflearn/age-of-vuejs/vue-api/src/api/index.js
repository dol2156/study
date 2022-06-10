import axios from "axios";

//https://jsonplaceholder.typicode.com/users
//https://jsonplaceholder.typicode.com/posts

// development 또는 production 구분하기 위한
const isDevMode = (process.env.NODE_ENV === "development") ? true : false;


// axios 인스턴스 생성
// https://axios-http.com/kr/docs/req_config
if(isDevMode) console.log("process.env.VUE_APP_API_URL : ", process.env.VUE_APP_API_URL);
const instance = axios.create({
  baseURL : process.env.VUE_APP_API_URL,
});



/************************************************
 API 함수들
 *************************************************/

export const fetchUserList = async () => {
  try {
    let path;
    if (isDevMode) {
      path = 'users.json';
    } else {
      path = '';
    }
    
    const response = await instance.request(path);
    return response;
  } catch (error) {
    console.log(error);
  }
  
}

export const fetchPostList = () => {
  let path;
  if (isDevMode) {
    path = 'posts.json';
  } else {
    path = '';
  }
  
  return instance.request(path);
}
