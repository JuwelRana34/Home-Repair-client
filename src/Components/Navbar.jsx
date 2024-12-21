import { Link, NavLink, useLocation, useNavigate } from "react-router"
import logo from "../../public/mechanic.gif"
import { useContext, useEffect} from "react"
import UserContext from "../Context/AuthContext"
import { Button, toast } from "keep-react"

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

    const navitems = <>
     <NavLink to={'/'}>
     <li><a>Home</a></li>
     </NavLink>
     <NavLink to={'/services'}>
     <li ><a>Services</a></li>
     </NavLink>
    

     {user && <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className={` p-2 flex items-center rounded-btn `}>Dashboard</div>
        <ul
          tabIndex={0}
          className="menu dropdown-content text-black bg-base-100 border rounded-lg mt-4 w-52 p-2 shadow">
          <Link to={'/add-service'}>Add Service</Link>
          <Link to={'/manage-service'}>Manage Service</Link>
          <Link to={'/booked-services'}>Booked-Services</Link>
        <Link to={'/service-To-Do'}>Service-To-Do</Link>
        </ul>
      </div> } 
     
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
    <div className="flex items-center">
      <img src={logo} className=" w-12 md:w-16" alt="Home_repair"  />
    <a className="btn btn-ghost  md:text-xl font-bold">Home repair</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navitems}
    </ul>
  </div>
  <div className="navbar-end">
    {user ? <>
      <div className="flex items-center space-x-2">
        
        <img className=" rounded-full w-12" src={user.photoURL} alt=""  />
        <Button  onClick={handleLogout} className="bg-rose-500">LogOut</Button>
      </div>
    </> : <>
    <Link to={'/LoginPage'} className="btn">Login</Link>
    
    </>}
    
  </div>
</div>
  )
}

export default Navbar