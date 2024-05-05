import { useState } from 'react'
import './App.css'
import { BusinessComplexityTable } from './Components/BusinessComplexityTable'
import { TechnologyComplexityTable } from './Components/TechnologyComplexityTable'
function App() {
  const [totalBusinessComplexity, setTotalBusinessComplexity]  = useState(0)
  const [totalTechnologyComplexity, setTotalTechnologyComplexity]  = useState(0)
  return (
    <>
      <h3>Complejidad de Negocio</h3>
      <BusinessComplexityTable setTotalValue={setTotalBusinessComplexity}/>
      <h5>Complejidad de Negocio Total: {totalBusinessComplexity}</h5>      
      <br/>
      <h3>Complejidad Tecnológica</h3>
      <TechnologyComplexityTable setTotalValue={setTotalTechnologyComplexity}/>
      <h5>Complejidad Tecnológica Total: {totalTechnologyComplexity}</h5>      

    </>
  )
}

export default App
