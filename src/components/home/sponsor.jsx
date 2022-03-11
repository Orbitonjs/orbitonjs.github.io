import Orbiton, { Component } from "orbiton";
import * as  styles from "./styles/Sponsor.module.scss"
import Logo from "../../../static/cranom.png"

const sponsorsArray = [
  {
    name: "Cranom",
    href: "https://cranom.com",
    description: "Open Source software to enhance Developer experience",
    img: Logo,
  }
]
export class SponsorShip extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div className={styles.root}>
        <h2 className={styles.h2}>Our sponsors</h2>
        <p>The continued development and maintenance of Orbiton JS is greatly helped by our generous sponsors.</p>
        <div>
          <div className={styles.category}>
            <h3 className={styles.platinum}>Platinum</h3>
          </div>
          <div className={styles.grid}>
            {sponsorsArray.map((i) => <Sponsor img={i.img} href={i.href} name={i.name} description={i.description} />)}
            <div className={styles.gridItem}>
              <div className={styles.link}>
                <a href="https://www.patreon.com/jimjunior" className={styles.icon}>
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" viewBox="0 0 24 24"><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>
                </a>
                <div>
                  <p className={styles.name}>Become our sponsor!</p>
                  <p className={styles.description}>
                    To join us, choose how you want to contribute.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}


class Sponsor extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div className={`${styles.gridItem} `}>
        <a className={`${styles.link} ${styles.sponsoritem}`} href={`${this.props.href}/?utm_source=Orbiton.JS&utm_medium=referral&utm_content=homepage`} target="_blank">
          <div className={styles.img}>
            <img src={`${this.props.img}`} />
          </div>
          <div>
            <p className={styles.name}>{this.props.name}</p>
            <p className={styles.description}>{this.props.description}</p>
          </div>
        </a>
      </div>
    )
  }
}
