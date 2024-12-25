import { Link, NavLink, useLocation, useNavigate } from "react-router"
import logo from "../assets/mechanic.gif"
import { useContext, useEffect, useState} from "react"
import UserContext from "../Context/AuthContext"
import { Button, toast } from "keep-react"
import {SwitchComponent} from "./ToogleSwtich"

function Navbar() {
   const {pathname}= useLocation()
   const {user ,LogOut ,setUser,setIsloading} = useContext(UserContext)


const navigate = useNavigate();
   const handleLogout = () => {
      LogOut()
      .then(() => {
        setIsloading(false)  
            setUser(null);
            navigate("/");
            toast.warning("Logged Out Successfully");
          })
          .catch((err) => {
            setIsloading(false);
            toast.error(err);
          });
   }
 
   useEffect(() => {
     const DynamicTitle = {
       "/": "Home | Home repair",
       "/LoginPage": "Login | Home repair",
       "/services": "services | Home repair",
       "/service-To-Do": "Service_To_Do | Home repair",
       "/manage-service": "Manage_service | Home repair",
       "/add-service": "Add_service | Home repair",
       "/booked-services": "booked-services | Home repair",
     };
     document.title = DynamicTitle[pathname] || "Home repair";
   }, [pathname]);

    const [selectedValue, setSelectedValue] = useState("");
    const handleChange = (value) => {
      setSelectedValue(value);
      navigate(value);
    }

    const navitems = <>
     <NavLink to={'/'}>
     <li><a>Home</a></li>
     </NavLink>
     <NavLink to={'/services'}>
     <li ><a>Services</a></li>
     </NavLink>
    

{user && (
        <select 
          value={selectedValue} // Set the value based on state
          onChange={(e)=>handleChange(e.target.value)} // Set the value based on the selected option
          className="p-2  dark:bg-metal-700 dark:border-metal-700 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-metal-500 dark:text-metal-100"
        >
          <option value="" selected disabled>Dashboard</option>
          <option value="/add-service">Add Service</option>
          <option value="/manage-service">Manage Service</option>
          <option value="/booked-services">Booked Services</option>
          <option value="/service-To-Do">Service To-Do</option>
         
        </select>
      )}

<SwitchComponent/>
  </>


    
  return (
    <div className="navbar container mx-auto py-4 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn p-2 btn-ghost lg:hidden">
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
        className="menu font-semibold menu-sm dropdown-content space-y-2 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navitems}
      </ul>
    </div>
    <div className="flex items-center">
      <img src={logo} className=" dark:rounded-lg w-12 md:w-16" alt="Home_repair"  />
    <Link to={'/'} className="btn text-green-500 text-xl btn-ghost p-2 dark:text-metal-300 md:text-3xl font-bold font-berkshire">Home repair</Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu flex items-center space-x-4 font-semibold menu-horizontal px-1">
     {navitems}
    </ul>
  </div>
  <div className="navbar-end">
    {user ? <>
      <div className="flex items-center space-x-2">
        
        <img className=" rounded-full h-12  shadow-lg w-12" src={user.photoURL} alt=""  />
        <Button  onClick={handleLogout} className="bg-rose-500 px-2 ">LogOut</Button>
      </div>
    </> : <>
    <Link to={'/LoginPage'} className="btn">Login</Link>
    
    </>}
    
  </div>
</div>
  )
}

export default Navbar