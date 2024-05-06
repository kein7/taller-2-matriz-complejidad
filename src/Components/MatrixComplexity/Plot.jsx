import './Plot.css'

export default function Plot() {
  const rows = []
  for (let i = 0; i < 20; i++) {
    const cells = []
    for (let j = 0; j < 24; j++) {
      if (j === 11) {
        if (i === 9) {
          cells.push(
            <div key={j} className="cellMidLeftTop">{`${i},${j}`}</div>
          )
        } else if (i === 10) {
          cells.push(
            <div key={j} className="cellMidLeftBottom">{`${i},${j}`}</div>
          )
        } else {
          cells.push(
            <div key={j} className="cellVerticalMidLeft">{`${i},${j}`}</div>
          )
        }
      } else if (j === 12) {
        if (i === 9) {
          cells.push(
            <div key={j} className="cellMidRightTop">{`${i},${j}`}</div>
          )
        } else if (i === 10) {
          cells.push(
            <div key={j} className="cellMidRightBottom">{`${i},${j}`}</div>
          )
        } else {
          cells.push(
            <div key={j} className="cellVerticalMidRight">{`${i},${j}`}</div>
          )
        }
      } else if (i === 9) {
        cells.push(
          <div key={j} className="cellHorizontalMidTop">{`${i},${j}`}</div>
        )
      } else if (i === 10) {
        cells.push(
          <div key={j} className="cellHorizontalMidBottom">{`${i},${j}`}</div>
        )
      } else {
        cells.push(<div key={j} className="cell">{`${i},${j}`}</div>)
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
      <div className="boxMatrix">
        {/*<div className="item">
          <div></div>
          <p>Complejidad tecnologica alta</p>
        </div>
        <div className="item">
          <div></div>
          <p>Complejidad Alta</p>
        </div>
        <div className="item">
          <div></div>
          <p>Rutina</p>
        </div>
        <div className="item">
          <div></div>
          <p>Alta complejidad de negocio</p>
        </div>*/}
        {rows}
      </div>
    </div>
  )
}
