import Orbiton, { Component } from 'orbiton';
import "./styles/Footer.scss"

export default class Footer extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <footer>
        <div className="footer">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Get Started</a></li>
            <li><a href="/">Docs</a></li>
            <li><a href="/">API</a></li>
          </ul>
          <ul>
            <li><a href="/">Github</a></li>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">Discord</a></li>
            <li><a href="/">Stack Overflow</a></li>
          </ul>
          <ul>
            <li><a href="/">CodeSandbox</a></li>
            <li><a href="/">Get Started</a></li>
            <li><a href="/">Docs</a></li>
            <li><a href="/">API</a></li>
          </ul>
        </div>
      </footer>
    )
  }
}
