import React from 'react'

import Table from '../../Components/Table'

import './Homepage.scss'

const HomePage = ({ people = [] }) =>
  <div className='homepage-container'>
    <header className='title'>
      <h1>List of Users</h1>
    </header>
    <div className='sort-section'>
      <div>
        <label>Name</label>
        <input className='sort-name' type='radio' value='Name'/>
      </div>
      <div>
      <label>Age</label>
      <input className='sort-age' type='radio' value='Age'/>
      </div>
    </div>
    {
      people.length > 0
        ? <main><Table people={people}/></main>
        : null
    }
  </div>

export default HomePage
