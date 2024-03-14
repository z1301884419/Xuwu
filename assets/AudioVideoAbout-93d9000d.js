import{d as y,j as l,c as u,a as e,q as o,l as t,p as m,b,v as s,o as h,_ as v}from"./index-a2eccc6b.js";const p=r=>(m("data-v-bed633ad"),r=r(),b(),r),T={class:"box"},A=p(()=>e("section",{id:"jsnode_media_html"},[e("h3",null,"音频/视频标签"),s(" 音频标签：<audio></audio> "),e("br"),s(" 视频标签：<video></video> "),e("br"),e("br"),s(" 若页面无需展示，可以使用js中的：new Audio() 和 new Video() 来获取到对应的操作对象。 ")],-1)),g={id:"jsnode_media_property"},w=p(()=>e("h3",null,"HTML 音频/视频属性",-1)),E=["innerHTML"],H={id:"jsnode_media_method"},f=p(()=>e("h3",null,"HTML 音频/视频方法",-1)),R=["innerHTML"],V={id:"jsnode_media_event"},N=p(()=>e("h3",null,"HTML 音频/视频事件",-1)),k=y({__name:"AudioVideoAbout",setup(r){const c=[{property:"autoplay",desc:"设置或返回是否在加载完成后随即播放音频/视频。布尔值"},{property:"preload",desc:`设置或返回音频/视频是否在页面加载后经行加载。
    <ol>
      <li>auto: 指示一旦页面加载，则开始加载音频/视频</li>
      <li>metadata: 指示当页面加载后仅加载音频/视频的元数据</li>
      <li>none: 指示页面加载后不应加载音频/视频</li>
    </ol>`},{property:"buffered",desc:`返回TimeRanges对象，TimeRanges对象表示用户的音频/视频缓冲范围，缓冲范围指的是已缓冲
    音频/视频的时间范围，如果用户在音频/视频中跳跃播放，会得到多个缓冲范围。其属性值：<br/>
    <ol>
      <li>length: 获得音频/视频中已缓存范围的数量</li>
      <li>start(index): 获得某个已缓冲范围的开始位置</li>
      <li>end(index): 获得某个已缓冲范围的结束位置</li>
      </ol>`},{property:"played",desc:`返回TimeRanges对象，表示用户已经播放或看到的音频/视频范围。已播放范围指的是被播放
    音频/视频的时间范围。如果用户在音频/视频中跳跃，则会获得多个播放范围。`},{property:"seekable",desc:`返回TimeRanges对象，表示音频/视频中用户可寻址的范围。可寻址范围指的是用户在音频/视频中
    可寻址（移动播放位置）的时间范围。对于非流视频，通常可以寻址到视频中的任何位置，及时其尚未完成缓冲。`},{property:"controls",desc:"设置或返回音频/视频是否显示控件。布尔值"},{property:"src",desc:"设置或返回音频/视频元素的当前来源。"},{property:"currentSrc",desc:"返回当前音频/视频的URL。readonly"},{property:"currentTime",desc:"设置或返回音频/视频中的当前播放位置。"},{property:"duration",desc:"返回当前音频/视频的长度（以秒计）。只读"},{property:"volume",desc:"设置或返回音频/视频的音量，number[0~1]"},{property:"muted",desc:"设置或返回音频/视频是否静音。布尔值"},{property:"ended",desc:"返回当前音频/视频的播放是否已结束。只读"},{property:"loop",desc:"设置或返回音频/视频是否应在结束时重新播放。"},{property:"paused",desc:"返回音频/视频是否暂停，只读，布尔值。"},{property:"playbackRate",desc:"设置或返回音频/视频播放的速度。"},{property:"mediaGroup",desc:"设置或返回音频/视频所属的媒体组合的名称。媒体组合允许两个或更多音频/视频元素保持同步。"},{property:"networkState",desc:`返回音频/视频的当前网络状态。只读，返回一个数字：
    <ol>
      <li>0: NETWORK_EMPTY - 音频/视频尚未初始化<li>
      <li>1: NETWORK_IDLE - 音频/视频是活动的且已选取资源，但并未使用网络<li>
      <li>2: NETWORK_LOADONG - 浏览器正在下载数据<li>
    </ol>`},{property:"readyState",desc:`返回音频/视频的当前就绪状态。只读，返回一个数字：
    <ol>
      <li>0: HAVE_NOTHING - 没有关于音频/视频是否就绪的信息</li>
      <li>1: HAVE_METADATA - 关于音频/视频就绪的元数据</li>
      <li>2: HAVE_CURRENT_DATA - 关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒</li>
      <li>3: HAVE_FUTURE_DATA - 当前及至少下一帧的数据是可用的</li>
      <li>4: HAVE_ENOUGH_DATA - 可用数据足以开始播放</li>
    </ol>`},{property:"seeking",desc:"返回用户是否正在音频/视频中进行查找。只读，布尔值。"},{property:"",desc:""},{property:"",desc:""}],n=[{property:"canPlayType(type)",desc:`检测浏览器是否能播放指定的音频/视频类型。<br/>
    参数type：<br/>
    <ol>
      <li>video/ogg</li>
      <li>video/mp4</li>
      <li>video/webm</li>
      <li>audio/ogg</li>
      <li>audio/mp4</li>
      <li>audio/mpeg</li>
    </ol>
    返回值："probably"(最有可能支持) | "maybe"(可能支持) | "" (空字符串，不支持)
  `},{property:"load()",desc:"重新加载音频/视频元素。"},{property:"play()",desc:"开始播放音频/视频。"},{property:"pause()",desc:"暂停当前播放的音频/视频。"}],_=[{property:"play",desc:"事件在视频/音频(audio/video)开始播放时触发。"},{property:"pause",desc:"事件在视频/音频(audio/video)暂停时触发。"},{property:"playing",desc:"事件在视频/音频(audio/video)暂停或缓冲后准备重新开始播放时触发。"},{property:"ended",desc:"事件在视频/音频(audio/video)播放结束时触发。"},{property:"abort",desc:"事件在视频/音频(audio/video)终止时触发"},{property:"canplay",desc:"事件在用户可以播放视频/音频(audio/video)时触发"},{property:"canplaythrough",desc:"事件在视频/音频(audio/video)可以正常播放且无需停顿和缓冲时触发"},{property:"emptied",desc:"事件当前播放列表为空时触发。"},{property:"error",desc:"事件在视频/音频(audio/video)数据加载期间发生错误时触发。"},{property:"loadedmetadata",desc:"事件在指定视频/音频(audio/video)的元数据加载后触发"},{property:"loadstart",desc:"事件在浏览器开始寻找指定视频/音频(audio/video)时触发"},{property:"progress",desc:"事件在浏览器加载指定的视频/音频(audio/video)时触发。"},{property:"durationchange",desc:"事件在视频/音频(audio/video)的时长变化时触发"},{property:"volumechange",desc:"事件在音量发生改变时触发。"},{property:"ratechange",desc:"事件在视频/音频(audio/video)的播放速度发生改变时触发。"},{property:"seeking",desc:"事件在用户开始重新定位视频/音频(audio/video)时触发。"},{property:"seeked",desc:"事件在用户重新定位视频/音频(audio/video)的播放位置后触发。"},{property:"timeupdate",desc:"事件在当前的播放位置发生改变时触发。"},{property:"waiting",desc:"事件在视频由于要播放下一帧而需要缓冲时触发。"},{property:"stalled",desc:"事件在浏览器获取媒体数据但媒体数据不可用时触发。"},{property:"suspend",desc:"事件在浏览器读取媒体数据中止时触发。"}];return(L,x)=>{const d=l("el-table-column"),i=l("el-table");return h(),u("div",T,[A,e("section",g,[w,o(i,{data:c,border:""},{default:t(()=>[o(d,{"min-width":"100",prop:"property",label:"属性"}),o(d,{"min-width":"300",label:"描述"},{default:t(a=>[e("div",{style:{"word-break":"auto-phrase"},innerHTML:a.row.desc},null,8,E)]),_:1})]),_:1})]),e("section",H,[f,o(i,{data:n,border:""},{default:t(()=>[o(d,{"min-width":"100",prop:"property",label:"方法名"}),o(d,{"min-width":"300",label:"描述"},{default:t(a=>[e("div",{style:{"word-break":"auto-phrase"},innerHTML:a.row.desc},null,8,R)]),_:1})]),_:1})]),e("section",V,[N,o(i,{data:_,border:""},{default:t(()=>[o(d,{"min-width":"100",prop:"property",label:"事件名"}),o(d,{"min-width":"300",prop:"desc",label:"描述"})]),_:1})])])}}});const M=v(k,[["__scopeId","data-v-bed633ad"]]);export{M as default};
