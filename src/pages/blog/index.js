import Orbiton from "orbiton"
import { Header } from "../../components/blog/Header.jsx"
import NavBar from "../../components/home/NavBar.jsx"
import Head from "../../components/shared/head"
import "../../components/shared/styles/global.scss"

const App = <div>
  <Head title="Components And Props | Orbiton JS " />
  <NavBar />
  <Header />
</div>

const root = document.createElement("div")
document.body.appendChild(root)

Orbiton.append(<div><App /></div>, root)
