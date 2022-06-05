import MainView from "@/views/pc/MainView";

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
];

export default routes;