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
  {
    path : "/404",
    name : "PageNotFoundView",
    component : () => import('@/views/PageNotFoundView'),// 코드 스플리팅 - SPA 방식에서 오직 한페이지에 필요한 리소스만 필요한 경우 사용
  },
  {
    path : "/:catchAll(.*)",
    redirect : '/404',
  }
];

const router = createRouter({
  history : createWebHistory(),// 해시 제거를 위해 히스토리 모드 사용
  routes,
});

export default router;