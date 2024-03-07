const canvasMenu = [
  {
    title: '创建canvas画布',
    path: 'create',
    anchors: [
      { title: '创建canvas', anchor: '#draw-create-title' },
      { title: '获取2d上下文', anchor: '#draw-create-get2d' },
      { title: 'getContext的值', anchor: '#draw-create-ctxType' },
    ]
  },
  {
    title: '绘制图形',
    path: 'drawgraph',
    menuItem: [
      {
        title: '描边和填充',
        path: 'drawgraphfill',
        anchors: [
          { title: '描边和填充', anchor: '#draw-graphfill-title' },
          { title: '渐变描边和填充', anchor: '#draw-graphfill-gradient' },
        ]
      }, {
        title: '画笔与路径',
        path: 'drawgraphpath',
        anchors: [
          { title: '画笔与路径', anchor: '#draw-graphpath-title' },
          { title: '路径的开启与闭合', anchor: '#draw-graphpath-begin' },
          { title: '画笔位置及连线', anchor: '#draw-graphpath-linepen' },
          { title: '线帽', anchor: '#draw-graphpath-linecap' },
          { title: '线条连接', anchor: '#draw-graphpath-linejoin' },
          { title: '绘制圆弧', anchor: '#draw-graphpath-arc' },
          { title: '绘制曲线', anchor: '#draw-graphpath-curve' },
        ]
      }
    ]
  },
  {
    title: '绘制文字',
    path: 'drawtext',
    anchors: [
      { title: '绘制文字', anchor: '#draw-text-title' },
      { title: '文字字体', anchor: '#draw-text-font' },
      { title: '文字颜色', anchor: '#draw-text-color' },
      { title: '测量文字宽度', anchor: '#draw-text-measure' },
      { title: '文字基线', anchor: '#draw-text-baseline' },
      { title: '文字对齐方式', anchor: '#draw-text-align' },
      { title: '文字绘制方向', anchor: '#draw-text-direction' },
    ]
  },
  {
    title: '绘制图片',
    path: 'drawimg',
    anchors: [
      { title: '绘制图片', anchor: '#draw-img-title' },
      { title: '绘制image对象图片', anchor: '#draw-img-img' },
      { title: '绘制canvas对象图片', anchor: '#draw-img-canvas' },
    ]
  },
  {
    title: '檫除和清空画布',
    path: 'clearcanvas',
    anchors: [
      { title: '檫除和清空画布', anchor: '#clear-canvas-title' },
      { title: 'clearRect', anchor: '#clear-canvas-clearrect' },
      { title: '重置画布宽高', anchor: '#clear-canvas-restwh' },
    ]
  },
  {
    title: '阴影',
    path: 'shadow',
    anchors: [
      { title: '阴影', anchor: '#canvas-shadow-title' },
    ]
  },
  {
    title: '图形控制',
    path: 'canvas_control',
    menuItem: [
      {
        title: '合成(图层控制)',
        path: 'canvas_compose',
        anchors: [
          { title: '合成(图层控制)', anchor: '#canvas_compose-title' },
          { title: 'globalAlpha:透明度', anchor: '#canvas_compose-alpha' },
          { title: 'globalCompositeOperation:合成', anchor: '#canvas_compose-compose' },
        ]
      }, {
        title: '变形',
        path: 'canvas_morph',
        anchors: [
          { title: '变形', anchor: '#canvas-morph-title' },
          { title: '移动', anchor: '#canvas-morph-translate' },
          { title: '旋转', anchor: '#canvas-morph-rotate' },
          { title: '缩放', anchor: '#canvas-morph-scale' },
          { title: '混合使用', anchor: '#canvas-morph-mix' },
        ]
      }
    ]
  },
  {
    title: '状态',
    path: 'canvas_state_cache',
    anchors: [
      { title: '状态的保存与取出', anchor: '#canvas-statecache-title' },
      { title: '可以进行保存的值', anchor: '#canvas-statecache-savestyle' },
    ]
  },
  {
    title: 'canvas toDataURL',
    path: 'todataurl',
    anchors: [
      { title: 'canvas toDataRUL', anchor: '#canvas-todataurl-title' },
    ]
  }
  , {
    title: '像素处理',
    path: 'pixelprocess',
    anchors: [
      { title: '像素处理', anchor: '#canvas-pixelprocess-title' },
      { title: '创建像素数据', anchor: '#canvas-pixelprocess-create' },
      { title: '将像素数据放入画布', anchor: '#canvas-pixelprocess-put' },
      { title: '从canvas中获取像素', anchor: '#canvas-pixelprocess-get' },
    ]
  }
  , {
    title: 'canvas 动画',
    path: 'animation',
    anchors: [
      { title: 'canvas动画', anchor: '#canvas-animation-title' },
    ]
  }
  , {
    title: '案列',
    path: 'caselist',
    anchors: [
      { title: '动态背景', anchor: '#canvas-caselist-bg' },
      { title: '粒子效果', anchor: '#canvas-caselist-pixe' },
      { title: '贪吃蛇小游戏', anchor: '#canvas-caselist-greedy_snake' },
      {
        title: '案例工具函数',
        anchor: '#canvas-caselist-utilfunc',
        subAnchors: [
          { title: '获取两个整数之间的随机数', anchor: '#canvas-caselist-utilfunc1' },
          { title: '稀释像素点', anchor: '#canvas-caselist-utilfunc2' },
          { title: '获取一段文字的宽高比', anchor: '#canvas-caselist-utilfunc3' },
          { title: '贪吃蛇的键盘事件', anchor: '#canvas-caselist-utilfunc4' },
        ]
      },
      { 
        title: '案列实现的类',
        anchor: '#canvas-caselist-achieveclass',
        subAnchors: [
          { title: '画布上生成点的类', anchor: '#canvas-caselist-class1' },
          { title: '画动态背景的类', anchor: '#canvas-caselist-class2' },
          { title: '画粒子动画的类', anchor: '#canvas-caselist-class3' },
          { title: '贪吃蛇食物类', anchor: '#canvas-caselist-class4' },
          { title: '蛇的类', anchor: '#canvas-caselist-class5' },
          { title: '贪吃蛇游戏的类', anchor: '#canvas-caselist-class6' },
        ]
       },

    ]
  }

]
const jsnodeMenu = [
  {
    title: '介绍',
    path: 'introduce',
  },
  {
    title: '正则相关',
    path: 'regular',
    anchors: [
      {title: '正则字符表', anchor: '#jsnode_reg_regtable'},
      {title: '正则的使用', anchor: '#jsnode_reg_reguse'},
      {title: '可与正则连用的字符串方法', anchor: '#jsnode_reg_stringreg'},
    ]
  },
  {
    title: 'Array相关',
    path: 'arr_about',
  },
  {
    title: 'Object相关',
    path: 'object_about',
  },
  {
    title: 'Math相关',
    path: 'math_about',
  },
  {
    title: 'Number相关',
    path: 'number_about',
  },
  {
    title: 'Stirng相关',
    path: 'string_about',
    anchors: [
      {title: '比较常用的String的属性或方法', anchor: '#str_about_motehds'},
      {title: '生成带html标签的字符串方法', anchor: '#str_about_strhtmltag'},
    ]
  },
  {
    title: 'Date相关',
    path: 'date_about',
  },
  {
    title: '浏览器相关',
    path: 'browser_about',
    anchors: [
      {title: 'Window相关', anchor: '#browser_about_window'},
      {title: 'Window事件相关', anchor: '#browser_about_windowevent'},
      {title: 'Screen相关', anchor: '#browser_about_screen'},
      {title: 'Location相关', anchor: '#browser_about_location'},
      {title: 'History相关', anchor: '#browser_about_history'},
      {title: 'Navigator相关', anchor: '#browser_about_navigator'},
    ]
  },
  {
    title: '事件相关',
    path: 'event_about',
    anchors: [
      {title: '事件对象', anchor: '#event_about_eventobj'},
      {title: '键盘事件', anchor: '#event_about_keyboard'},
      {title: '鼠标事件', anchor: '#event_about_mouse'},
      {title: 'Frame/Objec事件', anchor: '#event_about_frame'},
      {title: '剪粘板事件/对象', anchor: '#event_about_clipboard'},
      {title: '拖拽事件', anchor: '#event_about_drag'},
      {title: '多媒体事件', anchor: '#event_about_media'},
      {title: 'css动画事件', anchor: '#event_about_cssanimate'},
    ]
  },
  {
    title: 'Ajax相关',
    path: 'ajax_about',
    anchors: [
      {title: 'ajax简介', anchor: '#ajax_about_introduce'},
      {title: 'xhr', anchor: '#ajax_about_xhr'},
      {title: 'axios', anchor: '#ajax_about_axios'},
      {title: 'fetch', anchor: '#ajax_about_fetch'},
      {title: '请求头设置', anchor: '#ajax_about_sethead'},
      {title: '常用请求方法', anchor: '#ajax_about_method'},
    ]
  },
]
// 音乐播放器部分
import { 
Music,
Star,
VideoTwo,
Fm,
Like,
CodeComputer,
History,
ListAdd,
RecordDisc,
} from '@icon-park/vue-next';
import { shallowRef } from 'vue'; // 将动态组件注册为静态组件

interface IMenuItem {
  title: string;
  path: string;
  icon?: any;
}
interface IMenu {
  title: string;
  menuItem: IMenuItem[];
}
const musicMenu: IMenu[] = [
  {
    title: '在线音乐',
    menuItem: [
      {
        title: '推荐',
        path: 'music-recommend',
        icon: shallowRef(Star) ,
      },
      {
        title: '音乐馆',
        path: 'music-hall',
        icon: shallowRef(RecordDisc) ,
      },
      {
        title: '视频',
        path: 'music-video',
        icon: shallowRef(VideoTwo) ,
      },
      {
        title: '电台',
        path: 'music-radio-station',
        icon: shallowRef(Fm) ,
      },
    ]
  },
  {
    title: '我的音乐',
    menuItem: [
      {
        title: '我喜欢',
        path: 'music-like',
        icon: shallowRef(Like) ,
      },
      {
        title: '本地歌曲',
        path: 'music-local',
        icon: shallowRef(CodeComputer) ,
      },
      {
        title: '播放历史',
        path: 'music-history',
        icon: shallowRef(History) ,
      },
      {
        title: '下载歌曲',
        path: 'music-download',
        icon: shallowRef(Music) ,
      },
    ]
  },
  {
    title: '我的歌单',
    menuItem: [
      {
        title: '默认列表',
        path: 'music-sheet-default',
        icon: shallowRef(ListAdd) ,
      },
      {
        title: '新建歌单',
        path: 'music-sheet-create',
        icon: shallowRef(ListAdd) ,
      },
    ]
  },
  
]
export {
  canvasMenu,
  jsnodeMenu,
  musicMenu,
}