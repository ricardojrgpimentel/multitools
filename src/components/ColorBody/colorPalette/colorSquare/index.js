import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

class ColorSquare extends React.Component{

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

    let bC = this.hexToLuma(this.props.hex) > 0.5 ? 'black' : 'white'

    return(
      <CopyToClipboard text={this.props.hex}>
        <div className='col-4 hvr-grow'>
          <div className='color-square' style={{backgroundColor: this.props.hex}}>
            <p style={{color: bC}}>{this.props.color}</p>
          </div>
        </div>
      </CopyToClipboard>
    )
  }
}

export default ColorSquare
