import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as cryptoContentActions from '../../actions/cryptoContentActions'

class Main extends Component {

	constructor(){
		super()
		this.handleClick =  this.handleClick.bind(this)
	}

	handleClick(){
		console.log('PRESSED')
		this.props.actions.fetchcoinList()
	}

  render() {
    console.log(this.props.response)
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 sidebar">
              <header className='header h-blue'>
                <h1 className="site-title">Crypto Convert</h1>
              </header>
            </div>
            <div className="col-md-9">
            <header className='header h-white'>
              <h1 className="site-title">Crypto Convert</h1>
            </header>
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
