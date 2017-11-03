import React from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends React.Component{
    render(){
        return (
            <div className="col-md-3 sidebar">
                <header className='header h-blue'>
                <h1 className="site-title">Multibox <span className='site-subtitle'> - online tools</span></h1>
                </header>
                <div className="multi-menu">
                    <div className="link-wrapper">
                        <Link className='menu-entry' to={'/'}>
                            <h1>Home</h1>
                        </Link>
                        <Link className='menu-entry' to={'/cryptoconverter'}>
                            <h1>Crypto Coins Converter</h1>
                        </Link>
                        <Link className='menu-entry' to={'/timeconverter'}>
                            <h1>Timestamp Converter</h1>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar