import Orbiton, { Component } from 'orbiton'
import * as styles from "./styles/Header.module.scss"
import Logo from '../../../static/background.svg'

export default class Header extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div>
        <header className={styles.header}>
          <div className={styles.headerlogo}>
            <img className={styles.rotatinglogo} src={Logo} alt="log" />
            <h1>ORBITON JS</h1>
            <p>A minimalistic Javascript library for creating Browser UI's.</p>
          </div>
        </header>
      </div>
    )
  }
}
