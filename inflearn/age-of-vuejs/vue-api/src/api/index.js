import axios from "axios";

//https://jsonplaceholder.typicode.com/users
//https://jsonplaceholder.typicode.com/posts

// HTTP Request & Response 와 관련된 기본설정
const config = {
  base_url: "https://jsonplaceholder.typicode.com"
}

/************************************************
 API 함수들
 *************************************************/

export const fetchUserList = async () => {
  try {
    const response = await axios.get(`${config.base_url}/users`);
    return response;
  } catch (error) {
    console.log(error);
  }

}

export const fetchPostList = () => {
  return axios.get(`${config.base_url}/posts`);
}
