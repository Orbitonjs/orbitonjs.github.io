import Orbiton, { Component } from "orbiton";
import * as styles from "./styles/Header.module.scss"

export class Header extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  render() {
    return (
      <header className={styles.header}>
        <div >

          <div className={styles.div2}>
            <div className={styles.div3}>
              <div className={styles.div4}>
                <div className={styles.div5}>
                  <h1 className={styles.h1}>
                    The Ultimate <span className={styles.highlight}>JavaScript</span> library for creating UIs
                  </h1>
                  <p className={styles.p}>Orbiton JS is a lightweight minimilistic JavaScript library for creating browser UIs. Orbiton JS provides your with an ease to use API for creating fast, painless apps with a high performance</p>
                  <div>
                    <a className={styles.a} href="/"><span>Getting Started</span></a>
                    <a className={styles.adoc} href="/"><span>Documentation</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
