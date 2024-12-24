import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router"
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "keep-react"
import { IoLocationSharp } from "react-icons/io5"
function PopularServices() {
    const [data , setData] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API}/services/popular`).then(({data}) => {
            setData(data)
        }).catch(() => {
            console.log("error")
        })
    }, [])


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>
       
        {data?.map((service) => {
           return <Card key={service._id} className=' md:flex md:p-4 my-1 gap-5 items-start md:max-w-[90%]  mx-auto  rounded-md shadow-md'>
        
        <CardHeader className='md:w-[50%]'>
         <img className=' w-full rounded-md' src={service.Photo_url} alt="" />
        </CardHeader>
  
        <CardContent className=" md:w-[50%] space-y-5 p-4 flex-col gap-5">
          <div className='space-y-2'>
            <CardTitle className=' capitalize'>{service.Service_Name}</CardTitle>
          <CardDescription >
           {service.Description.substring(0, 100)}...
          </CardDescription>
         
          <p className=' capitalize py-2 font-semibold text-md'> price: $ {service.price}</p>
  
          <Link to={`/serviceDetails/${service._id}`}>
          <Button className='bg-blue-500'>View Details</Button>
          </Link>
          </div>
          
  
          <div className=' flex-col justify-end'>
            <p className=' capitalize font-semibold text-xl'>Service Provider:</p>
          <div className="flex items-center mt-4 md:mt-0 md:ml-auto">
            <img
              src={service.Provider_info.photo}
              alt={service.Provider_info.name}
              className="w-12 h-12 shadow-md ring-2 rounded-full"
            />
            <span className="ml-2 text-gray-800 font-semibold">
              name: {service.Provider_info.name} <br />
            </span>
          </div>
          <p className=' mt-2 flex items-center gap-1 capitalize font-semibold text-md'> <IoLocationSharp /> area: {service.Service_Area} </p>
          </div>
          
          
        </CardContent>
      </Card>
        })}
        
    </div>
  )
}

export default PopularServices