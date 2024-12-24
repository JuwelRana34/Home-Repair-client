
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ModalBooked from "../Components/modalBooked"
import SecureAxios from "../hook/SecureAxios"

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from 'keep-react'
import { IoLocationSharp } from "react-icons/io5";
import Loading from "../Components/Loading"



function ServiceDetails() {
    const [selectItem, setSelectItem]= useState(true)
    const [Details, setDetails]= useState({})
    const [isLoading, setLoading]= useState(true)
    const{id}= useParams()
  console.log(Details)
     useEffect(() =>{
      
      SecureAxios.get(`${import.meta.env.VITE_API}/AddService/details/${id}`)
      .then(({data}) => {
        setDetails(data)
        setLoading(false)
      }).catch((err) => {  
        setLoading(false)
        console.log(err)
      })
     },[id])


     const handelBookedService = (item) => {
      setSelectItem(item);
      document.getElementById("my_modal_2").showModal();
    };

     console.log(Details)
    if(isLoading) return <Loading/>
    if(!Details) return <div>Service not found</div>
  return (
    <div>

  <h1 className="text-3xl font-bold text-center my-5 py-4">
    About the service <span className="text-gray-900">&quot;{Details.Service_Name}&quot; </span> 
  </h1>
 <Card className=' md:flex md:p-4 my-1 gap-5 items-center md:max-w-[90%]  mx-auto  rounded-md shadow-md'>
        
      <CardHeader className='md:w-[50%]'>
       <img className=' w-full rounded-md' src={Details?.Photo_url} alt="" />
      </CardHeader>

      <CardContent className=" md:w-[50%] space-y-5 p-4 flex-col gap-5">
        <div className='space-y-2'>
          <CardTitle className=' text-3xl font-bold capitalize'>Service info: </CardTitle>
          <CardTitle className=' capitalize'>{Details?.Service_Name}</CardTitle>
        <CardDescription className="text-justify" >
         {Details?.Description}
        </CardDescription>
       
        <p className=' capitalize py-2 font-semibold text-lg'> price: $ {Details?.price}</p>

        
        <Button onClick={() => handelBookedService(Details)} className='bg-blue-500'>Book Now</Button>
       
        </div>
        

        <div className=' flex-col justify-end'>
          <p className=' capitalize font-semibold text-xl'>Service Provider:</p>
        <div className="flex items-center mt-4 md:mt-0 md:ml-auto">
          <img
            src={Details?.Provider_info.photo}
            alt={Details?.Provider_info.name}
            className="w-16 h-16 shadow-md ring-2 rounded-full"
          />
          <span className="ml-2 text-gray-800 font-semibold">
            name: {Details?.Provider_info.name} <br />
            
          </span>
        </div>
        <p className=' mt-2 flex items-center gap-1 capitalize font-semibold text-md'> <IoLocationSharp /> Service area: {Details?.Service_Area} </p>
        </div>
        
        
      </CardContent>
    </Card>
  
    
  

    <ModalBooked item={selectItem}/>
        
    </div>
  )
}

export default ServiceDetails