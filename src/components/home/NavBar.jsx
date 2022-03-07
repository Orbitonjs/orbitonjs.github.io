import Orbiton, { Component } from "orbiton"
import { Github, SearchIcon, NightIcon, DayIcon, Docs, Code, Pencil, Book, Eye, Templates, MenuIcon } from "../shared/Icons.jsx"
import * as styles from "./styles/NavBar.module.scss"
import Logo from "../../../static/favicon.svg"


export default class NavBar extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  render() {
    return (
      <nav className={styles.navbar}>
        <DesktopNavBar toggleTheme={this.props.toggleTheme} />
      </nav>
    )
  }
}

export class DesktopNavBar extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  render() {
    return (
      <div className={styles.navitems}>
        <div className={styles.logo}>
          <a href="/" className={styles.ltext}>
            <img src={Logo} className={styles.imglogo} />
            <h2 className={styles.heading}>ORBITON JS</h2>
          </a>
        </div>
        <Menu />

        <div className={styles.side}>
          <div id="docsearch"></div>
          <Icons />
        </div>
      </div>
    )
  }
}
class Menu extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      dropDownOn: false
    }
  }

  render() {
    return (
      <div className={styles.menu}>
        <div className={styles.menugroup}>
          <div >
            <div className={`${styles.menuitem} ${styles.docsMenuItem}`} href="/">
              <span>Docs</span>
              <DocsDropDown />
            </div>
          </div>
          <div>
            <a className={styles.menuitem} href="/">Blog</a>
          </div>
          <div>
            <a className={styles.menuitem} href="/">About</a>
          </div>
        </div>
      </div>
    )
  }
}

class DocsDropDown extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  render() {
    return (
      <div className={styles.popup}>
        <hr className={styles.hr} />
        <a href="/docs/getting-started/quick-start" className={styles.popupitem}>
          <div className={styles.docsicon}>
            <Docs />
          </div>
          <div>
            <h4>Getting Started</h4>
          </div>
        </a>
        <hr className={styles.hr} />
        <a href="/learn/" className={styles.popupitem}>
          <div className={styles.docsicon}>
            <Pencil />
          </div>
          <div>
            <h4>Learn</h4>
          </div>
        </a>
        <hr className={styles.hr} />
        <div className={styles.popupitem}>
          <div className={styles.docsicon}>
            <Book />
          </div>
          <div>
            <h4>How To Guides</h4>
          </div>
        </div>
        <hr className={styles.hr} />
        <a href="/docs/api-reference" className={styles.popupitem}>
          <div className={styles.docsicon}>
            <Code />
          </div>
          <div>
            <h4>API Reference</h4>
          </div>
        </a>
        <hr className={styles.hr} />

      </div>
    )
  }
}

class Icons extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      dropDownOn: false,
      darkTheme: false
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.toggleTheme = this.toggleTheme.bind(this)
  }

  toggleDropdown() {
    this.updateState(
      {
        dropDownOn: !this.state.dropDownOn
      }
    )
  }
  Mounted() {
    if (localStorage.getItem("theme") === "dark") {
      this.updateState({
        darkTheme: true
      })
    }
  }

  toggleTheme() {
    document.body.toggleAttribute("dark-theme")
    localStorage.setItem("theme", this.state.darkTheme ? "light" : "dark")
    this.updateState({
      darkTheme: !this.state.darkTheme
    })
  }

  render() {
    return (
      <div className={styles.icons}>
        <a href="https://github.com/Orbitonjs/orbiton" target="_blank" className={styles.github}>
          <Github />
        </a>
        <div onClick={this.toggleTheme} className={styles.github}>
          {this.state.darkTheme ? <DayIcon /> : <NightIcon />}
        </div>
        {this.state.dropDownOn ? <div onClick={this.toggleDropdown} className={`${styles.menuicon} ${styles.github}`}>
          <MenuIcon />

          <MobileDropDown on={this.state.dropDownOn} />
        </div> : <div onClick={this.toggleDropdown} className={`${styles.menuicon} ${styles.github}`}>
          <MenuIcon />

        </div>}
      </div>
    )
  }
}



class Search extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className={styles.searchbar}>
          <div className={styles.searchicon}>
            <SearchIcon color="#0000ff" />
          </div>
          <span>Search...</span>
          <span className={styles.skeyshort}>
            Ctrl+k
          </span>

        </div>

      </div>
    )
  }
}

class MobileDropDown extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {

    return (
      <div className={styles.mobilepopup}>
        <hr className={styles.hr} />
        <a href="/docs/getting-started/quick-start" className={styles.popupitem}>
          <div className={styles.docsicon}>
            <Docs />
          </div>
          <div>
            <h4>Docs</h4>
          </div>
        </a>
        <hr className={styles.hr} />
        <a href="/learn/" className={styles.popupitem}>
          <div className={styles.docsicon}>
            <Pencil />
          </div>
          <div>
            <h4>Learn</h4>
          </div>
        </a>
        <hr className={styles.hr} />
        <div className={styles.popupitem}>
          <div className={styles.docsicon}>
            <Book />
          </div>
          <div>
            <h4>How To Guides</h4>
          </div>
        </div>
        <hr className={styles.hr} />
        <a href="/docs/api-reference" className={styles.popupitem}>
          <div className={styles.docsicon}>
            <Code />
          </div>
          <div>
            <h4>API Reference</h4>
          </div>
        </a>
        <hr className={styles.hr} />
        <div className={styles.popupitem}>
          <div className={styles.docsicon}>
            <Eye />
          </div>
          <div>
            <h4>About</h4>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.popupitem}>
          <div className={styles.docsicon}>
            <Templates />
          </div>
          <div>
            <h4>Blog</h4>
          </div>
        </div>
        <hr className={styles.hr} />

      </div>
    )
  }
}
