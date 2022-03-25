import Orbiton, { Component } from "orbiton";
import * as styles from "./styles/Navbar.module.scss"

export class Navbar extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <nav className={styles.nav}>
        <div >
          ORBITON PLAYGROUND
        </div>
        <div className={styles.docsearch} id="docsearch"></div>
      </nav>
    )
  }
}
