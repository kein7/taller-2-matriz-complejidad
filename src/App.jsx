import Plot from './Components/MatrixComplexity/Plot.jsx'
import './Components/MatrixComplexity/Plot.css'

import { useState } from 'react'
import './App.css'
import { BusinessComplexityTable } from './Components/BusinessComplexityTable'
import { TechnologyComplexityTable } from './Components/TechnologyComplexityTable'

function getMaxComplexity(business, technology) {
  const businessLabel =
    business < 12 ? 'Baja' : business < 19 ? 'Media' : 'Alta'
  const technologyLabel =
    technology < 11 ? 'Baja' : technology < 17 ? 'Media' : 'Alta'

  const priorities = { Baja: 1, Media: 2, Alta: 3 }
  return priorities[businessLabel] + priorities[technologyLabel] === 2
    ? 'Muy baja'
    : priorities[businessLabel] + priorities[technologyLabel] === 3
    ? 'Baja'
    : priorities[businessLabel] + priorities[technologyLabel] === 4
    ? 'Media'
    : priorities[businessLabel] + priorities[technologyLabel] === 5
    ? 'Alta'
    : 'Muy Alta'
}

function App() {
  const [totalBusinessComplexity, setTotalBusinessComplexity] = useState(0)
  const [totalTechnologyComplexity, setTotalTechnologyComplexity] = useState(0)
  return (
    <div>
      <h1>Matriz de complejidad</h1>
      <div>
        <h2>Complejidad de Negocio</h2>
        <BusinessComplexityTable setTotalValue={setTotalBusinessComplexity} />
        <h3>
          Complejidad de Negocio Total:{' '}
          {totalBusinessComplexity < 12
            ? 'Baja'
            : totalBusinessComplexity < 19
            ? 'Media'
            : 'Alta'}
        </h3>
      </div>
      <br />
      <br />
      <div>
        <h2>Complejidad Tecnológica</h2>
        <TechnologyComplexityTable
          setTotalValue={setTotalTechnologyComplexity}
        />
        <h3>
          Complejidad Tecnológica Total:{' '}
          {totalTechnologyComplexity < 11
            ? 'Baja'
            : totalTechnologyComplexity < 17
            ? 'Media'
            : 'Alta'}
        </h3>
      </div>
      <br />
      <br />
      <div>
        <h3>
          Complejidad del proyecto:{' '}
          {getMaxComplexity(totalBusinessComplexity, totalTechnologyComplexity)}
        </h3>

        <Plot
          totalBusinessComplexity={totalBusinessComplexity}
          totalTechnologyComplexity={totalTechnologyComplexity}
        ></Plot>
      </div>
    </div>
  )
}

export default App
