import { createRouter, createWebHistory } from "vue-router";

import NewsView from '@/views/NewsView';
import JobsView from '@/views/JobsView';
import AskView from '@/views/AskView';

const routes = [
  {
    path: "/",
    redirect: "/news",// 리다이렉트 필요시 작성
  },
  {
    path: "/news",
    name: "뉴스",
    component: NewsView,
  },
  {
    path: "/ask",
    name: "질문&답변",
    component: AskView,
  },
  {
    path: "/jobs",
    name: "구인&구직",
    component: JobsView,
  },
];

const router = createRouter({
  history: createWebHistory(),// 해시 제거를 위해 히스토리 모드 사용
  routes,
});

export default router;