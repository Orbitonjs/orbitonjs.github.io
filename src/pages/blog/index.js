import Orbiton from "orbiton"
import NavBar from "../../components/home/NavBar.jsx"
import Head from "../../components/shared/head"

const App = <div>
  <Head title="Components And Props | Orbiton JS " />
  <NavBar />
</div>

const root = document.createElement("div")
document.body.appendChild(root)

Orbiton.append(<div><App /></div>, root)
