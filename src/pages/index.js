import Orbiton from "orbiton"
import About from "../components/index/About"
import Footer from "../components/index/Footer"
import Header from "../components/index/Header"
import NavBar from "../components/index/Navbar"
import { Actions } from "../components/index/sponsor"
import Head from "../components/shared/head"

const App = <div>
  <Head title="Orbiton JS | A light weight Javascript Library for creating UIs" />
  <NavBar />
  <Header />
  <About />
  <Actions />
  <Footer />
</div>

const root = document.createElement("div")
document.body.appendChild(root)
const start = new Date();
Orbiton.append(<div><App /></div>, root)
const end = new Date();
console.log(start.getTime() - end.getTime())
