import Orbiton, { Component } from 'orbiton'
import './styles/Nav.scss'
import GithubLogo from '../../../static/Octocat.jpg'
import Logo from '../../../static/logo.svg'


export default class NavBar extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  render() {
    return (
      <nav className="navbar">
        <div className="menuicon">
          <img src="/menu.svg" alt="menu" />
        </div>
        <div className="logo">
          <img src={Logo} className="navlogos" alt="logo" />
        </div>
        <div className="sideflex">
          <div className="search">
            <input type="text" placeholder="Search..." name="search" id="search" />
          </div>
          <div>
            <a href="https://github.com/Orbitonjs/orbiton" target="_blank" rel="noopener noreferrer">
              <img src={GithubLogo} className="navlogos" alt="git-octocal" /></a>
          </div>
        </div>
      </nav>
    )
  }
}
