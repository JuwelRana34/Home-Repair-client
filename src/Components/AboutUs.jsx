import image from "../assets/h5_img1.jpg";

function AboutUs() {
  return (
    <div >
        <div className="md:flex  dark:bg-metal-800 rounded-md  justify-center gap-5 my-5">
            <div className="md:w-[50%] ">
                <img className="p-4 rounded-md"  src={image} alt=""  />
            </div>
            <div className="md:w-[50%] p-4  ">
                <h1 className=" text-2xl md:text-5xl font-bold space-y-4">
                  <span className="text-sm text-orange-500 dark:text-metal-400">About Us </span><br />  
                    25+ YEARS AVERAGE EXPERIENCE
                </h1>
                <p className="text-lg text-justify mt-5 text-gray-600 dark:text-gray-300">
                Give us your punch list. If you’re getting your home ready to sell, or you just bought a home, chances are you have a punch list of things you want to get done. We can do 1,162 home projects. <br /> <br />

Is the thought that you lack the time to do these trivial but vital things killing you? At Handyman Services in DC, we provide a wide range of handyman and property maintenance services as well as large renovations and help you to improve the overall appearance and functionality of your home and office in no time!
                </p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default AboutUs