import Orbiton, { Component } from 'orbiton'
import * as styles from './styles/Nav.module.scss'
import GithubLogo from '../../../static/Octocat.jpg'
import Logo from '../../../static/logo.svg'
import { MenuIcon, Search } from '../shared/Icons.jsx'

export default class NavBar extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  render() {
    return (
      <nav className={styles.navbar}>
        <div ClassName={styles.importantNotification} >This Documentation is still in development mode so your won't find the full information here</div>
        <div className={styles.flex}>
          <div className={styles.menuicon}>
            <MenuIcon />
          </div>
          <div className={styles.logo}>
            <a href="/" >
              <img src={Logo} className={styles.navlogos} alt="logo" />
            </a>
          </div>
          <div className={styles.sideflex}>
            <SearchBar />
            <div>
              <a href="https://github.com/Orbitonjs/orbiton" target="_blank" rel="noopener noreferrer">
                <img src={GithubLogo} className={styles.navlogos} alt="git-octocal" /></a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

function SearchBar(props) {
  return (
    <div className={styles.search}>
      <div>
        <span>
          <Search />
        </span>
        <input type="text" placeholder="Search..." id="searchbar" />
      </div>
    </div>
  )
}
