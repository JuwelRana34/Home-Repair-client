import { Card, CardContent,  CardTitle } from "keep-react";
import paint from "../assets/paint.gif";
import water from "../assets/water.gif";
import renovation from "../assets/renovation.gif";
import housekeeping from "../assets/housekeeping.gif";
import { motion } from "motion/react";
function OurServices() {
  const services = [
    {
      title: "Painting",
      image: paint,
    },
    {
      title: "Cleaning",
      image: housekeeping,
    },
    {
      title: "Renovation",
      image: renovation,
    },
    {
      title: "Plumbing",
      image: water,
    },
  ];
  return (
    <>
      <h1 className="text-center text-4xl pt-12 font-bold dark:text-metal-300">
        <span className=" text-sm dark:text-metal-400 text-orange-500 capitalize">what we do</span> <br />
        Our Services
      </h1>
      <div className="grid w-3/4 mx-auto grid-cols-1 md:grid-cols-4  gap-4 mt-10">
        {services.map((service,index) => (
          <motion.div key={service.title}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="max-w-md w-full hover:shadow-lg text-center dark:bg-metal-800">
              <CardContent>
                <img className="w-20 mx-auto" src={service.image} alt="" />
                <hr className="w-12 border-gray-800 dark:border-metal-400 mt-3  border-[1px] mx-auto" />
                <CardTitle className="dark:text-metal-300 font-bold">
                  {service.title}
                </CardTitle>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default OurServices;
