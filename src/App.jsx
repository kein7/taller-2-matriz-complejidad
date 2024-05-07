import Plot from './Components/MatrixComplexity/Plot.jsx'
import './Components/MatrixComplexity/Plot.css'

import { useState } from 'react'
import './App.css'
import { BusinessComplexityTable } from './Components/BusinessComplexityTable'
import { TechnologyComplexityTable } from './Components/TechnologyComplexityTable'

function getMaxComplexity(business, technology) {
  const businessLabel = business < 12 ? "Baja" : business < 19 ? "Media" : "Alta";
  const technologyLabel = technology < 11 ? "Baja" : technology < 17 ? "Media" : "Alta";
  
  const priorities = { "Baja": 1, "Media": 2, "Alta": 3 };
  return priorities[businessLabel] > priorities[technologyLabel] ? businessLabel : technologyLabel;
}

function App() {
  const [totalBusinessComplexity, setTotalBusinessComplexity] = useState(0)
  const [totalTechnologyComplexity, setTotalTechnologyComplexity] = useState(0)
  return (
    <>
      <h3>Complejidad de Negocio</h3>
      <BusinessComplexityTable setTotalValue={setTotalBusinessComplexity} />
      <h5>Complejidad de Negocio Total: {totalBusinessComplexity < 12 ? "Baja" : totalBusinessComplexity < 19 ? "Media" : "Alta"}</h5>
      <br />
      <h3>Complejidad Tecnológica</h3>
      <TechnologyComplexityTable setTotalValue={setTotalTechnologyComplexity} />
      <h5>Complejidad Tecnológica Total: {totalTechnologyComplexity < 11 ? "Baja" : totalTechnologyComplexity < 17 ? "Media" : "Alta"}</h5>

      <h3>Complejidad Final: {getMaxComplexity(totalBusinessComplexity, totalTechnologyComplexity)}</h3>
      
      <Plot
        totalBusinessComplexity={totalBusinessComplexity}
        totalTechnologyComplexity={totalTechnologyComplexity}
      ></Plot>
      <p className="horizon">Complejidad de negocio</p>
    </>
  )
}

export default App
