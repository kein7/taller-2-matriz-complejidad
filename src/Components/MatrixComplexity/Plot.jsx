import './Plot.css'

export default function Plot(props) {
  const { totalBusinessComplexity, totalTechnologyComplexity } = props
  const rows = []
  for (let i = 21; i >= 7; i--) {
    const cells = []
    for (let j = 8; j < 26; j++) {
      if (j === 16) {
        if (i === 13) {
          cells.push(<div key={j} className="cellMidLeftBottom"></div>)
        } else if (i === 14) {
          cells.push(<div key={j} className="cellMidLeftTop"></div>)
        } else {
          cells.push(<div key={j} className="cellVerticalMidLeft"></div>)
        }
      } else if (j === 17) {
        if (i === 13) {
          cells.push(<div key={j} className="cellMidRightBottom"></div>)
        } else if (i === 14) {
          cells.push(<div key={j} className="cellMidRightTop"></div>)
        } else {
          cells.push(<div key={j} className="cellVerticalMidRight"></div>)
        }
      } else if (i === 13) {
        cells.push(<div key={j} className="cellHorizontalMidBottom"></div>)
      } else if (i === 14) {
        cells.push(<div key={j} className="cellHorizontalMidTop"></div>)
      } else {
        cells.push(<div key={j} className="cell"></div>)
      }
      if (i === totalTechnologyComplexity && j === totalBusinessComplexity) {
        cells.pop()
        cells.push(
          <div key={j} className="cell">
            <div className="cellDot"></div>
          </div>
        )
      }
    }
    rows.push(
      <div key={i} className="row">
        {cells}
      </div>
    )
  }

  return (
    <div className="container">
      <p className="verticalText">Complejidad tecnologica</p>
      <div className="boxMatrix">{rows}</div>
      {console.log(totalBusinessComplexity, totalTechnologyComplexity)}
      <p className="horizontalText">Complejidad de negocio</p>
    </div>
  )
}
