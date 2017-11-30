import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as cryptoContentActions from '../../../actions/cryptoContentActions'

class Book extends React.Component{

  componentWillMount(){
    this.props.actions.fetchCoinSnapshot(this.props.coin.Name)
  }

  render(){
    return(
      <div className='col-12'>
        <div className='CryptoCheck'>
          <div className='col-content coin-name'>
            <img className='coin-logo' src={`https://cryptocompare.com${this.props.coin.ImageUrl}`} alt={this.props.coin.Name}/>
            <p>{this.props.coin.FullName}</p>
          </div>
          <div className='col-content coin-value'>
            <p>
              {this.props.coinSnapshot[`${this.props.coin.Name}Snapshot`] &&
              this.props.coinSnapshot[`${this.props.coin.Name}Snapshot`].DISPLAY[this.props.coin.Name].EUR.PRICE}
            </p>
            <p>
              {this.props.coinSnapshot[`${this.props.coin.Name}Snapshot`] &&
              this.props.coinSnapshot[`${this.props.coin.Name}Snapshot`].DISPLAY[this.props.coin.Name].EUR.CHANGE24HOUR}
            </p>
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
    coinSnapshot: state.cryptoContentReducer,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)
