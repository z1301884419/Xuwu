import{q as n,e as N,r as d,f as R,w as F,d as S,s as q,j as D,o as r,c as k,b as o,x as t,m as g,v as O,k as b,A as x,p as W,a as $,_ as I,G as z,H as V,V as E}from"./index-68e97df2.js";import{I as j,m as U}from"./menu-88f7499c.js";const Z=j("go-end",!0,function(e){return n("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[n("path",{d:"M14 12L26 24L14 36",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),n("path",{d:"M34 12V36",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),A=j("go-start",!0,function(e){return n("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[n("path",{d:"M34 36L22 24L34 12",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),n("path",{d:"M14 12V36",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),H=j("pause-one",!1,function(e){return n("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[n("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),n("path",{d:"M19 18V30",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),n("path",{d:"M29 18V30",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),J=j("play",!0,function(e){return n("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[n("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),n("path",{d:"M20 24V17.0718L26 20.5359L32 24L26 27.4641L20 30.9282V24Z",fill:e.colors[3],stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null)])}),P=N("music",()=>{const e=d([{name:"离别开出花",singer:"就是南方凯",avatar:"https://img2.kuwo.cn/star/albumcover/500/s3s47/0/3433413293.jpg",video:"https://m701.music.126.net/20240307231935/8dadd223fe239550cedb5008a8aae5f4/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32103516877/3532/074b/bdea/4f512dfb86fec567b51062cc17695e22.m4a"},{name:"一丝不挂",singer:"陈奕迅",avatar:"https://p2.music.126.net/qE_9M-Ge5qwuk55IfkNO2g==/109951163200234557.jpg?param=200y200",video:"https://m801.music.126.net/20240307231539/c56087f32bf02cb593a7a673d7072934/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481781130/17d4/c256/d137/aaebb46b94a29568e76f6feafa6e1264.mp3"},{name:"葡萄成熟时",singer:"陈奕迅",avatar:"https://img1.kuwo.cn/star/albumcover/500/83/42/4180851740.jpg",video:"https://m801.music.126.net/20240307192159/3b69e1134c5f7934c1b38a083635f2c9/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32367558831/262f/a164/0261/b4856cc5242596f497f5a3c8420ac69f.m4a"}]),h=d(!1),a=d(0),i=R(()=>e.value[a.value]),s=new Audio(i.value.video),l=d({duration:0,currentTime:0});F(i,()=>{s.src=i.value.video,c().play()}),s.ontimeupdate=()=>{l.value.currentTime=s.currentTime},s.onprogress=()=>{l.value.duration=s.duration},s.onended=()=>{a.value>=e.value.length-1?a.value=0:a.value++};function c(){return{play(){s.play(),h.value=!0},pause(){s.pause(),h.value=!1},pre(){a.value<=0?a.value=e.value.length-1:a.value--},next(){a.value>=e.value.length-1?a.value=0:a.value++},progressChange(u){s.pause(),s.currentTime=u,s.play()}}}return{musicData:e,playSong:c,playflag:h,currentSong:i,progressObj:l}}),K=e=>(W("data-v-edc07d07"),e=e(),$(),e),Q={class:"song-info"},X=["src"],Y={class:"song-name"},ee={class:"song-controller"},te=K(()=>o("div",{class:"song-options"},null,-1)),ne=S({__name:"MusicFooter",props:{songData:{},controlOption:{}},setup(e){const{songData:h,controlOption:a}=e,{theme:i,size:s,fill:l}=a||{},c=P(),{playSong:u}=c,{playflag:v,currentSong:w,progressObj:p}=q(c),f=u();function C(){v.value?f.pause():f.play()}function L(_){switch(_){case"pre":f.pre();break;case"next":f.next();break}}const M=d(0);function T(){f.progressChange(M.value)}function B(_){M.value=_}return(_,m)=>{const G=D("el-slider");return r(),k("footer",null,[o("div",Q,[o("img",{src:t(w).avatar,alt:"",class:"song-cover"},null,8,X),o("div",null,[o("div",Y,[o("span",null,g(t(w).name),1),O(" - "),o("span",null,g(t(w).singer),1)]),n(G,{class:"song-progress",modelValue:t(p).currentTime,"onUpdate:modelValue":m[0]||(m[0]=y=>t(p).currentTime=y),onInput:B,onChange:T,min:0,max:t(p).duration},null,8,["modelValue","max"])])]),o("div",ee,[n(t(A),{onClick:m[1]||(m[1]=y=>L("pre")),theme:t(i)||"filled",size:t(s)||36,fill:t(l)||"#7cd1be"},null,8,["theme","size","fill"]),t(v)?x("",!0):(r(),b(t(J),{key:0,onClick:C,theme:t(i)||"filled",size:t(s)||36,fill:t(l)||"#7cd1be"},null,8,["theme","size","fill"])),t(v)?(r(),b(t(H),{key:1,onClick:C,theme:t(i)||"filled",size:t(s)||36,fill:t(l)||"#7cd1be"},null,8,["theme","size","fill"])):x("",!0),n(t(Z),{onClick:m[2]||(m[2]=y=>L("next")),theme:t(i)||"filled",size:t(s)||36,fill:t(l)||"#7cd1be"},null,8,["theme","size","fill"])]),te])}}});const se=I(ne,[["__scopeId","data-v-edc07d07"]]),oe=""+new URL("../static/kedaya.jpeg",import.meta.url).href,ae=e=>(W("data-v-efebcf94"),e=e(),$(),e),ie={class:"container"},le={class:"container-head"},ce={class:"main-left"},re={class:"user"},ue=["src"],de=ae(()=>o("span",{class:"user-name"},"歪比巴布",-1)),he={class:"nav-title"},me=["onClick"],ke={class:"main-right"},fe=S({__name:"Music",setup(e){const h=d(U);d(location.hash.split("/")[2]);function a(i){console.log(i)}return(i,s)=>{const l=D("RouterView");return r(),k("div",ie,[o("div",le,[o("nav",ce,[o("div",re,[o("img",{class:"user-avatar",src:t(oe)},null,8,ue),de]),(r(!0),k(z,null,V(h.value,c=>(r(),k("div",{key:c.title},[o("span",he,g(c.title),1),o("ul",null,[(r(!0),k(z,null,V(c.menuItem,u=>(r(),k("li",{class:"nav-item-title",key:u.path,onClick:v=>a(u.path)},[o("span",null,[(r(),b(E(u.icon)))]),O(" "+g(u.title),1)],8,me))),128))])]))),128))]),o("main",ke,[n(l)])]),n(se,{class:"footer"})])}}});const ge=I(fe,[["__scopeId","data-v-efebcf94"]]);export{ge as default};