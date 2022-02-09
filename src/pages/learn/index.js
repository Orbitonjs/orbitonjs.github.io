import Orbiton from "orbiton"
import { Container } from "../../components/docs/Containor.jsx"
import Head from "../../../components/shared/head"
import Docs from "../../learn/index.md"

const App = <div>
  <Head title="Library API Reference | Orbiton JS " />
  <Container >
    <Docs />
  </Container>
</div>

const root = document.createElement("div")
document.body.appendChild(root)

Orbiton.append(<div><App /></div>, root)
