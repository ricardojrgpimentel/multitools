import React from 'react'
import ColorPalette from '../colorPalette'
import Colors from './colors.json'

class ColorSwatch extends React.Component{
  render(){
    let Palette = []
    let aux = 1
    for(let colorPallete in Colors){
      Palette.push(<ColorPalette key={aux++} palette={Colors[colorPallete]} color={colorPallete} />)
    }
    return(
      <div className="col-12">
        <div className='box'>
          <div className="row row-no-padding row-col-no-padding">
            {Palette}
          </div>
        </div>
      </div>
    )
  }
}

export default ColorSwatch