import Orbiton from "orbiton"
import { Container } from "../../../components/docs/Containor.jsx"
import Head from "../../../components/shared/head"
import "../../../components/shared/styles/global.scss"
import Docs from "../../../docs/getting-started/quick-start.md"

const App = <div>
  <Head title="Getting Started | Orbiton JS " />
  <Container dir="src/docs/getting-started/quick-start.md" >
    <Docs />
  </Container>
</div>

const root = document.createElement("div")
document.body.appendChild(root)

Orbiton.append(<div><App /></div>, root)
