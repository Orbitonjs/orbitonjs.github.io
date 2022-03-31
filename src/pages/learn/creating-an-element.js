import Orbiton from "orbiton"
import { Container } from "../../components/docs/Containor.jsx"
import Head from "../../components/shared/head"
import Docs from "../../learn/creating-an-element.md"
import "../../components/shared/styles/global.scss"

const App = <div>
  <Head title="The Orbiton Element | Orbiton JS " />
  <Container dir="src/learn/creating-an-element.md">
    <Docs />
  </Container>
</div>

const root = document.createElement("div")
document.body.appendChild(root)

Orbiton.append(<div><App /></div>, root)
