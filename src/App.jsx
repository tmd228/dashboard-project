import './App.css'
// import ChartCard from './components/ChartCard/ChartCard'
import Navbar from './components/Navbar/Navbar'
// import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './pages/Dashboard/Dashboard'
import NotFound from './pages/NotFound/NotFound'
import Settings from './pages/Settings/Settings'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (<div>
    <Navbar />
    <Routes>
      <Route path='/' element={<h1>home page</h1>} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
  </div>
  )
}

export default App
