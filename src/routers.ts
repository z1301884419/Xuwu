import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "./pages/Home.vue";
const BaiCao = () => import("./pages/BaiCao.vue");
const CssNote = () => import("./pages/CssNote.vue");
const Blog = () => import("./pages/Blog.vue");
const Details = () => import("./pages/Details.vue");
const Canvas = () => import("./pages/Canvas.vue");
const JsNode = () => import("./pages/JsNode.vue");
import canvashtml from '@/pages_sub/canvasHtml/index';
import jsnodehtml from '@/pages_sub/jsnodeHtml/index';
import musichtml from '@/pages_sub/musicHtml/index';
const Music = () => import("./pages/Music.vue");

// 组件的懒加载是异步的，会扰乱组件的渲染执行顺序

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "首页",
    component: Home,
  },
  {
    path: "/test",
    name: "测试页",
    component: BaiCao,
  },
  {
    path: "/cssnote",
    name: "css备忘录",
    component: CssNote,
  },
  {
    path: "/blog",
    name: "我的笔记",
    component: Blog,
  },
  {
    path: "/details/:id",
    component: Details,
  },
  {
    path: "/canvas",
    name: "canvas画图",
    component: Canvas,
    redirect:"/canvas/create",
    children: [
      {
        path: "create",
        component: canvashtml.Create,
      },
      {
        path: "drawgraphfill",
        component: canvashtml.DrawGraphFill,
      },
      {
        path: "drawgraphpath",
        component: canvashtml.DrawGraphPath,
      },
      {
        path: "drawtext",
        component: canvashtml.DrawText,
      },
      {
        path: "drawimg",
        component: canvashtml.DrawImg,
      },
      {
        path: "clearcanvas",
        component: canvashtml.ClearCanvas,
      },
      {
        path: "shadow",
        component: canvashtml.Shadow,
      },
      {
        path: "canvas_compose",
        component: canvashtml.CanvasCompose,
      },
      {
        path: "canvas_morph",
        component: canvashtml.CanvasMorph,
      },
      {
        path: "canvas_state_cache",
        component: canvashtml.StateCache,
      },
      {
        path: "todataurl",
        component: canvashtml.ToDataUrl,
      },
      {
        path: "pixelprocess",
        component: canvashtml.PixelProcess,
      },
      {
        path: "animation",
        component: canvashtml.Animation,
      },
      {
        path: "caselist",
        component: canvashtml.CaseList,
      },
      {
        path: "/canvas/:pathMatch(.*)*",
        redirect: "/canvas/create",
      },
    ],
  },
  {
    path: "/jsnode",
    name: "JS进阶",
    component: JsNode,
    redirect:"/jsnode/introduce",
    children: [
      {
        path: "introduce",
        component: jsnodehtml.Introduce,
      },
      {
        path: "regular",
        component: jsnodehtml.Regular,
      },
      {
        path: "arr_about",
        component: jsnodehtml.ArrAbout,
      },
      {
        path: "object_about",
        component: jsnodehtml.ObjectAbout,
      },
      {
        path: "math_about",
        component: jsnodehtml.MathAbout,
      },
      {
        path: "number_about",
        component: jsnodehtml.NumberAbout,
      },
      {
        path: "string_about",
        component: jsnodehtml.StringAbout,
      },
      {
        path: "date_about",
        component: jsnodehtml.DateAbout,
      },
      {
        path: "browser_about",
        component: jsnodehtml.BrowserAbout,
      },
      {
        path: "event_about",
        component: jsnodehtml.EventAbout,
      },
      {
        path: "ajax_about",
        component: jsnodehtml.AjaxAbout,
      },
      {
        path: "/jsnode/:pathMatch(.*)*",
        redirect: "/jsnode/introduce",
      },
    ],
  },
  {
    path: "/music",
    name: "音乐播放器",
    component: Music,
    redirect:"/music/music-recommend",
    children: [
      {
        path: "music-recommend",
        component: musichtml.Recommend,
      },
      {
        path: "/music/:pathMatch(.*)*",
        redirect: "/music/music-recommend",
      },
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/home",
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});

export { routes };
