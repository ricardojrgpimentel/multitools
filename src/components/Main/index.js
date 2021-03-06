import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as cryptoContentActions from '../../actions/cryptoContentActions'
import Sidebar from '../Sidebar'
import Body from './Body'
import CryptoBody from '../CryptoBody'
import TimeBody from '../TimeBody'
import ScreenBody from '../ScreenBody'
import ColorBody from '../ColorBody'
import CryptoCheck from '../CryptoCheck'
import Coin from '../Coin'

class Main extends Component {

  render() {
    let title
    switch(this.props.location.pathname){
      case `${process.env.PUBLIC_URL}/`:
        title = 'Home'
        break
      case `${process.env.PUBLIC_URL}/cryptoconverter`:
        title = 'Crypto Converter'
        break
      case `${process.env.PUBLIC_URL}/timeconverter`:
        title = 'Timestamp Converter'
        break
      case `${process.env.PUBLIC_URL}/ratiocalculator`:
        title = 'Screen Ratio Calculator'
        break
      case `${process.env.PUBLIC_URL}/colortools`:
        title = 'Color Tools'
        break
      case `${process.env.PUBLIC_URL}/cryptostats`:
        title = 'Crypto Stats'
        break
      default:
        title = 'Home'
        break
    }

    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row row-col-no-padding">
            <Sidebar />
            <div className="col-md-9 body">
              <header className='header h-white'>
                <h1 className="site-title">{title}</h1>
              </header>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Body}/>
              <Route path={`${process.env.PUBLIC_URL}/cryptoconverter`} component={CryptoBody}/>
              <Route path={`${process.env.PUBLIC_URL}/timeconverter`} component={TimeBody}/>
              <Route path={`${process.env.PUBLIC_URL}/ratiocalculator`} component={ScreenBody}/>
              <Route path={`${process.env.PUBLIC_URL}/colortools`} component={ColorBody}/>
              <Route path={`${process.env.PUBLIC_URL}/cryptostats`} component={CryptoCheck}/>
              <Route path={`${process.env.PUBLIC_URL}/coin/:coin`} component={Coin}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators({...cryptoContentActions}, dispatch)
  }
}

function mapStateToProps(state){
  return {
    response: state.cryptoContentReducer.response,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
