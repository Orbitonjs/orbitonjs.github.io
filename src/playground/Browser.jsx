import Orbiton, { Component } from "orbiton";
import * as styles from "./styles/Browser.module.scss";

export class Browser extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <section>
        <div className={styles.navbar}>
          <span className={styles.windowTiles}>
            <div></div>
            <div></div>
            <div></div>
          </span>
          <span className={styles.title}>
            Preview
          </span>
        </div>
        <div id="application-root"></div>
      </section>
    )
  }
}
