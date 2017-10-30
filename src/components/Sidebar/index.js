import React from 'react'

class Sidebar extends React.Component{
    render(){
        return (
            <div className="col-md-3 sidebar">
                <header className='header h-blue'>
                <h1 className="site-title">Crypto Convert <span className='site-subtitle'> - Cryptocurrencies</span></h1>
                </header>
            </div>
        )
    }
}

export default Sidebar