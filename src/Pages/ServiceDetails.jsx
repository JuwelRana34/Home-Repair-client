import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"



function ServiceDetails() {
    // const [Loading, setLoading]= useState(true)
    const [Details, setDetails]= useState({})
    const{id}= useParams()
    console.log(id)
     useEffect(() =>{
      
      axios.get(`${import.meta.env.VITE_API}/AddService/details/${id}`)
      .then(({data}) => {
        setDetails(data)
        // setLoading(false)
      }).catch((err) => {  
        // setLoading(false)
        console.log(err)
      })
     },[id])

     console.log(Details)
    // if(Loading) return <div>Loading...</div>
    // if(!Details) return <div>Service not found</div>
  return (
    <div>


        {Details.price}

        
    </div>
  )
}

export default ServiceDetails