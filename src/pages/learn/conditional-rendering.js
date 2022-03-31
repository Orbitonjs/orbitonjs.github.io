import Orbiton from "orbiton"
import { Container } from "../../components/docs/Containor.jsx"
import Head from "../../components/shared/head"
import "../../components/shared/styles/global.scss"
import Docs from "../../learn/conditional-rendering.md"

const App = <div>
  <Head title="Conditional Rendering | Orbiton JS " />
  <Container dir="src/learn/conditional-rendering.md" >
    <Docs />
  </Container>
</div>

const root = document.createElement("div")
document.body.appendChild(root)

Orbiton.append(<div><App /></div>, root)
