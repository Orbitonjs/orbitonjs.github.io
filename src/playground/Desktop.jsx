import Orbiton, { Component } from "orbiton";
import * as styles from "./styles/Desktop.module.scss"
import { TextEditor } from "./TextEditor.jsx";
import { Browser } from "./Browser.jsx"
import { FILES } from "./utils/files";
import * as Babel from "@babel/standalone"
import JSXPlugin from "@babel/plugin-syntax-jsx"
import { Sidebar } from "./Sidebar.jsx"



export class Desktop extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      files: FILES,
      activeFile: 1,
    }
    this.saveFile = this.saveFile.bind(this)
    this.registerPlugins = this.registerPlugins.bind(this)
    this.transpile = this.transpile.bind(this)
    this.executeCode = this.executeCode.bind(this)
    this.addFile = this.addFile.bind(this)
  }

  addFile(fileName) {
    const files = this.state.files
    files.push({
      name: fileName,
      id: this.state.files.length + 1,
      content: ""
    })
    this.updateState({
      files
    })
  }

  saveFile(id, content) {
    let files = this.state.files
    for (const file of files) {
      if (file.id === id) {
        file.content = content
      }
    }
    this.updateState({
      files
    })

    this.executeCode()
  }

  // Executing code
  executeCode() {
    const transpiledFiles = this.state.files.map(({ name, content }) => `
      {
        name: "${name}",
        func: function (require, exports) {
          ${this.transpile(content)}
        },
        exports: {}
      }
    `);
    const code = `
      const modules = [${transpiledFiles.join(',')}];
      const require = function(file) {
        const module = modules.find(({ name }) => name === file);

        if (!module) {
          throw new Error('Cannot find "' + file + '" file.');
        }
        module.func(require, module.exports);
        return module.exports;
      };
      modules[1].func(require, modules[1].exports);
`;
    try {
      const fn = new Function(code)
      fn()
    } catch (error) {
      console.log(error);
    }
  }

  //transpile
  transpile(content) {
    const babelOption = {
      presets: [
        [
          "env",
          {
            targets: {
              node: '12'
            }
          }
        ],
      ],
      plugins: [
        JSXPlugin,
        "orbiton-jsx"
      ]
    }
    const { code } = Babel.transform(content, babelOption)
    return code
  }

  // Mounted
  async Mounted() {
    window.process = {
      env: {}
    }
    window.Orbiton = Orbiton
    await this.registerPlugins()
    this.executeCode()
  }


  // Register babel plugins
  async registerPlugins() {
    const OrbitonPlugin = await import("babel-plugin-orbiton-jsx")
    Babel.registerPlugin("orbiton-jsx", OrbitonPlugin)
  }
  render() {
    return (
      <section className={styles.workspace}>
        <nav className={styles.nav}>
          <Sidebar
            addFile={this.addFile}
          />
        </nav>
        <div>
          <Editor
            files={this.state.files}
            activeFile={this.state.activeFile}
            saveFile={this.saveFile}
          />
        </div>
        <div>
          <Browser />
        </div>
      </section>
    )
  }
}

class Editor extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      code: "",
      activeFile: 1
    }
    this.setActiveFile = this.setActiveFile.bind(this)
  }
  setActiveFile(id) {
    this.updateState({
      code: this.props.files[id].content,
      activeFile: id
    })
  }
  Mounted() {
    for (const file of this.props.files) {
      if (file.id === this.state.activeFile) {
        this.updateState({
          code: file.content
        })
      }
    }
  }
  render() {
    return (
      <div>
        <div className={styles.files}>
          {
            this.props.files.map((file) => {
              return (
                <TextFile
                  active={this.state.activeFile === file.id}
                  file={file}
                  setActive={this.setActiveFile}
                />
              )
            })
          }
        </div>
        <div>
          <TextEditor
            code={this.state.code}
            saveFile={this.props.saveFile}
            activeFile={this.state.activeFile}
          />
        </div>
      </div>
    )
  }
}

class TextFile extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <span
        className={this.props.active ? styles.active : ""}
        onClick={() => {
          this.props.setActive(this.props.file.id)
        }}>{this.props.file.name}</span>
    )
  }
}
