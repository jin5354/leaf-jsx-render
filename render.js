function render(vnode) {

  // 对于纯文本，直接添加一个纯文本节点
  if(typeof vnode === 'string') {
    return document.createTextNode(vnode)
  }

  // 非纯文本，以 nodeName 为标签创建节点
  let node = document.createElement(vnode.nodeName)

  // 添加属性
  for (let name in Object(vnode.attributes)) {
    let value = vnode.attributes[name]

    if(name in node) {
      // props
      node[name] = value
    }else {
      // attributes
      node.setAttribute(name, vnode.attributes[name])
    }
  }

  // 递归添加子元素
  for(let i = 0; i < vnode.children.length; i++) {
    node.appendChild(render(vnode.children[i]))
  }

}

export default render
