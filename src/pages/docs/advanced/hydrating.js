import Orbiton from "orbiton"
import { Container } from "../../../components/docs/Containor.jsx"
import Head from "../../../components/shared/head"
import "../../../components/shared/styles/global.scss"
import Docs from "../../../docs/advanced/Hydrating.md"

const App = <div>
  <Head title="Hydrating | Orbiton JS " />
  <Container dir="src/docs/advanced/Hydrating.md" >
    <Docs />
  </Container>
</div>

const root = document.createElement("div")
document.body.appendChild(root)

Orbiton.append(<div><App /></div>, root)
