import Orbiton from "orbiton"
import { Container } from "../../components/docs/Containor.jsx"
import Head from "../../components/shared/head"
import Docs from "../../learn/forms.md"

const App = <div>
  <Head title="Forms | Orbiton JS " />
  <Container dir="src/learn/forms.md" >
    <Docs />
  </Container>
</div>

const root = document.createElement("div")
document.body.appendChild(root)

Orbiton.append(<div><App /></div>, root)
