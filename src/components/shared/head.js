import Orbiton, { Component } from 'orbiton'

export default class Head extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  Mounted() {
    console.log(document.title)
    document.title = this.props.title
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}
