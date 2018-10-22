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
  
  sortByName(prev, next) {
    return prev.first_name > next.first_name ? 1 : 0
  }
  sortByAge(prev, next) {
    return new Date(prev.bday).toString() > new Date(next.bday).toString() ? 1 : 0
  }

  sortBy = ({ target }) => {
    const { value } = target
    const newArray = [...this.state.people]
    console.log(value === 'name')
    const currentDisplay = value === 'name'
      ? newArray.sort(this.sortByName)
      : newArray.sort(this.sortByAge)
    this.setState({
      people: currentDisplay
    })
  }

  render(){
    return <HomePage
      people={this.state.people}
      sortBy={this.sortBy}
      />
  }
}

export default HomeContainer