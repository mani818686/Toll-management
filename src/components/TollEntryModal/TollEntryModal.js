import React, { useState } from 'react'
import '../../styles/Modal.css'

function TollEntryModal({ handleModal }) {
  const [tollName, setTollName] = useState('')
  const [types, setTypes] = useState(new Map())

  const handleClose = () => {
    document.getElementById('myModal').style.display = 'none'
    handleModal(false)
  }

  const handleAdd = () => {
    let data = new Map()

    let totalFares = []
    let fares = Array.from(document.getElementsByClassName('input'))
    for (let i = 0; i < fares.length - 1; i += 2) {
      totalFares.push([fares[i].value, fares[i + 1].value])
    }

    console.log(types)
    let TotalData = []
    for (let i = 0; i <= 3; i++) {
      let json = {
        type: types[i],
        SingleJourneyFee: totalFares[i][0],
        ReturnJourneyFee: totalFares[i][1],
      }
      TotalData.push(json)
      console.log(json)
    }
    let entries = localStorage.Tolls
    let newEntry = { tollName: tollName, data: TotalData }
    console.log(JSON.stringify([newEntry]), entries)

    if (!localStorage.key('Tolls')) {
      localStorage.setItem('Tolls', JSON.stringify([newEntry]))
    } else {
      let totalEntries = JSON.parse(entries)
      totalEntries.push(newEntry)
      console.log(totalEntries)
      localStorage.Tolls = JSON.stringify(totalEntries)
    }
    handleClose()
    window.location.reload()
  }

  const handleName = (e) => {
    setTollName(e.target.value)
  }
  const handleToll = (e, index) => {
    types[index] = e.target.value
    setTypes(types)
    // VehicleTypes.splice(value, 1)

    //remove already selected type
  }

  return (
    <div id="myModal" className="modal">
      <div className="modal-content" style={{ width: '65%', height: '50%' }}>
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <div>
          <h4>Add New Toll</h4>

          <div className="form-select">
            <label>Toll Name </label>
            <input type="text" onChange={handleName} />
          </div>

          <div className="form-select">
            <label>Vehicle fare details*</label>
            <div className="types">
              <div>
                <select onChange={(e) => handleToll(e, 0)}>
                <option value="">Select Vehicle Type</option>
                  {VehicleTypes.map((type) => {
                    return (
                      <>
                        <option value={type}>{type}</option>
                      </>
                    )
                  })}
                </select>
                <input
                  className="input"
                  placeholder="Single Journey"
                  type="number"
                />
                <input
                  className="input"
                  placeholder="Return Journey"
                  type="number"
                />
              </div>
              <div>
                <select onChange={(e) => handleToll(e, 1)}>
                <option value="">Select Vehicle Type</option>
                  {VehicleTypes.map((type) => {
                    return (
                      <>
                        <option value={type}>{type}</option>
                      </>
                    )
                  })}
                </select>
                <input
                  type="number"
                  placeholder="Single Journey"
                  className="input"
                />
                <input
                  type="number"
                  placeholder="Return Journey"
                  className="input"
                />
              </div>
              <div>
                <select onChange={(e) => handleToll(e, 2)}>
                <option value="">Select Vehicle Type</option>
                  {VehicleTypes.map((type) => {
                    return (
                      <>
                        <option value={type}>{type}</option>
                      </>
                    )
                  })}
                </select>
                <input
                  type="number"
                  placeholder="Single Journey"
                  className="input"
                />
                <input
                  type="number"
                  placeholder="Return Journey"
                  className="input"
                />
              </div>
              <div>
                <select onChange={(e) => handleToll(e, 3)}>
                  <option value="">Select Vehicle Type</option>
                  {VehicleTypes.map((type) => {
                    return (
                      <>
                        <option value={type}>{type}</option>
                      </>
                    )
                  })}
                </select>
                <input type="number" placeholder="Single Journey" className="input" />
                <input type="number"  placeholder="Return Journey" className="input" />
              </div>
            </div>
          </div>
          <button onClick={handleAdd}>Add Details</button>
        </div>
      </div>
    </div>
  )
}

export default TollEntryModal

let VehicleTypes = ['Car/Jeep/Van', 'LCV', 'Truck/Bus', 'Heavy Vehicle']
