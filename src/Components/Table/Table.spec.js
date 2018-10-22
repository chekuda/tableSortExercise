import React from 'react'
import { shallow } from 'enzyme'

import Table from './Table'

describe('Table', () => {
  describe('given a Table component', () => {
    it('should render a Table component', () => {
      expect(shallow(<Table />).length).toBe(1)
    })
  })
  describe('given any amount of people', () => {
    let component
    const props = {
      people: [{ first_name: 'jose', bday: '01/01/01', id: 0 }]
    }
    beforeEach(() => {
      component = shallow(<Table {...props}/>)
    })
    it('should render a row per person given', () => {
      expect(component.find('tr').length).toBe(props.people.length)
    })
    it('should render two columns', () => {
      expect(component.find('td').length).toBe(props.people.length * 2)
    })
  })
})