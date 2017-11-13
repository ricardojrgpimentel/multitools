import React from 'react'
import ColorSquare from './colorSquare'

class ColorPalette extends React.Component{

  render(){
    let Squares = []
    let aux = 1
    for(let colorSquare in this.props.palette){
      Squares.push(<ColorSquare key={aux++} hex={this.props.palette[colorSquare]} color={colorSquare} />)
    }
    return(
      <div className="col-12">
        <div className='color-palette'>
          <h2>{this.props.color}</h2>
          <div className="row row-no-padding row-col-no-padding">
            {Squares}
          </div>
        </div>
      </div>
    )
  }
}

export default ColorPalette
