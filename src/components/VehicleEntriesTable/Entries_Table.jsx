import React from 'react'

function Entries_Table({ Entries }) {
  console.log(Entries)
  if(Entries.length==0)
    return <h2>Vehicles Not Found</h2>
  return (
    <>
      <table style={{ width: '100%' }}>
        <tr style={{ width: '100%' }}>
          <th>Vehicle Type</th>
          <th>Vehicle Number</th>
          <th>Date/Time</th>
          <th>Toll Name</th>
          <th>Tariff</th>
        </tr>
        {Entries.map((entry) => {
          return (
            <tr style={{ width: '100%' }}>
              <td> {entry.VehicleType}</td>
              <td> {entry.VehicleNumber}</td>
              <td> {entry.date}</td>
              <td> {entry.tollName}</td>
              <td> {entry.tariff}</td>
            </tr>
          )
        })}
      </table>
    </>
  )
}

export default Entries_Table
