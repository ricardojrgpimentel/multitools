import React from 'react'
import { LineChart, Line, Tooltip, Legend, CartesianGrid, XAxis, YAxis } from 'recharts'

class CryptoCheck extends React.Component{

  constructor(){
    super()
    this.state = {
      width: null,
    }
  }

  componentDidMount(){
    const width = document.getElementById('btcChart').clientWidth
    this.setState({
      ...this.state,
      width
    })
  }

  renderGraph(){
    const data02 = [
      { name: 'Page A', uv: 300, pv: 2600, amt: 3400 },
      { name: 'Page B', uv: 400, pv: 4367, amt: 6400 },
      { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
      { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
      { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
      { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
      { name: 'Page G', uv: 189, pv: 4800, amt: 2400 },
    ]

    return(
      <LineChart width={this.state.width - 30} height={300} data={data02} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    )
  }

  render(){

    return(
      <div className="row row-no-padding row-col-no-padding main-content">
        <div className="col-md-12">
          <div className="box" id='btcChart'>
            CryptoCheck
            {this.state.width && this.renderGraph()}
          </div>
        </div>
      </div>
    )
  }
}

export default CryptoCheck