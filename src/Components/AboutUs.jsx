import image from "../assets/h5_img1.jpg";
import service from "../assets/service.png";
import Staff from "../assets/teacher.png";
import save_mny from "../assets/save-money.png";
import { motion } from "framer-motion";
function AboutUs() {
  return (
    <div>
      <div className="md:flex overflow-hidden  dark:bg-metal-800 rounded-md  justify-center gap-5 my-5">
        <motion.div
         initial={{ x: -100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.5, delay: 0.2 }}
         viewport={{ once: true, amount: 0.3 }}
        
        className="md:w-[50%] ">
          <img className="p-4 rounded-md" src={image} alt="" />
        </motion.div>
        <motion.div 
         initial={{ x: 100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.5, delay: 0.2 }}
         viewport={{ once: true, amount: 0.3 }}
        className="md:w-[50%] p-4  ">
          <h1 className=" text-2xl md:text-5xl font-bold space-y-4">
            <span className="text-sm text-orange-500 dark:text-metal-400">
              About Us{" "}
            </span>
            <br />
            25+ YEARS AVERAGE EXPERIENCE
          </h1>
          <p className="text-lg text-justify mt-5 text-gray-600 dark:text-gray-300">
            Give us your punch list. If you’re getting your home ready to sell,
            or you just bought a home, chances are you have a punch list of
            things you want to get done. We can do 1,162 home projects. <br />{" "}
            <br />
            Is the thought that you lack the time to do these trivial but vital
            things killing you? At Handyman Services in DC, we provide a wide
            range of handyman and property maintenance services as well as large
            renovations and help you to improve the overall appearance and
            functionality of your home and office in no time!
          </p>
        </motion.div>
      </div>
      <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="text-center space-y-2 p-2">
            <img  className="w-24 mx-auto" src={Staff} alt="" />
            <h1 className="text-2xl font-bold">Professional Staff</h1>
            <p>From exhaust fan assessment to reviewing attic space and cleaning refrigerator coils to give you a safe life.</p>
        </div>
        <div className="text-center space-y-2 p-2">
            <img  className="w-24 mx-auto" src={service} alt="" />
            <h1 className="text-2xl font-bold">24/7 Services</h1>
            <p>If you are in emergency situation, please do not worry. We provide 24/7 service. Whenever you call, we service you.</p>
        </div>
        <div className="text-center space-y-2 p-2">
            <img  className="w-24 mx-auto" src={save_mny} alt="" />
            <h1 className="text-2xl font-bold">Save money</h1>
            <p>We do more than a renovation service- we check for glitches that need attention to keep you safe and save your money.</p>
        </div>
        
        
      </motion.div>
    </div>
  );
}

export default AboutUs;
