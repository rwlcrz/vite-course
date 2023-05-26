import './App.css'
import Contact from "./Contact.jsx"
import Newt from "./newt.jpg"
import Tina from "./tina.jpg"
import Queenie from "./queenie.jpg"
import Jacob from "./jacob.jpg"

function App() {

  return (
    <>
      <Contact
        img={Newt}
        name="Newt Scamander"
        title="Magizoologist"
      />
      <Contact
        img={Tina}
        name="Tina Goldstein"
        title="Auror"
      />
      <Contact
        img={Queenie}
        name="Queenie Goldstein"
        title="Witch"
      />
      <Contact
        img={Jacob}
        name="Jacob Kowalski"
        title="Baker"
      />
    </>
  )
}

export default App
