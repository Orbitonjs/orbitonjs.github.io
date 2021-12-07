import Orbiton, { Component } from 'orbiton'
import "./styles/About.scss"
import "../shared/styles/code.scss"

export default class About extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div>
        <div>
          <div className="getstarted">
            <button>Get Started</button>
          </div>
          <div className="about">
            <div>
              <h3>Light Weight</h3>
              <p>Orbiton JS is a lightweight library with just <b>6KB</b> when both the cpre and dom libraries are united. So your apps can load faser compared to other libraries.</p>
            </div>
            <div>
              <h3>Close to the DOM</h3>
              <p>Orbiton JS utilizes the virtual dom but still ensures to stay close to the DOM in order for functions to be run faster and create faster appswith better perfomance</p>
            </div>
            <div>
              <h3>Reactive and Mordern</h3>
              <p>The library is reactive making you create mordern web apps and it does not use old javascript syntax improving performance in mordern browsers</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="instheading">Installation</h3>
          <div className="install">
            <div>
              Using NPM
              <div className="shell">
                <span className="cmd">npm install</span><span className="arg"> orbiton</span><span className="flag"> --save-dev</span>
              </div>
            </div>
            <div>
              Using YARN
              <div className="shell">
                <span className="cmd">yarn add</span><span className="arg"> orbiton</span><span className="flag"> --dev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//<script src=""></script>
