import { Link, NavLink } from "react-router"
import logo from "../../public/mechanic.gif"

function Navbar() {
    const navitems = <>
     <NavLink to={'/'}>
     <li><a>Home</a></li>
     </NavLink>
     <NavLink to={'/services'}>
     <li><a>Services</a></li>
     </NavLink>
     <NavLink >

     <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className=" p-2 flex items-center rounded-btn">Dashboard</div>
        <ul
          tabIndex={0}
          className="menu dropdown-content text-black bg-base-100 border rounded-lg mt-4 w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
 


     </NavLink>
    </>
  return (
    <div className="navbar container mx-auto py-4 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navitems}
      </ul>
    </div>
    <div className="flex items-center space-x-4">
      <img src={logo} className="w-16" alt="Home_repair"  />
    <a className="btn btn-ghost text-xl font-bold">Home repair</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navitems}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to={'/login'} className="btn">Login</Link>
  </div>
</div>
  )
}

export default Navbar