import Orbiton from "orbiton"
import { Container } from "../../components/docs/Containor.jsx"
import Head from "../../components/shared/head"
import Docs from "../../learn/events-and-attributes.md"

const App = <div>
  <Head title="Events and Attributes | Orbiton JS " />
  <Container dir="src/learn/events-and-attributes.md" >
    <Docs />
  </Container>
</div>

const root = document.createElement("div")
document.body.appendChild(root)

Orbiton.append(<div><App /></div>, root)
