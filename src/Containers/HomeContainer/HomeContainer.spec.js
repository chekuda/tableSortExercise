import React from 'react'
import { shallow } from 'enzyme'

import HomeContainer from './HomeContainer'
import { mockGet } from '../../server/mockFetch'

const DATAFETCHED = [{
  first_name: 'jose', bday: '01/01/01', id: 0
}]

jest.mock('../../server/mockFetch', () => ({
  mockGet: jest.fn()
}))


describe('HomeContainer', () => {
  let component
  beforeEach(() => {
    mockGet.mockImplementation(() => new Promise(resolve => resolve(JSON.stringify([]))))
    component = shallow(<HomeContainer />)
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
    describe('and the data hasnt been fetched', () => {
      mockGet.mockImplementation(() => new Promise(resolve => resolve(JSON.stringify([]))))
      const component = shallow(<HomeContainer />)
      it('page wont be rerendered passing the data fetched to the homePage', () => {
        const page = component.find('HomePage')
        expect(page.props().people.length).toBe(0)
      })
    })
    describe('and the data has been fetched', () => {
      mockGet.mockImplementation(() => new Promise(resolve => resolve(JSON.stringify(DATAFETCHED))))
      const component = shallow(<HomeContainer />)
      it('page should receive the data fetched', () => {
        const page = component.find('HomePage')
        expect(page.props().people.length).toBe(DATAFETCHED.length)
      })
    })
  })
})