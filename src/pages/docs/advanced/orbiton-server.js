import Orbiton from "orbiton"
import { Container } from "../../../components/docs/Containor.jsx"
import Head from "../../../components/shared/head"
import Docs from "../../../docs/advanced/orbiton-server.md"

const App = <div>
  <Head title="Orbiton Server | Orbiton JS " />
  <Container dir="src/docs/advanced/orbiton-server.md" >
    <Docs />
  </Container>
</div>

const root = document.createElement("div")
document.body.appendChild(root)

Orbiton.append(<div><App /></div>, root)
