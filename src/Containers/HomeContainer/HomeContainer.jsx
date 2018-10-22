import React, { Component } from 'react'

import HomePage from '../../Pages/HomePage'
import { mockGet } from '../../server/mockFetch'

class HomeContainer extends Component {
  state = { people: [] }

  getData = () => {
    mockGet()
      .then(data =>
        this.setState({ people: JSON.parse(data) })
      )
  }

  componentDidMount(){
    this.getData()
  }

  render(){
    return <HomePage people={this.state.people}/>
  }
}

export default HomeContainer