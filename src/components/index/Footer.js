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
        <p><span>Please Show your love and <a href="https://www.patreon.com/jimjunior">SPONSOR</a> this project to keep its development progressing.</span></p>
        <div className={styles.footer}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/docs/getting-started/installation">Get Started</a></li>
            <li><a href="/docs/getting-started/quick-start">Docs</a></li>
            <li><a href="/docs/api-reference">API</a></li>
          </ul>
          <ul>
            <li><a href="https://github.com/Orbitonjs" target="_blank" rel="noopener noreferrer">Github Org</a></li>
            <li><a href="https://github.com/Orbitonjs/orbiton" target="_blank" rel="noopener noreferrer">Github Repo</a></li>
            <li><a href="https://www.twitter.com/orbitonjs" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://github.com/Orbitonjs/orbitonjs.github.io" target="_blank" rel="noopener noreferrer">Website Repo</a></li>
          </ul>
          <ul>
            <li><a href="/playground">Playground</a></li>
            <li><a href="/sitemap.xml">Site Map</a></li>
            <li><a href="/">Docs</a></li>
            <li><a href="/">API</a></li>
          </ul>
        </div>
        <p>Copyright © {date.getFullYear()} <a href="https://www.twitter.com/jimjuniorb">Beingana Jim Junior</a>.</p>
      </footer>
    )
  }
}
