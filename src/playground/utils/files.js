let IndexValue = `// Orbiton is Already imported by default. You dont need to import It
import {Button} from "App.js"

// Don't change this root
const root = document.getElementById("application-root")

Orbiton.append(<Button />, root)

`



let AppValue = `

export class Button extends Orbiton.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      count: 0
    }
    this.add = this.add.bind(this)
  }
  add() {
    let {count} = this.state
    this.updateState({
      count: count + 1
    })
  }
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.add}>Add Count</button>
      </div>
    )
  }
}

`
export const FILES = [
  {
    id: 0,
    name: "App.js",
    type: "jsx",
    content: AppValue,
  },
  {
    id: 1,
    name: "index.js",
    type: "jsx",
    content: IndexValue,
  }
]
