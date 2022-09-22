import React, { useState, useEffect } from 'react'
import Entries_Table from './VehicleEntriesTable/Entries_Table'
import VehicleEntryModal from './VehicleEntryModal/VehicleEntryModal'
import TollEntryModal from './TollEntryModal/TollEntryModal'
import TollEntries from './TollEntryTable.js/table_entries'

import filterLogo from '../Icons/filterlogo.png'
import tick from '../Icons/tick.png'

function VehicleTable() {
  const [showModal, setShowModal] = useState(false)
  const [showTollModal, setShowTollModal] = useState(false)
  const [showTolls, setShowTolls] = useState(false)
  const [Entries, setEntries] = useState([])
  const [VehicleEntries, setVehicleEntries] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')

  const handleShowVehicleEntry = (info) => {
    setShowModal(info)
  }

  const handleShowTollEntry = (info) => {
    setShowTollModal(info)
  }

  const handleShowToll = () => {
    setShowTolls(!showTolls)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleFilter = (data) => {
    console.log(data)
    setFilter(data)
  }

  useEffect(() => {
    let tollData, vehicleData
    if (!showTolls) {
      vehicleData = JSON.parse(localStorage.getItem('Vehicles'))
      if (vehicleData) {
        let filteredData = vehicleData.filter(
          (res) =>
            res.VehicleNumber.search(search.trim()) !== -1 &&
            res.tollName.search(filter.trim()) !== -1,
        )
        console.log(filteredData)
        setVehicleEntries(filteredData || [])
        tollData = JSON.parse(localStorage.Tolls)
        setEntries(tollData || [])
      }
    } else {
      tollData = JSON.parse(localStorage.getItem('Tolls'))
      console.log(tollData)
      if (tollData) {
        let filteredData = tollData.filter(
          (res) => res.tollName.search(search.trim()) !== -1,
        )
        setEntries(filteredData || [])
      }
    }
    // console.log(tollData, vehicleData)
  }, [search, showTolls, filter])

  return (
    <>
      <div id="features">
        <div className="row">
          <h4 className="col-3 head">
            {!showTolls ? 'Toll entries/Vehicle entries' : 'Tollgate List'}
          </h4>
          <div className="icon col-1">
            {!showTolls && (
              <div class="dropdown">
                <button style={{ backgroundColor: 'white' }}>
                  <img src={filterLogo} width="20px"></img>
                </button>
                <div class="dropdown-content">
                  <p onClick={() => handleFilter('')}>
                    All{' '}
                    {filter === '' ? (
                      <img className="tick" src={tick}></img>
                    ) : (
                      ''
                    )}
                  </p>
                  {Entries.map((e) => {
                    return (
                      <p onClick={() => handleFilter(e.tollName)}>
                        {e.tollName}{' '}
                        {filter === e.tollName ? <img src={tick}></img> : ''}
                      </p>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
          <div className="icon col-1">
            <input
              type="text"
              value={search}
              style={{ width: '200px', borderRadius: '8px', padding: '5px' }}
              placeholder={!showTolls ? 'search vehicle' : 'search Toll Name'}
              onChange={handleSearch}
            ></input>
          </div>
          <div className="buttons">
            <button type="button" onClick={() => handleShowVehicleEntry(true)}>
              Add vehicle entry
            </button>
            <button type="button" onClick={() => handleShowTollEntry(true)}>
              Add new toll
            </button>
            <button type="button" onClick={handleShowToll}>
              {!showTolls ? 'View all tolls' : 'Back to vehicle logs'}
            </button>
          </div>
        </div>
        {showModal && (
          <VehicleEntryModal
            tolls={Entries}
            handleModal={handleShowVehicleEntry}
          />
        )}
        {showTollModal && <TollEntryModal handleModal={handleShowTollEntry} />}
      </div>
      <div className="table row">
        {!showTolls && <Entries_Table Entries={VehicleEntries} />}
        {showTolls && <TollEntries Entries={Entries} />}
      </div>
    </>
  )
}

export default VehicleTable
