import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router";
import logo from "../assets/renovation.png";
import ThemeContext from "../Context/ThemeProvider";
import { useContext } from "react";
function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="">
      <footer className="footer container mx-auto text-base-content p-10">
        <nav>
          <h6 >Services</h6>
          <h1 >Repair Home</h1>
          <h1 >Rebuild Home</h1>
          <h1 >One Time service</h1>
        </nav>
        <nav>
          <h6 className="footer-title">Contact Us</h6>
          <h1 className="">01761632036</h1>
          <h1 className="">JuwelRana3426@gmail.com</h1>
          <h1 className="">Level-6, 38, Awal Centre, Banan</h1>
        </nav>
        <nav>
          <h6 className="footer-title">Useful Links</h6>
          <Link to={'/'} className="link link-hover">Home</Link>
          <Link to={'/Contactus'} className="link link-hover">Contact Us</Link>
          <Link to={'/services'} className="link link-hover">Services</Link>
         
        </nav>
      </footer>

      <footer className="footer gap-5 items-center  container mx-auto text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <img className="w-16 " src={logo} alt="" />
          <p>
            <span className="  font-bold font-berkshire text-xl md:text-2xl ">
              {" "}
              HOME REPAIR
            </span>
            <br />
            Providing Services 2021
          </p>
        </aside>
        <div className="md:flex justify-between items-center space-y-4 md:space-y-0 w-full">
        <p className=" justify-center">
            Copyright © {new Date().getFullYear()} - All right reserved by Home
            repair Ltd.
          </p>
          <nav className="md:place-self-center md:justify-self-end">
          
          <div className="grid grid-flow-col gap-4">
            <Link to="https://www.facebook.com/juwel34/" target="_blank">
              <FaFacebook
                className={` hover:scale-125 transition-all text-3xl text-blue-600  ${
                  theme === "dark" && "text-gray-300"
                } `}
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/md-juwel-rana-14b563204/"
              target="_blank"
            >
              <FaLinkedin
                className={` hover:scale-125 transition-all text-3xl text-blue-800 ${
                  theme === "dark" && "text-gray-300"
                }  `}
              />
            </Link>
            <Link to="https://github.com/JuwelRana34" target="_blank">
              <IoLogoGithub
                className={` hover:scale-125 transition-all text-3xl text-gray-300 ${
                  theme !== "dark" && "text-gray-900"
                }   `}
              />
            </Link>
          </div>


        </nav>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
