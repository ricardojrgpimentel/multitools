import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as cryptoContentActions from '../../actions/cryptoContentActions'
import Sidebar from '../Sidebar'
import Body from '../Body'

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
          <div className="row row-col-no-padding">
            <Sidebar />
            <Body />
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
