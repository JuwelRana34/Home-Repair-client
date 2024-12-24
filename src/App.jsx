import './App.css'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { useContext } from 'react'
import ThemeContext from './Context/ThemeProvider'
function App() {
  const {theme } = useContext(ThemeContext)

  return (
    <div className={`${theme === "dark"? "dark" : "bg-[#F8F9FA] "}`}>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
