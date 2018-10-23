import React, { Component } from 'react'

import HomePage from '../../Pages/HomePage'
import { mockGet } from '../../server/mockFetch'
import { connect } from 'react-redux'

import { sortList, saveView } from '../../redux/reducers/userReducer'

export class HomeContainer extends Component {
  state = { people: [] }

  getData = () => {
    mockGet()
      .then(data =>
        this.props.saveView(JSON.parse(data))
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
    const { sortList, saveView } = this.props
    const { value } = target
    const newArray = [...this.props.user.currentView]
    const currentDisplay = value === 'name'
      ? newArray.sort(this.sortByName)
      : newArray.sort(this.sortByAge)

    sortList(value)
    saveView(currentDisplay)
  }

  render(){
    return <HomePage
      people={this.props.user.currentView}
      sortBy={this.sortBy}
      sortEnabled={this.props.user.sortBy}
      />
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  sortList: sortBy => dispatch(sortList(sortBy)),
  saveView: currentView => dispatch(saveView(currentView))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)