import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router"
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "keep-react"
import { IoLocationSharp } from "react-icons/io5"
import ThemeContext from "../Context/ThemeProvider"
function PopularServices() {
  const {theme} = useContext(ThemeContext)
    const [data , setData] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API}/services/popular`).then(({data}) => {
            setData(data)
        }).catch(() => {
            console.log("error")
        })
    }, [])


  return (
    <>
    <h1 className="container mx-auto text-3xl font-bold  mt-5 py-4">
      Popular Services
    </h1>
<div className='grid  grid-cols-1 md:grid-cols-2 gap-5 p-5'>
       
        {data?.map((service) => {
           return <Card key={service._id} className={` dark:bg-metal-800 dark:border-metal-800 md:flex md:p-4 my-1 gap-5 items-start md:max-w-[90%]  mx-auto  rounded-md shadow-md`}>
        
        <CardHeader className='md:w-[50%]'>
         <img className=' w-full rounded-md' src={service.Photo_url} alt="" />
        </CardHeader>
  
        <CardContent className=" md:w-[50%] space-y-5 p-4 flex-col gap-5">
          <div className='space-y-2'>
            <CardTitle className='dark:text-metal-300 capitalize'>{service.Service_Name}</CardTitle>
          <CardDescription >
           {service.Description.substring(0, 100)}...
          </CardDescription>
         
          <p className=' capitalize py-2 font-semibold text-md'> price: $ {service.price}</p>
  
          <Link to={`/serviceDetails/${service._id}`}>
          <Button className='bg-blue-500 dark:bg-metal-700 dark:text-gray-300'>View Details</Button>
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
            <span className={`ml-2 text-gray-800 font-semibold ${theme ==="dark" && "text-gray-400"}`}>
              name: {service.Provider_info.name} <br />
            </span>
          </div>
          <p className=' mt-2 flex items-center gap-1 capitalize font-semibold text-md'> <IoLocationSharp /> area: {service.Service_Area} </p>
          </div>
          
          
        </CardContent>
      </Card>
        })}

    </div>
<div className="text-center my-5 ">
  <Link to={'/services'} className=" py-2 px-4  bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:hover:bg-metal-800  dark:bg-metal-700 dark:text-gray-300">
        Show All
        
         </Link>
</div>
    

    </>
    
  )
}

export default PopularServices