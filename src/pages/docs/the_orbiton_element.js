import Orbiton from "orbiton"
import NavBar from "../../components/index/Navbar"
import Container from "../../components/shared/Container.jsx"
import Head from "../../components/shared/head"
import Docs from "../../docs/the_orbiton_element.md"

const App = <div>
  <Head title="The Orbiton Element | Orbiton JS " />
  <NavBar />
  <Container >
    <Docs />
  </Container>
</div>

const root = document.createElement("div")
document.body.appendChild(root)

Orbiton.append(<div><App /></div>, root)
