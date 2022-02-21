import Orbiton, { Component } from "orbiton";
import { Connect } from "../home/Connect.jsx";
import Footer from "../index/Footer.js";
import NavBar from "./DocsNavBar.jsx";
import * as styles from "./styles/Sidebar.module.scss"
import "./styles/global.scss"
import "../shared/styles/Mdx.scss"
import "../shared/styles/code.scss"
import "../shared/styles/global.scss"
import { Next } from "../shared/Icons.jsx";
import { SIDEBAROBJS } from "./sidebar"

import Logo from "../../../static/favicon.svg"


export class Container extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}
  }
  render() {
    return (
      <div>
        <NavBar />
        <SiderBar />
        <section className={styles.margin}>
          <main className={styles.mdx}>
            {this.props.children}
          </main>
          <Connect />
          <Footer />
        </section>

      </div>
    )
  }
}


class TableOfContentsButton extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}
    this.toggleTOC = this.toggleTOC.bind(this)
  }
  toggleTOC() {
    document.body.toggleAttribute("tocOn")
  }
  render() {
    return (
      <button onClick={this.toggleTOC} className={styles.toggletoc}>
        <div className={styles.toggletoc1}></div>
        <div className={styles.toggletoc2}></div>
      </button>
    )
  }
}


class SiderBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}
  }
  render() {
    return (
      <nav className={styles.root}>
        <div className={styles.siderbar}>
          <div className={styles.content}>
            <div>
              <div className={styles.logo}>
                <a href="/" className={styles.ltext}>
                  <img src={Logo} className={styles.imglogo} />
                  <h2 className={styles.heading}>ORBITON JS</h2>
                </a>
              </div>
              <ul className={styles.list}>
                {SIDEBAROBJS.map((item) => <SidebarItem {...item} />)}
              </ul>
            </div>
          </div>

        </div>

      </nav>
    )
  }
}

class SidebarItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      on: false
    }
    this.open = this.open.bind(this)
  }
  open() {
    this.updateState({
      on: !this.state.on
    })
  }
  Mounted() {
    if (location.pathname.startsWith(this.props.rootPath)) {
      this.updateState({
        on: true
      })
    }
  }
  render() {
    const { props } = this
    const pathname = location.pathname
    return (<li className={styles.sideBarItem}>
      {props.href ? <a href={props.href} className={styles.sideBarButton}>
        <span className={styles.sideBarIcon}>{props.icon}</span>{props.name}
      </a> : <button onClick={this.open} className={styles.sideBarButton}>
        <span className={styles.sideBarIcon}>{props.icon}</span>{props.name}
        <Next className={`${styles.nextIcon} ${this.state.on ? styles.ison : ""} `} />
      </button>}
      {this.state.on ? <div className={styles.dropdownList}>
        <div className={styles.flex}>
          <div className={styles.overul}>
            <ul className={styles.ul}>
              {props.dropdownList.map((item) => {
                return (
                  <li className={`${styles.li} ${pathname + location.hash === item.href ? styles.activeLink : ""}`}>
                    <a href={item.href}>{item.name}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

      </div> : <span></span>}
      <hr className={styles.hr} />
    </li>)
  }
}
