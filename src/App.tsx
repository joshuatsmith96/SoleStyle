//Import dependencies
import './App.css'
import { Route, Routes } from 'react-router'
import SmallNavBar from './components/Navigation/SmallNavBar'
import MediumNavBar from './components/Navigation/MediumNavBar'
import LargeNavBar from './components/Navigation/LargeNavBar'

//Pages
import Home from './pages/Home'
import Error from './pages/Error'
import ProductPage from './pages/ProductPage'
import Favorites from './pages/Favorites'
import CategoryPage from './pages/CategoryPage'

function App() {

  return (
    <div className="App pt-41 md:pt-29 lg:pt-15">
      <SmallNavBar />
      <MediumNavBar />
      <LargeNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
        <Route path="/category/:id" element={<CategoryPage/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
