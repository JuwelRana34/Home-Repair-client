/* eslint-disable react/prop-types */
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from 'keep-react'
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router';

function ServiceCard({service}) {
   const {Service_Name, Service_Area, price,Description,Photo_url,Provider_info,_id} = service

  return (
    <Card className=' md:flex md:p-4 my-1 gap-5 items-center md:max-w-[90%]  mx-auto  rounded-md shadow-md'>
        
      <CardHeader className='md:w-[50%]'>
       <img className=' w-full rounded-md' src={Photo_url} alt="" />
      </CardHeader>

      <CardContent className=" md:w-[50%] space-y-5 p-4 flex-col gap-5">
        <div className='space-y-2'>
          <CardTitle className=' dark:text-metal-300 capitalize'>{Service_Name}</CardTitle>
        <CardDescription >
         {Description.substring(0, 100)}...
        </CardDescription>
       
        <p className=' capitalize py-2 font-semibold text-md'> price: $ {price}</p>

        <Link to={`/serviceDetails/${_id}`}>
        <Button className='bg-blue-500 dark:bg-metal-700 dark:text-gray-300'>View Details</Button>
        </Link>
        </div>
        

        <div className=' flex-col justify-end'>
          <p className=' capitalize font-semibold text-xl'>Service Provider:</p>
        <div className="flex items-center mt-4 md:mt-0 md:ml-auto">
          <img
            src={Provider_info.photo}
            alt={Provider_info.name}
            className="w-16 h-16 shadow-md ring-2 rounded-full"
          />
          <span className="ml-2 dark:text-metal-300 text-gray-800 font-medium">
            name: {Provider_info.name} <br />
            
          </span>
        </div>
        <p className=' mt-2 flex items-center gap-1 capitalize font-semibold text-md'> <IoLocationSharp /> area: {Service_Area} </p>
        </div>
        
        
      </CardContent>
    </Card>
    
  )
}

export default ServiceCard