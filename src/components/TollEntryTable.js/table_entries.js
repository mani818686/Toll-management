import React from 'react'

function TollEntries({ Entries }) {
  if (Entries.length == 0)
    return <h2 sx={{ width: '350px' }}>Toll Not Found</h2>
  return (
    <>
      <table style={{ width: '100%' }}>
        <tr style={{ width: '100%' }}>
          <th>Toll Name</th>
          <th>CAR/JEEP/VAN</th>
          <th>LCV</th>
          <th>Truck/BUS</th>
          <th>Heavy VEHICLE</th>
        </tr>
        {Entries.map((entry) => {
          return (
            <tr style={{ width: '100%' }}>
              <td> {entry.tollName}</td>
              <td>
                {entry.data[0].SingleJourneyFee}/
                {entry.data[0].ReturnJourneyFee}
              </td>
              <td>
                {entry.data[1].SingleJourneyFee}/
                {entry.data[1].ReturnJourneyFee}
              </td>
              <td>
                {entry.data[2].SingleJourneyFee}/
                {entry.data[2].ReturnJourneyFee}
              </td>
              <td>
                {entry.data[3].SingleJourneyFee}/
                {entry.data[3].ReturnJourneyFee}
              </td>
            </tr>
          )
        })}
      </table>
    </>
  )
}

export default TollEntries
