import React from 'react'

import './Table.scss'

const Table = ({ people = [] }) =>
  <table>
    <tbody>
      {
        people.map(({ first_name = '', bday = '', id }, index) =>
          <tr key={id || index}>
            <td className="name">{first_name}</td>
            <td className="bday">{bday}</td>
          </tr>
        )
      }
    </tbody>
  </table>

export default Table