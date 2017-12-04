import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as cryptoContentActions from '../../../actions/cryptoContentActions'

class Book extends React.Component{

  componentWillMount(){
    this.props.actions.fetchCoinSnapshot(this.props.coin.Name)
  }

  moveEuroSymbol(value){
    return `${value.replace('€', '').replace('&euro;', '')}€`
  }

  checkValueNegative(value){
    let newValue = parseFloat(this.moveEuroSymbol(value))
    return <span style={newValue >= 0 ? {color: 'green'}: {color: 'red'}}>{newValue}€</span>
  }

  render(){
    console.log(this.props.coinSnapshot)
    
    return(
      <tr>
        <td><img className='coin-logo' src={`https://cryptocompare.com${this.props.coin.ImageUrl}`} alt={this.props.coin.Name}/></td>
        <td>{this.props.coin.FullName}</td>
        <td className='center'>{this.props.coinSnapshot[`${this.props.coin.Name}Snapshot`] &&
          this.moveEuroSymbol(this.props.coinSnapshot[`${this.props.coin.Name}Snapshot`].DISPLAY[this.props.coin.Name].EUR.PRICE)}</td>
        <td className='right'>{this.props.coinSnapshot[`${this.props.coin.Name}Snapshot`] &&
          this.checkValueNegative(this.props.coinSnapshot[`${this.props.coin.Name}Snapshot`].DISPLAY[this.props.coin.Name].EUR.CHANGE24HOUR)}</td>
      </tr>
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
