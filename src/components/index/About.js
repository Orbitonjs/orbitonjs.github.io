import Orbiton, { Component } from 'orbiton'
import * as styles from "./styles/About.module.scss"
import "../shared/styles/code.scss"
import Docs from './install_usage.mdx'

export default class About extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div>
        <div>
          <div className={styles.getstarted}>
            <a href="/docs/installation">Get Started</a>
          </div>
          <div className={styles.about}>
            <div>
              <h3>Light Weight</h3>
              <p>Orbiton JS is a lightweight library with just <b>6KB</b> when both the cpre and dom libraries are united. So your apps can load faser compared to other libraries.</p>
            </div>
            <div>
              <h3>Close to the DOM</h3>
              <p>Orbiton JS utilizes the virtual dom but still ensures to stay close to the DOM making Orbiton Apps fast and have better performance</p>
            </div>
            <div>
              <h3>Reactive and Mordern</h3>
              <p>The library is reactive making you create mordern web apps and it does not use old javascript syntax improving performance in mordern browsers</p>
            </div>
          </div>
        </div>
        <Docs />
      </div>
    )
  }
}

//<script src=""></script>
