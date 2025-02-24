/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router";

function ServiceCard({ service }) {
  const {
    Service_Name,
    Service_Area,
    price,
    Description,
    Photo_url,
    Provider_info,
    _id,
  } = service;

  return (
    <Card className="  flex flex-col dark:bg-metal-800  my-1 gap-2 items-center   mx-auto  rounded-md shadow-md">
      <CardHeader className="min-w-60  min-h-44 ">
        <img className=" w-full h-52 object-cover object-center  rounded-md" src={Photo_url} alt={Service_Name} />
      </CardHeader>

      <CardContent className=" grow  space-y-0 p-4 flex flex-col gap-2">
        <div className=" space-y-2">
          <CardTitle className=" dark:text-metal-300 capitalize">
            {Service_Name}
          </CardTitle>
          <CardDescription>{Description.substring(0, 70)}...</CardDescription>

          <p className=" capitalize py-2 font-semibold text-md">
            {" "}
            $ {price}
          </p>
        </div>
        <div className=" grow  flex items-end text-end">
          <Link to={`/serviceDetails/${_id}`}>
            <Button className="bg-blue-500 dark:bg-metal-700 dark:text-gray-300">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
