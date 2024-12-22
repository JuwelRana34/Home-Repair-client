import { useParams } from "react-router"
import { toast } from "sonner"


function ServiceDetails() {
    const{id}= useParams()
    toast.info(id)
  return (
    <div>ServiceDetails</div>
  )
}

export default ServiceDetails