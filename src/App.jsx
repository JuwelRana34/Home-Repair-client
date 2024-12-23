import './App.css'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar'
function App() {

  return (
    <div className='bg-[#F8F9FA]'>
    <Navbar/>
    <Outlet/>
    </div>
  )
}

export default App
