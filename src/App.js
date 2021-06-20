import {
  useState
} from "react";
import Personnage from "./components/Personnage";
import Article from "./components/Article";
import Test from "./components/Test";

function App() {
  let stateCardID = {
    nom: 'Khibaziev',
    prenom: 'Farhad',
    age: 28,
    commune: 'Etterbeek',
  }
  let [card, setCardID] = useState(stateCardID)
  let changeID = () => {
    setCardID({
      nom: prompt('ton nom:'),
      prenom: prompt('ton prénom:'),
      age: prompt('ton age:'),
      commune: prompt('ta commune:')
    })
  }

  let stateTestTAB =[
    {
      exemple : "exemple1"
    },
    {
      exemple : "exemple2"
    },
    {
      exemple : "exemple3"
    },
    {
      exemple : "exemple4"
    },
    {
      exemple : "exemple5"
    }
  ]
  let [testTAB,SetTestTAB] = useState(stateTestTAB);


  return ( 
    <div>
    <Personnage myCardID = {card}  onChangeID = {changeID}/>
    <Article myTestTAB = {testTAB} test = {Test}/>
    </div>
  )
}

export default App;