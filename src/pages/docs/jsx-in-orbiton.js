import Orbiton from "orbiton"
import { Container } from "../../components/docs/Containor.jsx"
import NavBar from "../../components/index/Navbar"
import Head from "../../components/shared/head"
import Docs from "../../docs/jsx_in_orbiton.md"

const App = <div>
  <Head title="JSX in Orbiton | Orbiton JS " />
  <Container >
    <Docs />
  </Container>
</div>

const root = document.createElement("div")
document.body.appendChild(root)

Orbiton.append(<div><App /></div>, root)
