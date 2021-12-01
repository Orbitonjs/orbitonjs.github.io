import Orbiton from "orbiton"
import NavBar from "../components/index/Navbar"

const App = <div>
  <NavBar />
</div>

const root = document.createElement("div")
document.body.appendChild(root)

Orbiton.append(<div><App /></div>, root)
