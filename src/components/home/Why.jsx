
import Orbiton, { Component } from "orbiton"
import * as styles from "./styles/Why.module.scss"
import { System, Tree, Devices, TreeTwo } from "../shared/Icons.jsx"

export class Usage extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  render() {
    return (
      <div className={styles.root}>
        <h2 className={styles.whyOrbiton}>Why Orbiton</h2>
        <h2 className={styles.wonder}>Wonder what <span className={styles.highlight}>features</span> in make Orbiton stand out</h2>
        <Grid />
      </div>
    )
  }
}
export class Grid extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  render() {
    return (
      <div className={styles.grid}>
        <div className={styles.griditem}>
          <div className={styles.gridItemCover}>
            <div className={styles.heading}>
              <System />
              <h3 className={styles.h3}>Light Weight</h3>
            </div>
            <p className={styles.p}>One of the greatest advantage of Orbiton is that its lightweight compared to other libraries like React. Orbiton is just 6kb - 10kb compared to other libraries that are around 100kb+.</p>
          </div>
        </div>
        <div className={styles.griditem}>
          <div className={styles.gridItemCover}>
            <div className={styles.heading}>
              <TreeTwo />
              <h3 className={styles.h3}>Close To Dom</h3>
            </div>
            <p className={styles.p}>This is another advantage of Orbiton. Being close to the Dom means that the library will not have to carry out many functions in order to update the Dom making the app feel fast for the user.</p>
          </div>
        </div>
        <div className={styles.griditem}>
          <div className={styles.gridItemCover}>
            <div className={styles.heading}>
              <Tree />
              <h3 className={styles.h3}>Reactive</h3>
            </div>
            <p className={styles.p}>The library is reactive making you create modern web apps that provide a native feel to the user. This makes it even better for creating Progressive web apps.</p>
          </div>
        </div>
        <div className={styles.griditem}>
          <div className={styles.gridItemCover}>
            <div className={styles.heading}>
              <Devices />
              <h3 className={styles.h3}>Modern</h3>
            </div>
            <p className={styles.p}>Orbiton JS is among the youngest libraries and so it utilizes modern JavaScript removing legacy code from your apps. Most modern browsers like chrome recommend this.</p>
          </div>
        </div>

      </div>
    )
  }
}
