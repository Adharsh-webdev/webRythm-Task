

import './App.css'
import Blackseal from './Components/Blackseal/Blackseal'
import Contact from './Components/Contact/Contact'
import Demo from './Components/Demo/Demo'
import Explore from './Components/Explore/Explore'
import Footer from './Components/Footer/Footer'
import Great from './Components/GreatnessSection/Great'
import Navbar from './Components/Header/Navbar'
import Hero from './Components/Hero/Hero'
import Resale from './Components/Resale/Resale'
import Products from './Components/ShopProducts/Products'


function App() {
 

  return (
  <>
  <Navbar/>
  <Hero/>
  <Blackseal/>
  <Demo/>
  <Products/>
  <Explore/>
  <Resale/>
  <Great/>
  <Contact/>
  <Footer/>
 
  </>
  )
}

export default App
