import { createRouter, createWebHistory } from "vue-router";
import MobileDetect from "mobile-detect";

import PcRoute from "@/routes/pc";
import MoRoute from "@/routes/mo";


var md = new MobileDetect(window.navigator.userAgent);
/* 
console.log(md.mobile()); // 'Sony'
console.log(md.phone()); // 'Sony'
console.log(md.tablet()); // null
console.log(md.userAgent()); // 'Safari'
console.log(md.os()); // 'AndroidOS'
console.log(md.is("iPhone")); // false
console.log(md.is("bot")); // false
console.log(md.version("Webkit")); // 534.3
console.log(md.versionStr("Build")); // '4.1.A.0.562'
console.log(md.match("playstation|xbox")); // false
 */

let routes;
if (!md.mobile()) {
  //PC
  routes = PcRoute;
} else {
  //MO
  routes = MoRoute;
}


const router = createRouter({
  history: createWebHistory(),// 해시 제거를 위해 히스토리 모드 사용
  routes: routes,
});

export default router;