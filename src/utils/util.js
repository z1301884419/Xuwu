import { cloneDeep } from "lodash";

export const setSession = (key, val) => {
  let strVal = JSON.stringify(val);
  sessionStorage.setItem(key, strVal);
};
export const getSession = (key) => JSON.parse(sessionStorage.getItem(key));
export const removeSession = (key) => {
  sessionStorage.removeItem(key)
}
export const setLocal = (key, val) => {
  let strVal = JSON.stringify(val);
  localStorage.setItem(key, strVal);
};
export const getLocal = (key) => JSON.parse(localStorage.getItem(key));
export const removeLocal = (key) => {
  localStorage.removeItem(key)
}

export function debounce(func, deley = 500){
  let timer;
  return function(...args){
    // console.log('timer',timer) // 每次打印的timer值不同，即setTimeout的return操作是同步的，且每个timer的值加3
    clearTimeout(timer);
    timer = setTimeout(()=>{
      func.call(this,...args);
      timer = undefined;
    },deley)
  }
}

export const copyText = (function () {
    if (navigator.clipboard) {
      return (text) => {
        return navigator.clipboard.writeText(text)
      }
    } else {
      return (text) => {
        return new Promise((resolve,reject)=>{
        const input = document.createElement('input');
        input.setAttribute('value', text);
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        resolve(text);
        })
      }
    }
  })()

  /** 找到当前二级路由中的锚点
   * @param {*} navMenu 二级路由meun数据
   * @param {*} path 二级路由path 
   */
  export function findPageAnchorMenu(navMenu, path) {
    let anchorMenu = [];
    let menu = cloneDeep(navMenu)
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].path === path) {
        anchorMenu = menu[i].anchors || [];
        break;
      } else if (menu[i].menuItem) {
        if (!anchorMenu.length) {
          anchorMenu = findPageAnchorMenu(menu[i].menuItem, path)
        }
      }
    }
    return anchorMenu;
  }
