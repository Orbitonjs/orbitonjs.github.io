import Orbiton, { Component } from "orbiton";
import * as styles from "./styles/Sidebar.module.scss"

export class Sidebar extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    const { addFile } = this.props
    return (
      <div className={styles.menu}>
        <span className="material-icons" onClick={() => { addFile("hello.js") }} title="New File">note_add</span>
        <span className="material-icons" title="Console">terminal</span>
        <a href="/learn" className="material-icons" title="Docs">auto_stories</a>
        <span className="material-icons" title="Help">help</span>
      </div>
    )
  }
}
