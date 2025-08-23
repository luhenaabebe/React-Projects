import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as  Router, Routes } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Menus from './components/pages/menus/Menus'
import Footer from './components/footer/Footer'
import Home from './components/pages/home/Home'
function App() {
 

  return (
    <div className="flex flex-col w-full overflow-hidden bg-neutral-100">
      <Router>
       <NavBar />
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/menus" element={<Menus />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
