import Orbiton from "orbiton"
import NavBar from "../../components/index/Navbar"
import Container from "../../components/shared/Container.jsx"
import Head from "../../components/shared/head"
import Docs from "../../docs/jsx_in_orbiton.md"

const App = <div>
  <Head title="JSX in Orbiton | Orbiton JS " />
  <NavBar />
  <Container >
    <Docs />
  </Container>
</div>

const root = document.createElement("div")
document.body.appendChild(root)

Orbiton.append(<div><App /></div>, root)