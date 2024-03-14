// import Introduce from "./Introduce.vue";
// import Regular from "./Regular.vue";
// import ArrAbout from "./ArrAbout.vue";
// import ObjectAbout from "./ObjectAbout.vue";
// import MathAbout from "./MathAbout.vue";
// import NumberAbout from "./NumberAbout.vue";
// import StringAbout from "./StringAbout.vue";
// import DateAbout from "./DateAbout.vue";
// import BrowserAbout from "./BrowserAbout.vue";
// import EventAbout from "./EventAbout.vue";
// import AjaxAbout from "./AjaxAbout.vue";
// import AudioVideoAbout from "./AudioVideoAbout.vue";
const Introduce = () => import("./Introduce.vue");
const Regular = () => import("./Regular.vue");
const ArrAbout = () => import("./ArrAbout.vue");
const ObjectAbout = () => import("./ObjectAbout.vue");
const MathAbout = () => import("./MathAbout.vue");
const NumberAbout = () => import("./NumberAbout.vue");
const StringAbout = () => import("./StringAbout.vue");
const DateAbout = () => import("./DateAbout.vue");
const BrowserAbout = () => import("./BrowserAbout.vue");
const EventAbout = () => import("./EventAbout.vue");
const AjaxAbout = () => import("./AjaxAbout.vue");
const AudioVideoAbout = () => import("./AudioVideoAbout.vue");

export default{
  Introduce,
  Regular,
  ArrAbout,
  ObjectAbout,
  MathAbout,
  NumberAbout,
  StringAbout,
  DateAbout,
  BrowserAbout,
  EventAbout,
  AjaxAbout,
  AudioVideoAbout,
}