import {createRouter, createWebHistory} from "vue-router";

import HomeView from "@/views/HomeView";
import NewsView from "@/views/NewsView";

const routes = [
  {
    path : "/",
    redirect : "/home",// 리다이렉트 필요시 작성
  },
  {
    path : "/home",
    name : "HomeView",
    component : HomeView,
  },
  {
    path : "/news",
    name : "NewsView",
    component : NewsView,
  },
];

const router = createRouter({
  history : createWebHistory(),// 해시 제거를 위해 히스토리 모드 사용
  routes,
});

export default router;