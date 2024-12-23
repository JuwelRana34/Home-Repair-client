import axios from "axios";
import ServiceCard from "../Components/ServiceCard"
import { useQuery } from '@tanstack/react-query'
import { toast } from "sonner";


function Services() {
  const { isLoading , error , isError, data }= useQuery({ queryKey: ["services"], queryFn: () =>{
    return axios.get(`${import.meta.env.VITE_API}/`)
  } });

  if(isLoading) return <div>Loading...</div>

  if(isError) return toast.error('An error has occurred: ' + error.message)

  return (
    <div className="container mx-auto px-4 py-6">
    <h2 className="text-2xl text-center font-bold mb-4">Our Services</h2>

<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  {/* <kbd className="kbd kbd-sm">⌘</kbd>
  <kbd className="kbd kbd-sm">K</kbd> */}
</label>
  {
    data.data.map((service) => {
      return <ServiceCard key={service.id} service={service}/>
    })
  }
  </div>
  )
}

export default Services