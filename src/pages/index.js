import Orbiton, { Component } from "orbiton"
import Head from "../components/shared/head"
import NavBar from "../components/home/NavBar.jsx"
import { Header } from "../components/home/Header.jsx"
import { Docs } from "../components/home/Docs.jsx"
import { Usage } from "../components/home/Why.jsx"
import { Connect } from "../components/home/Connect.jsx"
import Footer from "../components/index/Footer"
import "../components/shared/styles/global.scss"



class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      darkTheme: false
    }
    this.toggleTheme = this.toggleTheme.bind(this)
  }
  toggleTheme() {
    this.updateState({
      darkTheme: !this.state.darkTheme
    })
  }
  render() {
    const { darkTheme } = this.state
    return (
      <div:Head
        props={{
          title: "Orbiton JS | A light weight Javascript Library for creating UIs"
        }}
      >
        <NavBar toggleTheme={this.toggleTheme} />
        <Header />
        <Docs />
        <Usage />
        <Connect />
        <Footer />
      </div:Head>
    )
  }
}
const root = document.createElement("div")
root.setAttribute("id", "app-root")
document.body.appendChild(root)
Orbiton.append(<div><App /></div>, root)
