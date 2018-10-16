import React from 'react'
import { shallow } from 'enzyme'

import Table from './Table'

describe('Table', () => {
  describe('given a Table component', () => {
    it('should render a Table component', () => {
      expect(shallow(<Table />).length).toBe(1)
    })
  })
})