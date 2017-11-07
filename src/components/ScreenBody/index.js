import React from 'react'

class ScreenBody extends React.Component{

  constructor(){
    super()
    this.state = {
      width: window.screen.width,
      height: window.screen.height
    }
  }

  reduceRatio(width, heigth) {
    let mdc, aux, divisor
    if (width === heigth)
      return '1 : 1'
    // make width always the large number, to the left
    if (+width < +heigth) {
      aux = width
      width = heigth
      heigth = aux;
    }
    mdc = (a, b) => {
      if (b === 0)
        return a
      return mdc(b, a % b)
    }
    divisor = mdc(+width, +heigth)
    return 'undefined' === typeof aux ? (width / divisor) + ' : ' + (heigth / divisor) : (heigth / divisor) + ' : ' + (width / divisor)
  }

  ratio2css(num, den) {
    let width, height;
    if (+num > +den) {
        width = 150
        height = this.solve(width, undefined, num, den)
    } else {
        height = 150
        width = this.solve(undefined, height, num, den)
    }
    return {
        width: width + 'px',
        height: height + 'px',
        lineHeight: height + 'px'
    }
  }

  solve(width, height, num, den) {
      // solve for width
      if (undefined !== width) {
          return Math.round(width / (num / den))
      }
      // solve for height
      else if (undefined !== height) {
          return Math.round(height * (num / den))
      } else {
          return undefined
      }
  }

  handleSize(e, field){
    const RexNumberCheck = /^[0-9]*$/
    if(e.target.value === '' || RexNumberCheck.test(e.target.value)){
      if(field === 'width'){
        this.setState({
          ...this.state,
          width: e.target.value
        })
      }
      else{
        this.setState({
          ...this.state,
          height: e.target.value
        })
      }
    }
  }

  render(){

    let dimensions = this.ratio2css(this.state.width, this.state.height)
    
    let recWidth = dimensions.width
    let recHeight = dimensions.height
    let recLineHeight = dimensions.lineHeight

    return(
      <div className="row row-no-padding row-col-no-padding main-content">
        <div className="col-md-6">
          <div className="box row">
            <div className="col-md-6 total-center">
              <div className='tv' style={{width: recWidth, height: recHeight}}>
                <span style={{lineHeight: recLineHeight}}>Screen</span>
              </div>
            </div>
            <div className="col-md-6">
              Screen Ratio Calculator
              <div className="resolution-input-wrapper">
                <input onChange={(e) => {this.handleSize(e, 'width')}} name='width' value={this.state.width} type="text"/> 
                x 
                <input onChange={(e) => {this.handleSize(e, 'height')}} name='height' value={this.state.height} type="text"/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box">
            <p>Screen Resolution: {this.state.width}x{this.state.height}</p>
            <p>Aspect Ratio: {this.reduceRatio(this.state.width, this.state.height)}</p>
            <p>Color Depth: {window.screen.colorDepth}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ScreenBody