import Swal from "sweetalert2";
import { useContext } from "react";
import ThemeContext from "../Context/ThemeProvider";


function ContactUs() {
  const { theme } = useContext(ThemeContext);
  const handelSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: " message send successfully",
      icon: "success",
      draggable: true,
    });

    e.target.reset();
  };
  return (
    <div className="min-h-screen" >
      <div className={`lg:flex justify-center p-3 ${theme === "dark"? "bg-slate-700 ":'bg-white'} shadow  lg:w-8/12 mx-auto my-8 rounded`}>
        <div className="lg:w-1/2">
          <img className="w-fit mx-auto" src='https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?ga=GA1.1.1974322130.1689523785&semt=ais_hybrid' alt="" />
        </div>
        <div className="lg:w-1/2">
          <div className="flex justify-center items-center  ">
            <div className="w-full max-w-lg  p-4">
              <h2 className={`text-3xl font-bold ${theme === 'dark' && "text-slate-300" }  mb-4 text-center`}>
                Contact Us
              </h2>
              <p className={`text-gray-600 ${theme === 'dark' && "text-slate-300" } text-sm mb-6 text-center`}>
                We&apos;d love to hear from you! Fill out the form below to get
                in touch.
              </p>

              <form onSubmit={handelSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium text-gray-700 mb-1 ${theme === 'dark' && "text-slate-300" }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                    className={`w-full  px-4 py-2 border ${theme === 'dark' ? "bg-slate-600 border-slate-900" :'bg-white' }border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium text-gray-700 mb-1 ${theme === 'dark' && "text-slate-300" }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className={`w-full  px-4 py-2 border ${theme === 'dark' ? "bg-slate-600 border-slate-900" :'bg-white' }border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium text-gray-700 mb-1 ${theme === 'dark' && "text-slate-300" }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Your Message"
                    className={`w-full  px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 ${theme === 'dark' ? "bg-slate-600 border-slate-900" :'bg-white' }focus:ring-blue-500 focus:border-blue-500`}
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className={`w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ${theme === 'dark' && "text-slate-300 hover:bg-slate-600 bg-slate-900" }`}
                  >
                    Send
                  </button>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;