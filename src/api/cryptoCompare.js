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
}

export default cryptoCompare