import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView";
import LoginView from "@/views/LoginView";


const routes = [
  {
    path: "/",
    redirect: "/main",// 리다이렉트 필요시 작성
  },
  {
    path: "/main",
    name: "메인",
    component: MainView,
  },
  {
    path: "/login",
    name: "로그인",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(),// 해시 제거를 위해 히스토리 모드 사용
  routes,
});

export default router;