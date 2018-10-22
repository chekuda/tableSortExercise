import React from 'react'
import { shallow } from 'enzyme'

import HomePage from './HomePage'

const PEOPLE = [{
  first_name: 'jose', bday: '01/01/01', id: 0
}]

describe('Home Page', () => {
  describe('given Homepage component', () => {
    it('should render HomePage component', () => {
      const component = shallow(<HomePage />)
      expect(component.length).toBe(1)
    })
    it('should render a title', () => {
      const component = shallow(<HomePage />)
      expect(component.find('.title').length).toBe(1)
    })
    it('should render filter buttons', () => {
      const component = shallow(<HomePage />)
      expect(component.find('.sort-section').length).toBe(1)
      expect(component.find('.sort-name').length).toBe(1)
      expect(component.find('.sort-age').length).toBe(1)
    })
    describe('when trying to render the table component', () => {
      it('should render the table component if people props are passed', () => {
        const component = shallow(<HomePage people={PEOPLE}/>)
        expect(component.find('Table').length).toBe(1)
      })
      it('shouldnt return Table component is people are not passed yet', () => {
        const component = shallow(<HomePage />)
        expect(component.find('Table').length).toBe(0)
      })
    })
    describe('when click on sort by name', () => {
      it('shortBy should be called', () => {
        const shortBy = jest.fn()
        const component = shallow(<HomePage shortBy={shortBy}/>)
        component.find('.sort-name').simulate('click')
        expect(shortBy).toHaveBeenCalled()
      })
    })
    describe('when click on sort by age', () => {
      it('shortBy should be called', () => {
        const shortBy = jest.fn()
        const component = shallow(<HomePage shortBy={shortBy}/>)
        component.find('.sort-age').simulate('click')
        expect(shortBy).toHaveBeenCalled()
      })
    })
  })
})