import Orbiton, { Component } from "orbiton"
import * as styles from "./styles/Connect.module.scss"
import { Github, Next } from "../shared/Icons.jsx"
import axios from "axios"

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
      email: "",
      success: false,
      faild: false
    }
    this.getEmail = this.getEmail.bind(this)
    this.submit = this.submit.bind(this)
  }
  getEmail(e) {
    const { value } = e.target
    this.updateState({
      email: value
    })
  }
  /**
  * Brief description of the function here.
  * @summary If the description is long, write your summary here. Otherwise, feel free to remove this.
  * @param {SubmitEvent} e -
  */
  submit(e) {
    e.preventDefault()
    const payload = {
      email: this.state.email
    }
    axios.post("/api", payload)
      .then((res) => {
        this.updateState({
          email: "",
          success: true
        })
      }).catch((err) => {
        this.updateState({
          failed: true
        })
      })
  }
  render() {
    return (
      <form>
        <label className={styles.label} for="email">
          Enter your email
        </label>
        <div className={styles.inputroot}>
          <div className={styles.inputcover}>
            <input value={this.state.email} onChange={this.getEmail} className={styles.input} type="email" name="email" id="email" placeholder="example@domain.com" />
          </div>
          <button onClick={this.submit} className={styles.button}>
            Subscribe
            <span className={styles.buttoncover}></span>
          </button>
        </div>
      </form>
    )
  }
}
