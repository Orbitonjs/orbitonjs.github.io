import Orbiton, { Component } from "orbiton";
import Head from "../components/shared/head"
import { Navbar } from "../playground/Navbar.jsx";
import "../components/shared/styles/global.scss"
import { Desktop } from "../playground/Desktop.jsx"

//setProcess()
class App extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div:Head
        props={{
          title: "Playground"
        }}
      >
        <Navbar />
        <Desktop />
      </div:Head>
    )
  }
}
const root = document.createElement("div")
root.setAttribute("id", "app-root")
document.body.appendChild(root)
Orbiton.append(<div><App /></div>, root)
