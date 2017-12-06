import React from 'react'
import { Link } from 'react-router-dom'

class Body extends React.Component{
  render(){
    return(
      <div className="row row-no-padding row-col-no-padding main-content">
        <div className="col-md-12">
          <div className="box">
            <h2 className='main-title'>Choose one of the following tools</h2>
            <div className="row row-no-padding row-col-no-padding">
              <div className="col-md-3 category-wrapper">
                <Link to={`${process.env.PUBLIC_URL}/cryptoconverter`}>
                  <img className='icon-category' src={`${process.env.PUBLIC_URL}/icons/ecommerce_euro.svg`} alt=""/>
                  <h3 className='title'>Crypto Coins Converter</h3>
                </Link>
              </div>
              <div className="col-md-3 category-wrapper">
                <Link to={`${process.env.PUBLIC_URL}/timeconverter`}>
                  <img className='icon-category' src={`${process.env.PUBLIC_URL}/icons/basic_clock.svg`} alt=""/>
                  <h3 className='title'>Timestamp Converter</h3>
                </Link>
              </div>
              <div className="col-md-3 category-wrapper">
                <Link to={`${process.env.PUBLIC_URL}/ratiocalculator`}>
                  <img className='icon-category' src={`${process.env.PUBLIC_URL}/icons/basic_display.svg`} alt=""/>
                  <h3 className='title'>Screen Ratio Calculator</h3>
                </Link>
              </div>
              <div className="col-md-3 category-wrapper">
                <Link to={`${process.env.PUBLIC_URL}/colortools`}>
                  <img className='icon-category' src={`${process.env.PUBLIC_URL}/icons/software_eyedropper.svg`} alt=""/>
                  <h3 className='title'>Color Tools</h3>
                </Link>
              </div>
            </div>
            <div className="credits">
              <p>Copyright 2017</p>
              <p>Icons by linea.io</p>
              <p>Made with React by Ricardo Pimentel</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Body
