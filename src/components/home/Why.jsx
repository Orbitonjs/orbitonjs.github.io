
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
            <p className={styles.p}>One of the greatest advantage of Orbiton is its size. Orbiton is just 3.8kb min+gzip. This makes your apps load faster size most of the chunk will be code you wrote or code from external libraries since orbiton will only take a small portion of yourapp size</p>
          </div>
        </div>
        <div className={styles.griditem}>
          <div className={styles.gridItemCover}>
            <div className={styles.heading}>
              <TreeTwo />
              <h3 className={styles.h3}>Close To Dom</h3>
            </div>
            <p className={styles.p}>Orbiton DOM rendere tries to stay close tothe DOM inorder to mantain a great performance. This makes Orbiton Applications performant and as fast as vanilla js Apps</p>
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
            <p className={styles.p}>Orbiton JS provides modern APIs that are easy to understand and make you develop scalable and limitless Applications.</p>
          </div>
        </div>

      </div>
    )
  }
}
