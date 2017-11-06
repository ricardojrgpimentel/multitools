import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as cryptoContentActions from '../../actions/cryptoContentActions'

class CryptoBox extends React.Component{

  constructor(){
    super()
      this.state = {
        toConvert: 'EUR',
        firstInput: '',
        secondInput: '',
        lasChanged: null
      }
      this.handleToConvert = this.handleToConvert.bind(this)
      this.convertHandler = this.convertHandler.bind(this)
      this.firstValueHandler = this.firstValueHandler.bind(this)
      this.SecondValueHandler = this.SecondValueHandler.bind(this)
  }

  componentWillMount(){
    this.props.actions.fetchCoinValue(this.props.coin.Name)
  }

  renderCoinValue(){
    return(
      <div className='coin-value-list'>
        <p>EUR: {this.props.coinValue[`${this.props.coin.Name}Value`] ? this.props.coinValue[`${this.props.coin.Name}Value`].EUR : ''}</p>
        <p>USD: {this.props.coinValue[`${this.props.coin.Name}Value`] ? this.props.coinValue[`${this.props.coin.Name}Value`].USD : ''}</p>
        <p>BTC: {this.props.coinValue[`${this.props.coin.Name}Value`] ? this.props.coinValue[`${this.props.coin.Name}Value`].BTC : ''}</p>
      </div>
    )
  }

  convertHandler(field){
    if(field === 'first'){
      this.setState({
        ...this.state,
        secondInput: this.state.firstInput * this.props.coinValue[`${this.props.coin.Name}Value`][this.state.toConvert],
        lasChanged: 'first'
      })
    }
    else{
      this.setState({
        ...this.state,
        firstInput: this.state.secondInput / this.props.coinValue[`${this.props.coin.Name}Value`][this.state.toConvert],
        lasChanged: 'second'
      })
    }
  }

  firstValueHandler(e){
    const RexNumberCheck = /^[0-9.]+$/
    if (e.target.value === '' || RexNumberCheck.test(e.target.value)){
      this.setState({
        ...this.state,
        firstInput: e.target.value
      }, () => this.convertHandler('first'))
    }
  }

  SecondValueHandler(e){
    const RexNumberCheck = /^[0-9.]+$/
    if (e.target.value === '' || RexNumberCheck.test(e.target.value)){
      this.setState({
        ...this.state,
        secondInput: e.target.value
      }, () => this.convertHandler('second'))
    }
  }

  handleToConvert(){
    if(this.state.toConvert === 'EUR'){
      this.setState({
        ...this.state,
        toConvert: 'USD'
      }, () => {this.handleToConvertChanges()})
    }
    else{
      this.setState({
        ...this.state,
        toConvert: 'EUR'
      }, () => {this.handleToConvertChanges()})
    }
  }

  handleToConvertChanges(){
    if(this.state.firstInput !== ''){
      this.convertHandler(this.state.lasChanged)
    }
  }

  renderCoinConverter(){
    return(
      <div className="coin-value-converter">
        <div className="input-wrapper">
          <p className='input-name'>{this.props.coin.Name}</p>
          <input name={this.props.coin.Name} value={this.state.firstInput} onChange={(e) => {this.firstValueHandler(e)}} type="text"/>
        </div>
        <div className="input-wrapper">
          <p onClick={this.handleToConvert} className='input-name'>{this.state.toConvert}</p>
          <input name={this.state.toConvert} value={this.state.secondInput} onChange={(e) => {this.SecondValueHandler(e)}} type="text"/>
        </div>
      </div>
    )
  }

  render(){
    const COIN = this.props.coin

    return(
      <div className="col-md-6">
        <div className="box">
          <h1 className='coin-title'>{COIN.FullName}</h1>
          <p>Algorithm {COIN.Algorithm}</p>
          <div className='coin-info'>
            <img className='coin-logo' src={`https://cryptocompare.com${COIN.ImageUrl}`} alt={COIN.CoinName}/>
            {this.props.coinValue[`${COIN.Name}ValueLoading`] ? <p>Loading...</p> : this.renderCoinValue()}
            {this.renderCoinConverter()}
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
    coinValue: state.cryptoContentReducer,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoBox)