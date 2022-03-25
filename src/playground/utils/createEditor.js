import CodeMirror from "codemirror"

/**
* @param {HTMLElement} el -
* @param {string} code -
*/
export function createEditor(el, code) {
  if (el.childNodes.length > 0) {
    el.childNodes.forEach((node, _) => {
      node.remove()
    })
  }
  return CodeMirror(el, {
    value: code || '',
    mode: 'jsx',
    tabSize: 2,
    scrollbarStyle: "simple",
    lineNumbers: true,
    autofocus: true,
    foldGutter: false,
    showHint: true,
    theme: "material-darker",
    gutters: [],
    styleSelectedText: true,
  })
}
