import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home"
import Services from "./Pages/Home/services/Services"
import Blogs from "./Pages/Home/blog/Blogs"
function App() {
  return (
    <>
      <Router>
        <main className="w-full min-h-screen bg-zinc-950 flex flex-col text-zinc-300 overflow-hidden">
          {/* Navbar */}
            <Navbar />
          {/* Routing */}
          <Routes>
             <Route path="/" element={<Home />} /> 
             <Route path="/Services" element={<Services />} /> 
             <Route path="/blogs" element={<Blogs />} /> 
          </Routes>

          {/* Footer */}
            <Footer />

        </main>
      </Router>
    </>
  )
}

export default App
