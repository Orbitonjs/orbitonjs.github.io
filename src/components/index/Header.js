import Orbiton, { Component } from 'orbiton'
import "./styles/Header.scss"
import Logo from '../../../static/background.svg'

export default class Header extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div>
        <header className="header">
          <div className="headerlogo">
            <img className="rotatinglogo" src={Logo} alt="log" />
            <h1>ORBITON JS</h1>
            <p>A minimalistic Javascript library for creating Browser UI's.</p>
          </div>
        </header>
      </div>
    )
  }
}
