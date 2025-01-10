import { useContext } from "react"
import UserContext from "../Context/AuthContext"
import { Link, useNavigate } from "react-router";
import { Button, Divider, toast } from 'keep-react'
import { useLocation } from "react-router";
function LoginPage() {
  const {GoogleLogin,login} = useContext(UserContext)
  const {state} = useLocation()
  const navigate = useNavigate();
  const Login = (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    login(email.value, password.value)
      .then(() => {
        toast.success(" Login Successful");
        navigate(state ? state :  '/')
      })
      .catch((err) => {
        toast.error(`${err}`);
        console.log(err)});
    e.target.reset();
  };

  const GoogleLoginf = (e) => {
    e.preventDefault();
    GoogleLogin()
     .then(() => {
        navigate(state ? state :  '/')
        toast.success('Login Successful')
      })
     .catch((err) => {
      toast.error(err)
     });
  }

  return (
    <>
    
    <div style={{ backgroundImage: "url(https://img.freepik.com/free-photo/young-cute-family-repairs-room_1157-24899.jpg?ga=GA1.1.1974322130.1689523785&semt=ais_hybrid)"}} className="flex  justify-center items-center bg-no-repeat bg-cover bg-blend-overlay bg-black/40">
      {/* <div className=" bg-orange-500">
        <img  src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?ga=GA1.1.1974322130.1689523785&semt=ais_hybrid" alt="" srcset="" />
      </div> */}

      
      <div className="card  my-10 h-full backdrop-blur-md bg-white/40 w-full max-w-sm mx-auto shrink-0 dark:bg-metal-800/45 shadow-lg">


        
        <form onSubmit={Login} className="card-body p-5">
         <h1 className="text-3xl font-bold text-center dark:text-metal-300 text-metal-600">Login</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-2">
            <button className="btn border-none bg-blue-500 hover:bg-blue-500 dark:hover:bg-metal-700 text-white dark:bg-metal-700 text-md">Login</button>
          </div>
        </form>
        <Divider className="mb-2 text-lg w-[80%] mx-auto" variant="center">or</Divider>
        <Button onClick={GoogleLoginf} className=" hover:bg-slate-50 dark:hover:bg-metal-700 space-x-2 mb-5 w-[80%] mx-auto border text-gray-800 ">
           <img className="w-6" src="https://cdn-icons-png.flaticon.com/128/720/720255.png" alt=""  />
           <h1 className="dark:text-metal-300">Login with Google </h1> 
           
           </Button>

           <h1 className="text-center py-2 font-semibold text-gray-600 dark:text-metal-300">you haven&apos;t account? <Link className="text-blue-600 dark:text-white dark:underline " to={'/signup'}> registration </Link > </h1>
      </div>
    </div>
    </>
    

      
      
 
  )
}

export default LoginPage