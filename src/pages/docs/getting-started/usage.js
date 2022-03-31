import Orbiton from "orbiton"
import { Container } from "../../../components/docs/Containor.jsx"
import Head from "../../../components/shared/head"
import Docs from "../../../docs/getting-started/usage.md"
import "../../../components/shared/styles/global.scss"

const App = <div>
  <Head title="Usage | Orbiton JS " />
  <Container dir="src/docs/getting-started/usage.md">
    <Docs />
  </Container>
</div>

const root = document.createElement("div")
document.body.appendChild(root)

Orbiton.append(<div><App /></div>, root)
