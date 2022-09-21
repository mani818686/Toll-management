import logo from './logo.svg'
import './App.css'
import Nav from './components/nav'
import VehicleTable from './components/vechicles_table'

function App() {
  return (
    <div>
      <Nav />
      <div className="main-content">
        <VehicleTable />
      </div>
    </div>
  )
}

export default App
