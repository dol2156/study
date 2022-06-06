import {createRouter, createWebHistory} from "vue-router";

import NewsView from '@/views/NewsView';
import JobsView from '@/views/JobsView';
import AskView from '@/views/AskView';
import UserView from "@/views/UserView";
import ItemView from "@/views/ItemView";

const routes = [
  {
    path : "/",
    redirect : "/news",// 리다이렉트 필요시 작성
  },
  {
    path : "/news",
    name : "뉴스",
    component : NewsView,
  },
  {
    path : "/ask",
    name : "질문&답변",
    component : AskView,
  },
  {
    path : "/item",
    name : "질문&답변 상세",
    component : ItemView,
  },
  {
    path : "/jobs",
    name : "일거리",
    component : JobsView,
  },
  {
    path : "/user",
    name : "사용자 정보",
    component : UserView,
  },
];

const router = createRouter({
  history : createWebHistory(),// 해시 제거를 위해 히스토리 모드 사용
  routes,
});

export default router;