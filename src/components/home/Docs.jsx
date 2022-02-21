import Orbiton, { Component } from "orbiton";
import { Next, Docs as DocIcon, Code, Pencil, Book, HowTo } from "../shared/Icons.jsx";
import * as styles from "./styles/Docs.module.scss"
import MarkDown from "./Usage.mdx"
import * as ustyles from "./styles/Usage.module.scss";


export class Docs extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  render() {
    return (
      <section className={styles.root}>
        <div className={styles.div1}>
          <div className={styles.div2}>
            <ExploreDocs />
            <Usage />
          </div>
        </div>
      </section>
    )
  }
}

export class Usage extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  render() {
    return (
      <div className={ustyles.root}>
        <MarkDown />
      </div>
    )
  }
}

export class ExploreDocs extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  render() {
    return (
      <div ClassName={styles.exploreDocs}>
        <div className={styles.header}>
          <h2 className={styles.exploreh2}>Explore Docs</h2>
          <h2 className={styles.startbuilding}>Start Using <span className={styles.highlight}>Orbiton JS</span> for building UIs today</h2>
          <p className={styles.p}>Begin building your UIs with a superb library. Explore our documentation to get started now.</p>
        </div>
        <div className={styles.tabs}>
          <div className={styles.tab}>
            <span className={styles.cover}>
              <span className={styles.icon}>
                <DocIcon />
              </span>
              <span>
                <span className={styles.tabhead}>
                  Getting Started
                </span>
                <span className={styles.tabp}>A guide to getting started with Orbiton JS and the Orbiton JS documentation</span>
                <a className={styles.taba} href="/docs/getting-started/quick-start">
                  <span>Learn more</span>
                  <Next />
                </a>
              </span>
            </span>
            <span className={styles.over}></span>
          </div>
          <div className={styles.tab}>
            <span className={styles.cover}>
              <span className={styles.icon}>
                <Pencil />
              </span>
              <span>
                <span className={styles.tabhead}>
                  Learn
                </span>
                <span className={styles.tabp}>A free full tutorial teaching Orbiton JS for beginner level.</span>
                <a className={styles.taba} href="/learn/">
                  <span>Learn more</span>
                  <Next />
                </a>
              </span>
            </span>
            <span className={styles.over}></span>
          </div>
          <div className={styles.tab}>
            <span className={styles.cover}>
              <span className={styles.icon}>
                <HowTo />
              </span>
              <span>
                <span className={styles.tabhead}>
                  How To Guides
                </span>
                <span className={styles.tabp}>A guide to solve common tasks or workflows that are common in Orbiton Development</span>
                <a className={styles.taba} href="/">
                  <span>Learn more</span>
                  <Next />
                </a>
              </span>
            </span>
            <span className={styles.over}></span>
          </div>
          <div className={styles.tab}>
            <span className={styles.cover}>
              <span className={styles.icon}>
                <Code />
              </span>
              <span>
                <span className={styles.tabhead}>
                  API Reference
                </span>
                <span className={styles.tabp}>The complete detailed API Reference to all utils provided Orbiton JS</span>
                <a className={styles.taba} href="/docs/api-reference">
                  <span>Learn more</span>
                  <Next />
                </a>
              </span>
            </span>
            <span className={styles.over}></span>
          </div>
        </div>
      </div>
    )
  }
}

