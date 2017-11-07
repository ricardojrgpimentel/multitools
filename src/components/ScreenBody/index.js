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

  render(){

    let dimensions = this.ratio2css(window.screen.width, window.screen.height)
    
    let recWidth = dimensions.width
    let recHeight = dimensions.height
    let recLineHeight = dimensions.lineHeight

    return(
      <div className="row row-no-padding row-col-no-padding main-content">
        <div className="col-md-6">
          <div className="box row">
            <div className="col-md-6">
              <div className='tv' style={{width: recWidth, height: recHeight}}>
                <span style={{lineHeight: recLineHeight}}>Screen</span>
              </div>
            </div>
            <div className="col-md-6">
              Screen Ratio Calculator

            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box">
            <p>Screen Resolution: {window.screen.width}x{window.screen.height}</p>
            <p>Aspect Ratio: {this.reduceRatio(window.screen.width, window.screen.height)}</p>
            <p>Color Depth: {window.screen.colorDepth}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ScreenBody