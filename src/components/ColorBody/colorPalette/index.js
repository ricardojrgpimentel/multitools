import React from 'react'
import ColorSquare from './colorSquare'

class ColorPalette extends React.Component{

  hexToLuma(colour){
    const hex = colour.replace(/#/, '')
    const r = parseInt(hex.substr(0, 2), 16)
    const g = parseInt(hex.substr(2, 2), 16)
    const b = parseInt(hex.substr(4, 2), 16)

    return [
        0.299 * r,
        0.587 * g,
        0.114 * b
    ].reduce((a, b) => a + b) / 255
  }

  render(){
    let Squares = []
    let aux = 1
    for(let colorSquare in this.props.palette){
      Squares.push(<ColorSquare key={aux++} hex={this.props.palette[colorSquare]} color={colorSquare} />)
    }

    let bC = this.hexToLuma(this.props.palette[400]) > 0.5 ? 'black' : 'white'

    return(
      <div className="col-12">
        <div className='color-palette' style={{backgroundColor: this.props.palette[400]}}>
          <h2 style={{color: bC}} className='palette-name'>{this.props.color}</h2>
          <div className="row row-no-padding row-col-no-padding">
            {Squares}
          </div>
        </div>
      </div>
    )
  }
}

export default ColorPalette
