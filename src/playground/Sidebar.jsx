import Orbiton, { Component } from "orbiton";
import * as styles from "./styles/Sidebar.module.scss"

export class Sidebar extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      popupOn: false,
      fileName: ""
    }
    this.setPop = this.setPop.bind(this)
    this.onChange = this.onChange.bind(this)
    this.create = this.create.bind(this)
  }
  setPop() {
    this.updateState({
      popupOn: !this.state.popupOn
    })
  }
  onChange(e) {
    const { value } = e.target
    this.updateState({
      fileName: value
    })
  }
  create() {
    this.props.addFile(this.state.fileName)
    this.setPop()
  }
  render() {
    const { addFile } = this.props
    return (
      <div className={styles.menu}>
        <span className="material-icons" onClick={this.setPop} title="New File">note_add</span>
        <span className="material-icons" title="Console">terminal</span>
        <a href="/learn" className="material-icons" title="Docs">auto_stories</a>
        <span className="material-icons" title="Help">help</span>
        <a href="/" className="material-icons" title="Homepage">home</a>
        {
          this.state.popupOn ? <div className={styles.addfilecover}>
            <div className={styles.addfile}>
              <div>
                <p>Enter filename:</p>
                <input onChange={this.onChange} name="filename" type="text" value={this.state.fileName} />
              </div>
              <br />
              <div className={styles.buttons}>
                <button onClick={this.create}>Add File</button>
                <button onClick={this.setPop} className={styles.cancel}>Cancel</button>
              </div>
            </div>
          </div> : ""
        }

      </div>
    )
  }
}
