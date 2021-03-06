import React from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends React.Component {
  render() {
    return (
      <div className="col-md-3 sidebar">
        <header className='header h-blue'>
          <h1 className="site-title">MultiTools <span className='site-subtitle'> - Alpha 0.1</span></h1>
        </header>
        <div className="multi-menu">
          <div className="link-wrapper">
            <Link className='menu-entry' to={`${process.env.PUBLIC_URL}/`}>
              <h1>Home</h1>
            </Link>
            <Link className='menu-entry' to={`${process.env.PUBLIC_URL}/cryptoconverter`}>
              <h1>Crypto Coins Converter</h1>
            </Link>
            <Link className='menu-entry' to={`${process.env.PUBLIC_URL}/cryptostats`}>
              <h1>Crypto Coins Stats</h1>
            </Link>
            <Link className='menu-entry' to={`${process.env.PUBLIC_URL}/timeconverter`}>
              <h1>Timestamp Converter</h1>
            </Link>
            <Link className='menu-entry' to={`${process.env.PUBLIC_URL}/ratiocalculator`}>
              <h1>Screen Ratio Calculator</h1>
            </Link>
            <Link className='menu-entry' to={`${process.env.PUBLIC_URL}/colortools`}>
              <h1>Color Tools</h1>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar