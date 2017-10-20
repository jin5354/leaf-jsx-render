// hyperscript -> virtual DOM

function h(nodeName, attributes, ...children) {
  return {nodeName, attributes, children}
}

export default h
