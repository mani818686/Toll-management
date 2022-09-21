import React, { useState } from 'react'
import '../../styles/Modal.css'

function VehicleEntryModal({ handleModal, tolls }) {
  const [tollName, setTollName] = useState('')
  const [VehicleType, setVehicleType] = useState('')
  const [VehicleNumber, setVehicleNumber] = useState('')
  const [tariff, setTariff] = useState('')
  console.log(tolls)
  const handleClose = () => {
    document.getElementById('myModal').style.display = 'none'
    handleModal(false)
  }

  const handleEntry = () => {
    console.log(tollName, VehicleType, VehicleNumber, tariff)
    let d = new Date()
    let latest_date =
      d.getDate() +
      '/' +
      (d.getMonth() + 1) +
      '/' +
      d.getFullYear() +
      ', ' +
      d.getHours() +
      ':' +
      d.getMinutes() +
      ':' +
      d.getSeconds()
    let tollEntry = {
      tollName: tollName,
      VehicleType: VehicleType,
      VehicleNumber: VehicleNumber,
      date: latest_date,
      tariff: tariff,
    }
    let entries = localStorage.getItem('Vehicles')
    console.log(entries, JSON.stringify([tollEntry]))
    if (entries === null) localStorage.Vehicles = JSON.stringify([tollEntry])
    else {
      let totalEntries = JSON.parse(entries)
      console.log(totalEntries)
      totalEntries.push(tollEntry)
      console.log(totalEntries)
      localStorage.Vehicles = JSON.stringify(totalEntries)
    }
    handleClose();
    window.location.reload()
  }

  const handleToll = (e) => {
    setTollName(e.target.value)
  }

  const handleType = (e) => {
    setVehicleType(e.target.value)
  }

  const handleNumber = (e) => {
    setVehicleNumber(e.target.value)
  }

  const handleTariff = (e) => {
    setTariff(e.target.value)
  }

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <div>
          <h4>Add New entry</h4>
          <div className="form-select">
            <label>Select Toll Name *</label>
            <select className="select" value={tollName} onChange={handleToll}>
              <option value=""></option>
              {tolls.map((toll) => {
                return <option value={toll.tollName}>{toll.tollName}</option>
              })}
            </select>
          </div>
          <div className="form-select">
            <label>Select vehicle type *</label>
            <select
              className="select"
              value={VehicleType}
              onChange={handleType}
            >
              <option value=""></option>
              {VehicleTypes.map((type) => {
                return <option value={type}>{type}</option>
              })}
            </select>
          </div>
          <div className="form-select">
            <label>Vehicle Number </label>
            <input type="text" value={VehicleNumber} onChange={handleNumber} />
          </div>
          <div className="form-select">
            <label>Tariff</label>
            <input type="text" required disabled={VehicleNumber!=='' && VehicleType!=='' ? false:true} value={tariff} onChange={handleTariff} />
          </div>
          <button onClick={handleEntry}>Add Entry</button>
        </div>
      </div>
    </div>
  )
}

export default VehicleEntryModal

let VehicleTypes = ['Car/Jeep/Van', 'LCV', 'Truck/Bus', 'Heavy Vehicle']
