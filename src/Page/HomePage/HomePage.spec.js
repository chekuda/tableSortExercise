import React from 'react'
import { shallow } from 'enzyme'

import HomePage from './HomePage'

describe('Home Page', () => {
  describe('given Homepage component', () => {
    it('should render HomePage component', () => {
      const component = shallow(<HomePage />)
      expect(component.length).toBe(1)
    })
  })
})