//Import dependencies
import './App.css'
import { Route, Routes, ScrollRestoration } from 'react-router'
import SmallNavBar from './components/Navigation/SmallNavBar'
import MediumNavBar from './components/Navigation/MediumNavBar'
import LargeNavBar from './components/Navigation/LargeNavBar'

//Pages
import Home from './pages/Home'
import Error from './pages/Error'
import ProductPage from './pages/ProductPage'
import Favorites from './pages/Favorites'
import CategoryPage from './pages/CategoryPage'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router'

function App() {

  const location = useLocation();

  useEffect(() => {
    //Runs on every render
    window.scrollTo(0, 0);
    console.log("Test")
  }, [location]);

  return (
    <div className="App pt-41 md:pt-29 lg:pt-15">
      <SmallNavBar />
      <MediumNavBar />
      <LargeNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/favorites" element={<CategoryPage />}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
        <Route path="/category/:id" element={<CategoryPage/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
