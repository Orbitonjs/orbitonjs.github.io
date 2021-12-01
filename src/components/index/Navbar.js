import Orbiton, { Component } from 'orbiton'
//import './styles/Nav.scss'



export default class NavBar extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  render() {
    return (
      <nav className="navbar">
        <img src="/logo.png" />
      </nav>
    )
  }
}
