import Orbiton, { Component } from "orbiton"
import CodeMirror from "codemirror"
import "codemirror/mode/jsx/jsx"
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material-darker.css"
import "./styles/globals.scss"
import "codemirror/addon/scroll/simplescrollbars"
import "codemirror/addon/scroll/simplescrollbars.css"
import "codemirror/addon/hint/javascript-hint"
import { createEditor } from "./utils/createEditor"
//mport jsxplugin from "@babel/plugin-syntax-jsx"


//import * as Babel from "@babel/standalone"



export class TextEditor extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      code: ""
    }
  }
  async Mounted() {
    const root = document.getElementById("text-editor")
    const editor = createEditor(root, this.props.code)
    const save = () => this.props.saveFile(this.props.activeFile, editor.getValue())
    editor.setOption("extraKeys", { 'Ctrl-S': save, 'Cmd-S': save });
  }
  render() {
    return (
      <section>
        <div style={{
          height: "600px",
          width: "100%",
        }} id="text-editor"></div>
      </section>
    )
  }
}
