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
      .then((res) => {
        console.log(res);
        navigate(state ? state :  '/')
      })
      .catch((err) => console.log(err));
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

      
      <div className="card  bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
        <form onSubmit={Login} className="card-body p-5">
         <h1 className="text-3xl font-bold text-center text-orange-600">Login</h1>
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
            <button className="btn text-md">Login</button>
          </div>
        </form>
        <Divider className="mb-2 text-lg w-[80%] mx-auto" variant="center">or</Divider>
        <Button onClick={GoogleLoginf} className=" hover:bg-slate-50 space-x-2 mb-5 w-[80%] mx-auto border text-gray-800 ">
           <img className="w-6" src="https://cdn-icons-png.flaticon.com/128/720/720255.png" alt=""  />
           <h1>Login with Google </h1> 
           
           </Button>

           <h1 className="text-center py-2 font-semibold text-gray-600">you haven&apos;t account? <Link className="text-blue-600" to={'/signup'}> registration </Link > </h1>
      </div>
 
  )
}

export default LoginPage