import Orbiton, { Component } from 'orbiton';
import * as styles from './styles/Container.module.scss'
import Menu from '../../../static/menu_white.svg'
import Footer from '../index/Footer'
import './styles/code.scss'
import './styles/Mdx.scss'
import { SideBarOBJ } from './sideBar'
export default class Container extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      sidBarOn: false
    }
    this.toggleSideBar = this.toggleSideBar.bind(this)
  }
  toggleSideBar() {
    this.updateState({ sidBarOn: !this.state.sidBarOn })
  }
  render() {
    return (
      <section>
        <div onClick={this.toggleSideBar} className={styles.togglenav}>
          <img src={Menu} />
        </div>
        <SideBar toggle={this.toggleSideBar} on={this.state.sidBarOn} />
        <div className={styles.container}>
          {this.props.children}
        </div>
        <Footer />
      </section>
    )
  }
}

class SideBar extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  render() {
    return (
      <section onClick={this.props.toggle} className={this.props.on === false ? `${styles.sidebar} ${styles.closed}` : styles.sidebar}>
        <div className={styles.sidebarcontent}>
          {SideBarOBJ.map((obj) => {
            const open = document.location.pathname === obj.href ? true : false
            const dropdownlist = obj.drops ? obj.dropdownlist : []
            return (
              <SideBarItem href={obj.href} open={open} name={obj.name} drops={obj.drops} dropdownlist={dropdownlist} />
            )
          })}
        </div>
      </section>
    )
  }
}

class SideBarItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  render() {
    return (
      <section>
        <div>
          <a href={this.props.href} >{this.props.name}</a>
          {this.props.drops ?
            <ul className={this.props.open === false ? `${styles.ul} ${styles.closed}` : styles.ul}>
              {this.props.dropdownlist.map((el) => <li><a href={el.href} >{el.name}</a></li>)}
            </ul> : <div className={styles.closed}></div>}
        </div>
      </section>
    )
  }
}
