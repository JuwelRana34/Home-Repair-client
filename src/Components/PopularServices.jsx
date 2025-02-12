import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";
import Loading from "./Loading";
import { motion } from "motion/react";
import NotFound from "./NotFound";
import ServiceCard from "./ServiceCard";
function PopularServices() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/services/popular`)
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        console.log("error");
      });
  }, []);

  if (loading) return <Loading />;
  return (
    <>
      <h1 className="container text-center mx-auto text-3xl font-bold  mt-5 py-4">
        Popular Services
      </h1>
      <div
        className={`grid container mx-auto  grid-cols-1 ${
          data.length > 0 && "md:grid-cols-4 lg:grid-cols-4"
        } gap-5 p-5`}
      >
        {data.length <= 0 ? (
          <NotFound text={"Oops! data not loaded please try again later!"} />
        ) : (
          data?.map((service, index) => (
            <motion.div
             
              key={service._id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
             <Card className=" h-full flex flex-col dark:bg-metal-800  my-1 gap-2 items-center   mx-auto  rounded-md shadow-md">
      <CardHeader className="min-w-60  h-full ">
        <img className=" w-full h-52 object-center object-cover  rounded-md" src={service.Photo_url} alt={service.Service_Name} />
      </CardHeader>

      <CardContent className=" grow  space-y-0 p-4 flex flex-col gap-2">
        <div className=" space-y-2">
          <CardTitle className=" dark:text-metal-300 capitalize">
            {service.Service_Name}
          </CardTitle>
          <CardDescription>{service.Description.substring(0, 70)}...</CardDescription>

          <p className=" capitalize py-2 font-semibold text-md">
            {" "}
            price: $ {service.price}
          </p>
        </div>
        <div className=" grow  flex items-end text-end">
          <Link to={`/serviceDetails/${service._id}`}>
            <Button className="bg-blue-500 dark:bg-metal-700 dark:text-gray-300">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
            </motion.div>
          ))
        )}
      </div>
      <div className="text-center my-5 ">
        <Link
          to={"/services"}
          className=" py-2 px-4  bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:hover:bg-metal-800  dark:bg-metal-700 dark:text-gray-300"
        >
          Show All
        </Link>
      </div>
    </>
  );
}

export default PopularServices;
