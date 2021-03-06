import Orbiton from "orbiton"
import { Container } from "../../../components/docs/Containor.jsx"
import Head from "../../../components/shared/head"
import Docs from "../../../docs/how-to-guides/ssr.md"
import "../../../components/shared/styles/global.scss"

const App = <div>
  <Head title="Server Side Rendering | Orbiton JS " />
  <Container dir="src/docs/how-to-guides/ssr.md" >
    <Docs />
  </Container>
</div>

const root = document.createElement("div")
document.body.appendChild(root)

Orbiton.append(<div><App /></div>, root)
