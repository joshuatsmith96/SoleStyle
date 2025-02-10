//Import dependencies
import './App.css'
import { Route, Routes } from 'react-router'

//Pages
import Home from './pages/Home'
import Error from './pages/Error'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
