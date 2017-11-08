import React from 'react'
import { GithubPicker } from 'react-color'

class ColorBody extends React.Component{

  constructor(){
    super()
    this.state = {
      background: '#000000',
      text: '#ffffff'
    }
    this.handleColorChange = this.handleColorChange.bind(this)
  }

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

  handleColorChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    let bC = this.hexToLuma(this.state.background) > 0.5 ? 'black' : 'white'
    let tC = this.hexToLuma(this.state.text) > 0.5 ? 'white' : 'black'
    return(
      <div className="row row-no-padding row-col-no-padding main-content">
        <div className="col-md-6">
          <div className="box">
            <p>Contrast Tester</p>
            <div className="row row-no-padding row-col-no-padding">
              <div className="col-md-6">
                <div className="contraster">
                  <div className="color-wrapper">
                    <span className='color-label'>Background</span>
                    <input onChange={this.handleColorChange} className='color-input' name='background' value={this.state.background} size='7' maxLength='7' type="text"/>
                  </div>
                  <div className="color-wrapper">
                    <span className='color-label'>Text</span>
                    <input onChange={this.handleColorChange} className='color-input' name='text' value={this.state.text} size='7' maxLength='7' type="text"/>
                  </div>
                </div>
              </div>
              <div className="col-md-6 color-box-outer">
                <div className="color-box" style={{backgroundColor: this.state.background, color: this.state.text}}>
                  <p className='color-text'>Text</p>
                </div>
              </div>
              <div className="col-md-12 color-result">
                {bC === tC ? 'Good Contrast' : 'Bad Contrast'}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box color-pickers">
            <p>Text</p>
            <GithubPicker 
              triangle={'hide'}
              width={'100%'}
              onChange={(c,e) => {this.setState({...this.state, text: c.hex})}}
            />
            <p>Background</p>
            <GithubPicker 
              triangle={'hide'}
              width={'100%'}
              onChange={(c,e) => {this.setState({...this.state, background: c.hex})}}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ColorBody 