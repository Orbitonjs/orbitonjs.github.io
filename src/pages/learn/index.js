import Orbiton from "orbiton"
import "../../components/shared/styles/global.scss"
import { Container } from "../../components/docs/Containor.jsx"
import Head from "../../components/shared/head"
import Docs from "../../learn/index.md"

const App = <div>
  <Head title="The Orbiton JS Tutorial | Orbiton JS " />
  <Container dir="src/learn/index.md">
    <Docs />
  </Container>
</div>

const root = document.createElement("div")
document.body.appendChild(root)

Orbiton.append(<div><App /></div>, root)
