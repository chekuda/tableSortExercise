import React from 'react'
import { shallow } from 'enzyme'

import { HomeContainer } from './HomeContainer'
import { mockGet } from '../../server/mockFetch'

jest.mock('../../server/mockFetch', () => ({
  mockGet: jest.fn()
}))

const mockProps = {
  user: {
    currentView: [
      { first_name: 'jose', bday: '01/01/01', id: 0 },
      { first_name: 'rafa', bday: '01/02/01', id: 1 },
      { first_name: 'farra', bday: '02/01/01', id: 2 }
    ],
    sortBy: ''
  },
  sortList: jest.fn(),
  saveView: jest.fn()
}

describe('HomeContainer', () => {
  let component
  beforeEach(() => {
    mockGet.mockImplementation(() => new Promise(resolve => resolve(JSON.stringify([]))))
    component = shallow(<HomeContainer {...mockProps}/>)
  })
  describe('when trying to render the HomeContainer', () => {
    it('should render the component', () => {
      expect(component.length).toBe(1)
    })
    it('should render the page', () => {
      expect(component.find('HomePage').length).toBe(1)
    })
  })
  describe('when trying to fetch the data', () => {
    describe('and the data has been fetched', () => {
      mockGet.mockImplementation(() => new Promise(resolve => resolve(JSON.stringify([]))))
      const component = shallow(<HomeContainer {...mockProps}/>)
      it('should save current view within the store', () => {
        expect(mockProps.saveView).toHaveBeenCalled()
      })
    })
  })
  describe('when trying to sort by name', () => {
    let component
    let newInstance
    beforeEach(() => {
      mockGet.mockImplementation(() => new Promise(resolve => resolve(JSON.stringify([]))))
      component = shallow(<HomeContainer {...mockProps }/>)
      newInstance = component.instance()
    })
    it('sortByName should be called', () => {
      newInstance.sortByName = jest.fn()
      newInstance.sortBy({ target: { value: 'name' } })
      expect(newInstance.sortByName).toHaveBeenCalled()
    })
    it('should save current view within the store', () => {
      newInstance.sortBy({ target: { value: 'name' } })
      expect(mockProps.saveView).toHaveBeenCalledWith([
        { first_name: 'farra', bday: '02/01/01', id: 2 },
        { first_name: 'jose', bday: '01/01/01', id: 0 },
        { first_name: 'rafa', bday: '01/02/01', id: 1 }
      ])
    })
    it('should save sortBy within the store', () => {
      newInstance.sortBy({ target: { value: 'name' } })
      expect(mockProps.sortList).toHaveBeenCalledWith('name')
    })
  })
  describe('when trying to sort by age', () => {
    let component
    let newInstance
    beforeEach(() => {
      mockGet.mockImplementation(() => new Promise(resolve => resolve(JSON.stringify([]))))
      component = shallow(<HomeContainer {...mockProps}/>)
      newInstance = component.instance()
    })
    it('should call sortByAge', () => {
      newInstance.sortByAge = jest.fn()
      newInstance.sortBy({ target: { value: 'age' } })
      expect(newInstance.sortByAge).toHaveBeenCalled()
    })
    it('should save current view within the store', () => {
      newInstance.sortBy({ target: { value: 'age' } })
      expect(mockProps.sortList).toHaveBeenCalledWith('age')
    })
  })
})