import Orbiton, { Component } from "orbiton"
import * as styles from "./styles/Connect.module.scss"
import { Github, Next } from "../shared/Icons.jsx"

export class Connect extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  render() {
    return (
      <section className={styles.root}>
        <div className={styles.cover}>
          <Grid />
        </div>
      </section>
    )
  }
}


const Grid = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.form}>
        <div className={styles.heading}>
          <h2 className={styles.connect}>Connect</h2>
          <h2 className={styles.get}>Get <span className={styles.highlight}>latest</span> updates and news about Orbiton</h2>
        </div>
        <div>
          <p className={styles.join}>Join Our Newsletter</p>
          <p>No spam, guaranteed.</p>
        </div>
        <Form />
      </div>
      <div className={styles.social}>
        <div className={styles.socialItem}>
          <a href="/" className={styles.card}>
            <p className={styles.cardTitle}>Blog</p>
            <p className={styles.cardCaption}>Check out articles and news from the Orbiton team and community.</p>
            <p className={styles.learnMore}><span>Learn more</span><Next /></p>
          </a>
        </div>
        <div className={styles.socialItem}>
          <a href="/" className={styles.card}>
            <p className={styles.cardTitle}>Twitter</p>
            <p className={styles.cardCaption}>Follow <span>@Orbitonjs</span> on twitter to get latest updates fromus.</p>
            <p className={styles.learnMore}><span>Follow</span><Next /></p>
          </a>
        </div>
      </div>
    </div>
  )
}

class Form extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      email: ""
    }
  }
  render() {
    return (
      <form>
        <label className={styles.label} for="email">
          Enter your email
        </label>
        <div className={styles.inputroot}>
          <div className={styles.inputcover}>
            <input className={styles.input} type="email" name="email" id="email" placeholder="example@domain.com" />
          </div>
          <button className={styles.button}>
            Subscribe
            <span className={styles.buttoncover}></span>
          </button>
        </div>
      </form>
    )
  }
}
