export const operateObj = {
  color:[
    {
      title:'黑色',
      value:'black',
    },
    {
      title:'白色',
      value:'white',
    },
    {
      title:'红色',
      value:'red',
    },{
      title:'蓝色',
      value:'blue',
    },{
      title:'黄色',
      value:'yellow',
    },{
      title:'绿色',
      value:'green',
    },{
      title:'紫色',
      value:'purple',
    },{
      title:'橙色',
      value:'orange',
    },{
      title:'青色',
      value:'cyan',
    }],
  textType:[
    {
      title:'标题',
      value:'h',
    },{
      title:'副标题',
      value:'h2',
    },{
      title:'正文',
      value:'normal',
    },{
      title:'加粗',
      value:'bold',
    },{
      title:'加细',
      value:'light',
    }],
  textShape:[
    {
      title:'斜体',
      value:'italic',
    },{
      title:'下划线',
      value:'underline',
    }
  ]
}

/** 处理类名同类型的函数 */
export function mergeCalssName(parentClassName,className){
  if(!parentClassName) return className
  let newClassName = ''
  // css使用规定
  let index = className.lastIndexOf('-')
  let type = className.slice(0,index)
  parentClassName.split(' ').forEach((item)=>{
    if(item.indexOf(type) == -1) newClassName += " " + item
  })
  newClassName += " " + className
  return newClassName.trim()
}
  /** 合并相邻且类名一样的标签 */
export const mergeHtml = (function (){
  let node = document.createElement('span')
  function handle(rootHtml){
    node.innerHTML = rootHtml
    let prevClassList = [...node.children[0].classList].sort((a,b)=>a < b ? -1 : 1);
    
    for(let i=1;i<node.children.length;i++){
      // 如果上一个的类名与该个一样，合并这两个
      if(prevClassList.toString() == [...node.children[i].classList].sort((a,b)=>a < b ? -1 : 1).toString()){
        node.children[i-1].innerText = node.children[i-1].innerText + node.children[i].innerText
        node.removeChild(node.children[i])
        i--
      }else{
        // 如果类名不同则记录下来
        prevClassList = [...node.children[i].classList].sort((a,b)=>a < b ? -1 : 1)
      }
    }
    return node.innerHTML
  }
  return handle
})() 

  /** 删除两个结点间的所有结点(不包含两结点)
   * @param {*} startNode 
   * @param {*} endNode 
   */
export function rmdBetweenNode(startNode,endNode,firstStartNode){
  if(!startNode || !endNode || endNode==document.getElementById('vn-container')) return
  if(startNode.nextSibling == endNode){
    // 跳出递归的条件：找到了
    return
  }else{
    // 2.如果startNode没有下一个结点了，说明不在同一个父元素内;且endNode在外层
    if(!startNode.nextSibling){
      // 4.如果startNode已经找到document.getElementById('vn-container')了，说明startNode在外层
      if(startNode.parentNode == document.getElementById('vn-container')){
        rmdBetweenNode(firstStartNode,endNode.parentNode,firstStartNode)
      }
      // 3.
      rmdBetweenNode(startNode.parentNode,endNode,firstStartNode)
    }else{
      // 1.优先进入这里
      startNode.parentNode.removeChild(startNode.nextSibling)
      rmdBetweenNode(startNode,endNode,firstStartNode)
    }

  }
}
