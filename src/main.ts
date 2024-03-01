import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "@/App.vue";
import router from "@/routers.ts";
import { setLocal } from '@/utils/util.js'


const app = createApp(App);
const pinia = createPinia();
app.use(ElementPlus);
app.use(router);
app.use(pinia);

// app.component('HtmlToText',HtmlToText)

// app.config.errorHandler = (err) => {
//   /* 处理错误 */
//   // console.table(err)
// }
app.mount("#app");


// 全局js
String.prototype.sliceByPoint = function (sIndex: number, eIndex: number) {
  let result = "";
  let charIndex = 0;
  for (let i = 0; i < eIndex; i++) {
    if (charIndex >= this.length) break;
    const pointCode = this.codePointAt(charIndex);
    if (i >= sIndex) {
      result += String.fromCodePoint(pointCode);
    }
    charIndex += pointCode > 0xffff ? 2 : 1;
  }
  return result;
};
String.prototype.codePointLength = function () {
    let charIndex = 0;
    let codePointNum = 0;
    for (let i = 0; i < this.length; i++) {
      const pointCode = this.codePointAt(charIndex);
      charIndex += pointCode > 0xffff ? 2 : 1;
      (pointCode > 0xffff) && codePointNum++;
    }
    return this.length - codePointNum;
};
// 每次打开时设置
setLocal('detailsIsOpen', 'false');
