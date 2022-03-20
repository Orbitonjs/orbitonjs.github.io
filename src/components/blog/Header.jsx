import Orbiton, { Component } from "orbiton";
import Logo from "../../../static/favicon.svg"

export class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}
  }
  render() {
    return (
      <header>
        <div>
          <h1>The Orbiton JS Blog</h1>
          <p>No posts Yet</p>
        </div>
      </header>
    )
  }
}
