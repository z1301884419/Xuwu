import{d as C,r as l,n as O,c as I,k as u,l as p,a as t,v as S,m as b,X as P,p as R,b as T,o as g,_ as X}from"./index-a2eccc6b.js";import{C as D}from"./CodeArea-3f31aad3.js";const e=n=>(R("data-v-9b7d206b"),n=n(),T(),n),B=P('<h2 id="canvas-pixelprocess-title" data-v-9b7d206b>像素处理 </h2><div data-v-9b7d206b>在canvas中可以通过设置像素点的颜色来画图，也可以获取到某点的像素值</div><h4 id="canvas-pixelprocess-create" data-v-9b7d206b>创建像素数据对象：createImageData(width,height)</h4><div data-v-9b7d206b>width,height: 像素图像的宽高</div><br data-v-9b7d206b><div data-v-9b7d206b>调用createImageData(w,h)会返回一个像素数据对象imageDataObj，其中data属性为像素的值</div><div data-v-9b7d206b>imageDataObj.data为一个数组，其中每4个值代表一个像素点的值，分别对应rgba(redColor,greenColor,blueColor,alpha)的4个值</div><h4 id="canvas-pixelprocess-put" data-v-9b7d206b>将像素数据放入画布：putImageData(imageData,canvsX,canvasY,sliceX,sliceY,sliceW,sliceH)</h4><div data-v-9b7d206b>imageData：像素数据</div><div data-v-9b7d206b>(canvsX,canvsY)：要放入画布的位置</div><div data-v-9b7d206b>(sliceX,sliceY)：裁剪像素图像的位置</div><div data-v-9b7d206b>(sliceW,sliceH)：要裁剪的宽高</div>',12),Y=["textContent"],N=e(()=>t("div",null,"效果如下",-1)),V=e(()=>t("br",null,null,-1)),q=e(()=>t("h4",{id:"canvas-pixelprocess-get"},"从canvas中获取像素：getImageData(x,y,width,height)",-1)),H=e(()=>t("div",null,"(x,y)：从(x,y)处开始获取像素值",-1)),W=e(()=>t("div",null,"(width,height)：要获取的宽高",-1)),A=e(()=>t("div",null,"返回一个像素数据对象imageDataObj",-1)),E=["textContent"],z=e(()=>t("div",null,"效果如下",-1)),F=e(()=>t("br",null,null,-1)),G=e(()=>t("br",null,null,-1)),J=e(()=>t("br",null,null,-1)),K=e(()=>t("br",null,null,-1)),L={class:"imageData2"},M=C({__name:"PixelProcess",setup(n){const r=l(),_=l(),x=l([]);O(()=>{const i=r._value;i.width=400,i.height=200,i.style.boxShadow="0 0 1px 1px";const v=i.getContext("2d");let s=v.createImageData(100,100);for(let a=0;a<s.data.length;a++)a<s.data.length/4?c(a,[255,0,0,255],s.data):a<s.data.length*2/4?c(a,[255,200,0,255],s.data):a<s.data.length*3/4?c(a,[255,255,100,255],s.data):a<s.data.length&&c(a,[255,0,255,255],s.data);function c(a,f,o){const[w,y,k,j]=f;switch(a%4){case 0:o[a]=w;break;case 1:o[a]=y;break;case 2:o[a]=k;break;case 3:o[a]=j;break}}v.putImageData(s,50,50);const d=_._value;d.width=400,d.height=200,d.style.boxShadow="0 0 1px 1px";const h=d.getContext("2d");h.fillStyle="#009900",h.fillRect(0,0,100,100),x.value=h.getImageData(10,10,10,10).data});const m=l({html1:`const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
let imageDataObj = context.createImageData(100, 100);
for (let i = 0; i < imageDataObj.data.length; i++) {
  if (i < imageDataObj.data.length/4){
    setpixe(i,[255,0,0,255],imageDataObj.data);
  }
  else if (i < imageDataObj.data.length*2/4){
    setpixe(i,[255,200,0,255],imageDataObj.data);
  }
  else if (i <imageDataObj.data.length*3/4){
    setpixe(i,[255,255,100,255],imageDataObj.data);
  }
  else if (i < imageDataObj.data.length){
    setpixe(i,[255,0,255,255],imageDataObj.data);
  }
}
function setpixe(i,rgba,suorceData){
  const [r,g,b,a] = rgba;
  switch (i % 4) {
      case 0: suorceData[i] = r; break;
      case 1: suorceData[i] = g; break;
      case 2: suorceData[i] = b; break;
      case 3: suorceData[i] = a; break;
    }
}
context.putImageData(imageDataObj,50,50)
`,html2:`const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
context.fillStyle='#009900';
context.fillRect(0,0,100,100);
let imageData = context2.getImageData(10,10,10,10).data;
console.log(imageData)
`});return(i,v)=>(g(),I("div",null,[B,(g(),u(D,{key:new Date().getTime()+"html1"},{default:p(()=>[t("div",{textContent:b(m.value.html1)},null,8,Y)]),_:1})),N,t("canvas",{ref_key:"canvasRef1",ref:r},null,512),V,q,H,W,A,(g(),u(D,{key:new Date().getTime()+"html2"},{default:p(()=>[t("div",{textContent:b(m.value.html2)},null,8,E)]),_:1})),z,t("canvas",{ref_key:"canvasRef2",ref:_},null,512),F,G,S(" data值如下： "),J,K,t("div",L,"["+b(x.value.toString())+"]",1)]))}});const Z=X(M,[["__scopeId","data-v-9b7d206b"]]);export{Z as default};
