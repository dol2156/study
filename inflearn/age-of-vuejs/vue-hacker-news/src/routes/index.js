import {createRouter, createWebHistory} from "vue-router";

import NewsView from "@/views/NewsView";
import AskView from "@/views/AskView";
import JobsView from "@/views/JobsView";

const routes = [
  {
    path : "/",
    redirect : "/jobs",// 리다이렉트 필요시 작성
  },
  {
    path : "/news",
    name : "NewsView",
    component : NewsView,
  },
  {
    path : "/ask",
    name : "AskView",
    component : AskView,
  },
  {
    path : "/jobs",
    name : "JobsView",
    component : JobsView,
  },
];

const router = createRouter({
  history : createWebHistory(),// 해시 제거를 위해 히스토리 모드 사용
  routes,
});

export default router;