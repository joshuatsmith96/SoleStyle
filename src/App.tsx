//Import dependencies
import './App.css'
import { Route, Routes } from 'react-router'
import SmallNavBar from './components/Navigation/SmallNavBar'
import MediumNavBar from './components/Navigation/MediumNavBar'
import LargeNavBar from './components/Navigation/LargeNavBar'

//Pages
import Home from './pages/Home'
import Error from './pages/Error'

function App() {

  return (
    <div className="App pt-41 md:pt-29 lg:pt-15">
      <SmallNavBar />
      <MediumNavBar />
      <LargeNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
