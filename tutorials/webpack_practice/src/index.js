import './css/reset.css';
import './css/common.css';
import common_js from "./js/common.js";
import layout_js from "./js/layout.js";
import _ from 'lodash';

common_js.init();
layout_js.init();

const k = _.join(['😊', '💀', '👍'], '/');
console.log(k);