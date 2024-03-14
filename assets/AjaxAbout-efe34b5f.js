import{d as w,j as c,c as u,v as l,a as e,q as t,l as o,p as L,b as M,o as h,m as a,A as H,_ as v}from"./index-a2eccc6b.js";import{C as p}from"./CodeArea-3f31aad3.js";const r=i=>(L("data-v-13b157fa"),i=i(),M(),i),C={class:"box"},S=r(()=>e("h3",{id:"ajax_about_introduce"},"AJAX简介",-1)),R={id:"ajax_about_xhr"},k=r(()=>e("h3",null,"XMLHttpRequest对象",-1)),A=r(()=>e("br",null,null,-1)),X=r(()=>e("br",null,null,-1)),E=r(()=>e("br",null,null,-1)),O=r(()=>e("h4",null,"创建一个XMLHttpRequest对象",-1)),P=r(()=>e("h4",null,"XMLHttpRequest属性或方法",-1)),j={style:{"word-break":"auto-phrase"}},q={key:0},D=["innerHTML"],N=r(()=>e("h4",null,"XMLHttpRequest事件",-1)),G={style:{"word-break":"auto-phrase"}},B=["innerHTML"],J=r(()=>e("h4",null,"一个简单的GET请求",-1)),U=["textContent"],I=r(()=>e("h4",null,"一个简单的POST请求",-1)),F=["textContent"],V=r(()=>e("h4",null,"GET请求与POST请求的区别和使用情况",-1)),z=r(()=>e("section",{id:"ajax_about_axios"},[e("h3",null,"Axios请求对象"),l(" 基于XMLHttpRequest对象封装。"),e("br"),l(" 详细使用："),e("a",{target:"_blank",href:"http://www.axios-js.com/zh-cn/docs/"},"axios中文网")],-1)),K={id:"ajax_about_fetch"},W=r(()=>e("h3",null,[l("fetch请求（"),e("mark",null,"使用时注意浏览器兼容性"),l("）")],-1)),Q=r(()=>e("br",null,null,-1)),Y=r(()=>e("br",null,null,-1)),Z=r(()=>e("br",null,null,-1)),$=r(()=>e("br",null,null,-1)),ee=r(()=>e("h4",null,"fetch请求的参数",-1)),te=["innerHTML"],oe=r(()=>e("h4",null,"fetch请求的响应对象：Response",-1)),re=["innerHTML"],se=r(()=>e("h4",null,"一个简单的GET请求",-1)),ne=["textContent"],le=r(()=>e("h4",null,"一个简单的POST请求",-1)),ae=["textContent"],de=r(()=>e("h4",null,"fetch拦截器封装",-1)),pe=["textContent"],ie=r(()=>e("h4",null,"fetch实现请求中断（或请求超时）",-1)),ce=["textContent"],ue=r(()=>e("h4",null,"fetch实现响应进度监控",-1)),he=["textContent"],_e={id:"ajax_about_sethead"},ye=r(()=>e("h3",null,"常用的请求头设置",-1)),be=["innerHTML"],me=r(()=>e("h4",null,"Content-Type的类型",-1)),fe=["innerHTML"],xe={id:"ajax_about_method"},Te=r(()=>e("h3",null,"常用的请求方法",-1)),ge=["innerHTML"],we=w({__name:"AjaxAbout",setup(i){const _=[{property:"readyState",desc:`存有的XMLHttpRequest的状态从0到4发生变化。<br/>
    0: 请求未初始化<br/>
    1: 服务器连接已建立<br/>
    2: 请求已接收<br/>
    3: 请求处理中<br/>
    4: 请求已完成，且响应已就绪<br/>`,readonly:!0},{property:"status",desc:"将状态返回为数字。(例如：'Not Found'为 404，'OK'为 200)",readonly:!0},{property:"statusText",desc:"以字符串形式返回状态。(例如：'Not Found'，'OK')",readonly:!0},{property:"responseType",desc:`响应类型。可以设置的值有：<ol style="margin: 0">
        <li>"": 同text。</li>
        <li>"text": 字符串类型。</li>
        <li>"json": JSON格式数据。</li>
        <li>"blob": 二进制数据的blob对象。</li>
        <li>"arraybuffer": 二进制数据的arraybuffer对象。</li>
        <li>"document": HTML文本。</li>
      </ol>`},{property:"response",desc:"以responseType形式返回响应。",readonly:!0},{property:"responseText",desc:"以文本形式返回响应。",readonly:!0},{property:"responseXML",desc:"以XML形式返回响应。",readonly:!0},{property:"upload",desc:`返回一个上传的对象，该对象可以使用的事件有：
    <ol style="margin: 0">
      <li>loadstart: 上传开始触发</li>
      <li>progress: 进度监控</li>
      <li>abort: 上传操作终止触发</li>
      <li>error: 上传错误，失败触发</li>
      <li>timeout: 请求超时触发</li>
      <li>loadend: 上传结束触发</li>
    </ol>`,readonly:!0},{property:"timeout",desc:"设置请求超时时间。"},{property:"withCredentials",desc:"请求是否携带cookies，true(默认): 携带，false: 不携带"},{property:"abort()",desc:"取消当前请求。"},{property:"open(method, URL, async)",desc:`规定请求的类型、URL以及是否异步处理请求。<br/>
    method: 请求的类型；GET或POST等。
    url: 文件在服务器上的位置。
    async: true(异步)或false(同步),当值为false时，请求将同步执行，此时的onreadystatechange函数将不在需要。`},{property:"setRequestHeader(header,value)",desc:`向请求添加HTTP头信息。<br/>
    header: 规定头的名称。<br/>
    value: 规定头的值。<br/>`},{property:"send(body?)",desc:`将请求发送到服务器。仅当method为POST时有body参数，
    此时需要设置请求头：setRequestHeader('Content-type', 'application/x-www-form-urlencoded')`},{property:"overrideMimeType()",desc:"重写服务器返回的MIME类型。"},{property:"getResponseHeader(headTitle)",desc:"返回指定响应头的内容（以字符串形式）"},{property:"getAllResponseHeader()",desc:"以字符串形式返回所有以CRLE分割的响应标头"}],y=[{property:"progress",desc:`<pre style="margin:0">使用:
xhr.addEventListener('progress',(e)=>{
  e.loaded;// 已经接收的数据量
  e.total;// 响应数据总量
})
或：xhr.onprogress = (e)=>{}</pre>`},{property:"readystatechange",desc:"每当readyState的属性改变时触发。"},{property:"abort",desc:"当请求被终止时触发"},{property:"error",desc:"当请求失败后触发"},{property:"load",desc:"当请求成功后触发"},{property:"abortstart",desc:"当请求开始时触发"},{property:"loadend",desc:"当请求结束时（成功或失败）触发，在load/error之后。"},{property:"timeout",desc:"当请求超时时触发"}],b=[{get:"get请求可被缓存。",post:"post请求不会被缓存。"},{get:"get请求会保留在浏览器历史记录中。",post:"post请求不会保留在浏览器历史记录中。"},{get:"get请求可被收藏为书签。",post:"post请求不能被收藏为书签。"},{get:"get请求有长度限制。",post:"post请求对数据长度没有要求。"},{get:"get请求不应在处理敏感数据时使用。"},{get:"get请求只应当用于取回数据。"}],m=[{property:"url",desc:"发送网络请求的地址。"},{property:"options",desc:`发送请求的参数配置。可配置的参数有：<br/>
    <ol style="margin: 0">
      <li>body: http请求参数。</li>
      <li>mode: 指定请求模式。
        <ol style="margin: 0">
          <li>cros(默认): 允许跨域</li>
          <li>same-origin: 只允许同源请求</li>
          <li>no-cros: 只限于get、post和head请求方式，并且只能使用有限的几个简单标头。</li>
        </ol>
      </li>
      <li>cache: 用户指定缓存。</li>
      <li> method: 请求方法。默认为GET。</li>
      <li>signal: 用于取消fetch。</li>
      <li>headers: 设置http请求头。</li>
      <li>keepalive: 用于页面卸载时，告诉浏览器在后台保持连接，继续发送数据。</li>
      <li>credentials: cookie设置。
        <ol style="margin: 0">
          <li>omit(默认): 不携带cookie。</li>
          <li>same-origin: 只同源请求携带cookie。</li>
          <li>include: 始终携带cookie。</li>
        </ol>
      </li>
    </ol>
    `}],f=[{property:"body",desc:`body会返回一个ReadableStream对象，供用户操作，可以用来分块读取内容，
    显示下载的进度就是其中的一种。`},{property:"bodyUsed",desc:"返回布尔值。表示"},{property:"headers",desc:"响应头信息。"},{property:"ok",desc:"返回布尔值。如果状态码以2开头，则为true，否则为false。"},{property:"redirected",desc:"返回布尔值，表示是否发生过重定向。"},{property:"status",desc:"http状态码，范围在100-599之间。"},{property:"statusText",desc:"服务器返回状态的文字描述。"},{property:"type",desc:"返回请求类型。"},{property:"url",desc:"响应的请求地址。"},{property:"text()",desc:"得到文本数据。"},{property:"json()",desc:"得到JSON对象"},{property:"blob()",desc:"得到二级制Blob对象。"},{property:"formData()",desc:"得到FormData表单对象。"},{property:"arrayBuffer()",desc:"得到二进制ArrayBuffer对象。"},{property:"clone()",desc:"克隆response副本对象,实现多次读取。response返回的stream对象只能读取一次，这意为着上面5种方法只能使用一个。"}],x=[{property:"Accent",desc:"指定客户端接受那些类型的数据，如HTML、JSON、XML等。"},{property:"Content-Type",desc:"设置MIME类型，指明报文主体部分内容属于何种类型，如html,json等。"},{property:"Cookie",desc:"设置cookies信息。"}],T=[{property:"text/html",desc:"HTML格式"},{property:"text/plain",desc:"纯文本格式"},{property:"text/xml",desc:"XML格式"},{property:"image/gif",desc:"gif图片格式"},{property:"image/jpeg",desc:"jpg图片格式"},{property:"image/png",desc:"png图片格式"},{property:"application/hxtml+xml",desc:"XHTML格式"},{property:"application/xml",desc:"XML数据格式"},{property:"application/atom+xml",desc:"Atom XML聚合格式"},{property:"application/json",desc:"JSON数据格式"},{property:"application/pdf",desc:"pdf格式"},{property:"application/msword",desc:"Word文档格式"},{property:"application/octet-stream",desc:"二进制数据流（如常见的文件下载）"},{property:"application/x-www-form-urlencoded",desc:"表单提交中默认的encType"},{property:"application/form-data",desc:"在表单中文件上传时，就需要使用该格式"}],g=[{property:"GET",desc:"该请求方法用于请求指定的资源。"},{property:"POST",desc:"该请求方法用于向指定资源提交数据。"},{property:"PUT",desc:"该请求方法用于创建或完整的更新指定的资源。由于PUT请求是幂等的，多次执行相同的PUT请求应当产生相同的结果。"},{property:"DELETE",desc:"该请求方法用于删除指定的资源。"},{property:"HEAD",desc:"该请求方法与GET类似，只是在服务器响应中返回HTTP头部，而返回实际的数据。这用于检查资源的元数据。"},{property:"OPTIONS",desc:"用于获取指定资源所支持的通信选项。这可以用于CORS检查，通常由浏览器自主发出该类型的请求。"}];return(Le,Me)=>{const n=c("el-table-column"),d=c("el-table");return h(),u("div",C,[S,l(" AJAX是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。 "),e("section",R,[k,l(" XMLHttpRequest是AJAX的基础。"),A,l(" XMLHttpRequest对象可以在不向服务器提交整个页面的情况下，实现局部更新网页。"),X,l(" XMLHttpRequest对象用于客户端与服务器只之间的异步通信。"),E,O,t(p,null,{default:o(()=>[l(a("const xhr = new XMLHttpRequest()"),1)]),_:1}),P,t(d,{data:_,border:""},{default:o(()=>[t(n,{"min-width":"200"},{header:o(()=>[l(" 属性或方法 ")]),default:o(s=>[e("div",j,[l(a(s.row.property)+" ",1),s.row.readonly?(h(),u("span",q,"(只读)")):H("",!0)])]),_:1}),t(n,{label:"描述","min-width":"300"},{default:o(s=>[e("div",{style:{"word-break":"auto-phrase"},innerHTML:s.row.desc},null,8,D)]),_:1})]),_:1}),N,t(d,{data:y,border:""},{default:o(()=>[t(n,{"min-width":"200"},{header:o(()=>[l(" 事件名 ")]),default:o(s=>[e("div",G,a(s.row.property),1)]),_:1}),t(n,{label:"描述","min-width":"300"},{default:o(s=>[e("div",{style:{"word-break":"auto-phrase"},innerHTML:s.row.desc},null,8,B)]),_:1})]),_:1}),J,t(p,null,{default:o(()=>[e("div",{textContent:a(`xhr.open('GET', url, true);
xhr.send();`)},null,8,U)]),_:1}),I,t(p,null,{default:o(()=>[e("div",{textContent:a(`xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.send(JSON.Stringify({id: 1, price: 100 }));`)},null,8,F)]),_:1}),V,t(d,{data:b,border:""},{default:o(()=>[t(n,{"min-width":"200",label:"GET",prop:"get"}),t(n,{label:"POST","min-width":"200",prop:"post"})]),_:1})]),z,e("section",K,[W,l(" fetch请求相对于XMLHttpRequest请求对象更简单。"),Q,l(" fetch()是一个全局的方法。"),Y,l(" fetch()会返回一个Promise。"),Z,$,ee,t(d,{data:m,border:""},{default:o(()=>[t(n,{"min-width":"100",label:"参数",prop:"property"}),t(n,{label:"描述","min-width":"300"},{default:o(s=>[e("div",{style:{"word-break":"auto-phrase"},innerHTML:s.row.desc},null,8,te)]),_:1})]),_:1}),oe,t(d,{data:f,border:""},{default:o(()=>[t(n,{"min-width":"100",label:"属性",prop:"property"}),t(n,{label:"描述","min-width":"300"},{default:o(s=>[e("div",{style:{"word-break":"auto-phrase"},innerHTML:s.row.desc},null,8,re)]),_:1})]),_:1}),se,t(p,null,{default:o(()=>[e("div",{textContent:a(`const params = new URLSearchParams(); // 注意URLSearchParams兼容性
params.append('name', 'zhangsan');
params.append('age', '23');
fetch('xxx?' + params, {
  method: 'GET'
}).then(response => {
  console.log(response)
});`)},null,8,ne)]),_:1}),le,t(p,null,{default:o(()=>[e("div",{textContent:a(`fetch('xxx', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}).then(response => {
  console.log(response)
});`)},null,8,ae)]),_:1}),de,t(p,null,{default:o(()=>[e("div",{textContent:a(`cosnt myFetch = (function(fetchFunc){
  return (url, options) => {
    // 这里拦截请求
    console.log(url, options)
    if ('请求不通过') {
      return new Promise(()=>{
        throw '请求不通过'
      });
    }
    return fetchFunc(url, options)
    .then((response)=>{
      // 这里做响应拦截
      if(response.ok == false){
        aleart('请求失败')
      }
      return response;
    })
    .catch(error => {
      error;
    })
  }
})(fetch)`)},null,8,pe)]),_:1}),ie,l(" fetch请求实现中断（或请求超时），需要使用AbortController来完成。 "),t(p,null,{default:o(()=>[e("div",{textContent:a(`const controller = new AbortController();
const signal = controller.signal;
fetch('xxxurl', {
  ...,
  signal: signal,
})
// 中断请求
controller.abort();`)},null,8,ce)]),_:1}),ue,t(p,null,{default:o(()=>[e("div",{textContent:a(`const resp = await fetch(url, opetions);
// 响应的总量
const respTotal = resp.headers.get('content-length');
// 获取到响应体的读取器
const reader = resp.body.getReader();
let readed = 0;
// 拼接保存每次读取的部分；文档流只能读取一次，这里被读取器读了，每次读后需手动拼接成完整的文档。
const decoder = new TextDecoder();
// 响应的内容
let respBody = '';
// 响应的进度
let progress = 0;
while(1){
  // done: 当前响应读取后是否完成。
  // value: 每次读取的数据，是一个数组。
  const { done, value } = await reader.read(); 
  readed += value.length;
  // 响应的进度
  progress = readed / resptotal + '%';
  // 每次读取后拼接到respBoby上
  respBody += decoder.decode(value);
  if(done){
    break;
    resolve(respBody)
  }
}
`)},null,8,he)]),_:1})]),e("section",_e,[ye,t(d,{data:x,border:""},{default:o(()=>[t(n,{"min-width":"100",label:"参数",prop:"property"}),t(n,{label:"描述","min-width":"300"},{default:o(s=>[e("div",{style:{"word-break":"auto-phrase"},innerHTML:s.row.desc},null,8,be)]),_:1})]),_:1}),me,t(d,{data:T,border:""},{default:o(()=>[t(n,{"min-width":"150",label:"值",prop:"property"}),t(n,{label:"描述","min-width":"300"},{default:o(s=>[e("div",{style:{"word-break":"auto-phrase"},innerHTML:s.row.desc},null,8,fe)]),_:1})]),_:1})]),e("section",xe,[Te,t(d,{data:g,border:""},{default:o(()=>[t(n,{"min-width":"100",label:"方法名",prop:"property"}),t(n,{label:"描述","min-width":"300"},{default:o(s=>[e("div",{style:{"word-break":"auto-phrase"},innerHTML:s.row.desc},null,8,ge)]),_:1})]),_:1})])])}}});const Ce=v(we,[["__scopeId","data-v-13b157fa"]]);export{Ce as default};
