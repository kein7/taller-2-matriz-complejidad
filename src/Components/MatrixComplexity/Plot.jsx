import './Plot.css'

export default function Plot(props) {
  const { totalBusinessComplexity, totalTechnologyComplexity } = props
  const rows = []
  for (let i = 21; i >= 1; i--) {
    const cells = []
    for (let j = 1; j < 25; j++) {
      if (j === 12) {
        if (i === 10) {
          cells.push(<div key={j} className="cellMidLeftBottom"></div>)
        } else if (i === 11) {
          cells.push(<div key={j} className="cellMidLeftTop"></div>)
        } else {
          cells.push(<div key={j} className="cellVerticalMidLeft"></div>)
        }
      } else if (j === 13) {
        if (i === 10) {
          cells.push(<div key={j} className="cellMidRightBottom"></div>)
        } else if (i === 11) {
          cells.push(<div key={j} className="cellMidRightTop"></div>)
        } else {
          cells.push(<div key={j} className="cellVerticalMidRight"></div>)
        }
      } else if (i === 10) {
        cells.push(<div key={j} className="cellHorizontalMidBottom"></div>)
      } else if (i === 11) {
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
    </div>
  )
}
