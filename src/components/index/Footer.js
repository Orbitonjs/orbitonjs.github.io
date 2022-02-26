import Orbiton, { Component } from 'orbiton';
import * as styles from "./styles/Footer.module.scss"

export default class Footer extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const date = new Date()
    return (
      <footer>
        <p><span>Please Show your love and <a href="https://www.twitter.com/jimjuniorb">SPONSOR</a> this project to keep its development progressing.</span></p>
        <div className={styles.footer}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/docs/installation">Get Started</a></li>
            <li><a href="/docs">Docs</a></li>
            <li><a href="/docs/api">API</a></li>
          </ul>
          <ul>
            <li><a href="https://github.com/Orbitonjs/orbiton" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li><a href="https://www.twitter.com/orbitonjs" target="_blank" rel="noopener noreferrer">Twitter</a></li>
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
        <p>Copyright © {date.getFullYear()} <a href="https://www.twitter.com/jimjuniorb">Beingana Jim Junior</a>.</p>
      </footer>
    )
  }
}
