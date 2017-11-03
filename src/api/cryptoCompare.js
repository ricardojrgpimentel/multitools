class cryptoCompare {

  static coinList(){
    const request = new Request('https://min-api.cryptocompare.com/data/all/coinlist', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    })
    return fetch(request).then(response => {
      return response.json()
    }).catch(error => {
      throw(error)
    })
  }

  static coinValue(coin){
    const request = new Request(`https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=BTC,USD,EUR`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    })
    return fetch(request).then(response => {
      return response.json()
    }).catch(error => {
      throw(error)
    })
  }
}

export default cryptoCompare