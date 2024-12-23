import axios from "axios";
import ServiceCard from "../Components/ServiceCard"
import { toast } from "sonner";
import { useEffect, useState } from "react";


function Services() {
  const [data, setData] = useState([])
  const [search , setSearch]= useState('')
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    const allServices = async () => {
    
      await axios.get(`${import.meta.env.VITE_API}/?filter=${search}`)
      .then((res) => {
        setLoading(false)
        setData(res.data)
        
      }).catch((err) => {
        setLoading(false)
        toast.error("Failed to fetch services, please try again later!")
        console.log(err)
      })
    
  }
  allServices()
  },[search])
  
  if(loading) return <div>Loading.....</div>


  return (
    <div className="container mx-auto px-4 py-6">
    <h2 className="text-2xl text-center text-[ #1A73E8] font-bold mb-4">Our Services</h2>

<label className="input input-bordered md:w-[50%] my-10 mx-auto flex items-center gap-2">
  <input onChange={(e)=>setSearch(e.target.value)}  type="text" className=" grow" placeholder="Search" />
 
</label>
<div className="space-y-5">
 {
    data.map((service) => {
      return <ServiceCard key={service.id} service={service}/>
    })
  }
</div>
 
  </div>
  )
}

export default Services