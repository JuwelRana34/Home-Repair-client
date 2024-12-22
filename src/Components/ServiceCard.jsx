/* eslint-disable react/prop-types */
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from 'keep-react'
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router';

function ServiceCard({service}) {
   const {Service_Name, Service_Area, price,Description,Photo_url,Provider_info,_id} = service

  return (
    <Card className='w-full mx-auto'>
        
      <CardHeader className='w-full'>
       <img src={Photo_url} alt="" />
      </CardHeader>
      <CardContent className="space-y-3">
        <CardTitle>{Service_Name}</CardTitle>
        <CardDescription>
         {Description}
        </CardDescription>
       <Link to={`/serviceDetails/${_id}`}>
        <Button className='bg-blue-500'>View Details</Button>
        </Link>
        <p className=' capitalize font-semibold text-md'>Service Provider</p>
        <div className="flex items-center mt-4 md:mt-0 md:ml-auto">
          <img
            src={Provider_info.photo}
            alt={Provider_info.name}
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-2 text-gray-800 font-medium">
            {Provider_info.name} <br />
            {Provider_info.email}
          </span>
        </div>
        <p className=' flex items-center gap-1 capitalize font-semibold text-md'> <IoLocationSharp /> area: {Service_Area} </p>
        <p className=' capitalize font-semibold text-md'> price: $ {price}</p>
      </CardContent>
    </Card>
    
  )
}

export default ServiceCard