import Orbiton, { Component } from 'orbiton'
import * as styles from './styles/Nav.module.scss'
import GithubLogo from '../../../static/Octocat.jpg'
import Logo from '../../../static/logo.svg'


export default class NavBar extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  render() {
    return (
      <nav className={styles.navbar}>
        <div className={styles.menuicon}>
          <img src="/menu.svg" alt="menu" />
        </div>
        <div className={styles.logo}>
          <a href="/" >
            <img src={Logo} className={styles.navlogos} alt="logo" />
          </a>
        </div>
        <div className={styles.sideflex}>
          <div className={styles.search}>
            <input type="text" placeholder="Search..." name="search" id="search" />
          </div>
          <div>
            <a href="https://github.com/Orbitonjs/orbiton" target="_blank" rel="noopener noreferrer">
              <img src={GithubLogo} className={styles.navlogos} alt="git-octocal" /></a>
          </div>
        </div>
      </nav>
    )
  }
}
