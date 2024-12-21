import { useContext, useState } from "react";
import UserContext from "../Context/AuthContext";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


function SignUp() {
    const { Registration,GoogleLogin, UpdateProfile,setIsloading} = useContext(UserContext);
  const navigate = useNavigate();
  const [isvisible, setIsVisible] = useState(false);


  const HandelRegistration = (e) => {
    e.preventDefault();
    const { name, email, password, PhotoUrl } = e.target;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordRegex.test(password.value)) {
      return toast.error(
        "Password should be at least 6 characters long and contain at least one uppercase letter and one lowercase letter."
      );
    }

    Registration(email.value, password.value)
      .then(() => {
        toast.success("registered successfully");
        UpdateProfile(name.value, PhotoUrl.value);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handelPassIcon = () => {
    setIsVisible((icon) => !icon);
  };



  const googleRegistration = () => {
    GoogleLogin()
      .then(() => {
        toast.success("login successful");
        setIsloading(false);
        navigate("/");
      })
      .catch((err) => {
        toast.error(`${err}`);
        setIsloading(false);
      });
  };

  return (
    <>
    <div className="border rounded-lg md:w-1/2 mx-auto p-4">
      <h1 className="text-center my-5 capitalize font-bold text-xl">
        registration{" "}
      </h1>
      <form onSubmit={HandelRegistration} className=" space-y-4">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            required
            name="name"
            className="grow"
            placeholder="Type your name"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            required
            name="PhotoUrl"
            className="grow"
            placeholder="Type your Photo Url"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            required
            className="grow"
            placeholder="Email"
            name="email"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type={isvisible ? "text" : "password"}
            className="grow"
            name="password"
            placeholder="Password"
          />
          <div onClick={handelPassIcon}>
            {isvisible ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
        </label>

        <p className=" capitalize font-semibold">
          have you account?{" "}
          <Link to="/loginPage" className="text-blue-500 ">
            Login
          </Link>
        </p>

        <button className="btn  bg-blue-500 hover:bg-blue-600 text-white w-full">Registration</button>
      </form>
      <div className=" w-full  flex justify-center">
        <button
          className="border text-md font-semibold text-gray-600 capitalize flex  items-center gap-3 rounded-lg my-5 py-2 px-3"
          onClick={googleRegistration}
        >
          <img
            className="w-7"
            src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
            alt=""
            
          />
          continue with google
        </button>
      </div>
    </div>
  </>
  )
}

export default SignUp