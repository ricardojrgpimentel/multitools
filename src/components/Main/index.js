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

class Main extends Component {

  render() {
    let title
    switch(this.props.location.pathname){
      case '/':
        title = 'Home'
        break
      case '/cryptoconverter':
        title = 'Crypto Converter'
        break
      case '/timeconverter':
        title = 'Timestamp Converter'
        break
      case '/ratiocalculator':
        title = 'Screen Ratio Calculator'
        break
      case '/colortools':
        title = 'Color Tools'
        break
      case '/cryptostats':
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
              <Route exact path={'/'} component={Body}/>
              <Route path={'/cryptoconverter'} component={CryptoBody}/>
              <Route path={'/timeconverter'} component={TimeBody}/>
              <Route path={'/ratiocalculator'} component={ScreenBody}/>
              <Route path={'/colortools'} component={ColorBody}/>
              <Route path={'/cryptostats'} component={CryptoCheck}/>
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
