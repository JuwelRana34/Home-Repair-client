import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from 'keep-react'
import { IoLocationSharp } from "react-icons/io5";

function ServiceCard() {
  return (
    <Card className='w-full mx-auto'>
        
      <CardHeader className='w-full'>
       <img src="https://i.ibb.co.com/rsPxmfY/07-699f9620f4254f2e9aae0f8fe9e580ab.jpg" alt="" />
      </CardHeader>
      <CardContent className="space-y-3">
        <CardTitle>Name</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam animi voluptas perspiciatis quidem esse! max100 caracter user substring..
        </CardDescription>
        <Button className='bg-blue-500'>View Details</Button>
        <p className=' capitalize font-semibold text-md'>Service Provider</p>
        {/* <div className="flex items-center mt-4 md:mt-0 md:ml-auto">
          <img
            src={service.provider.image}
            alt={service.provider.name}
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-2 text-gray-800 font-medium">
            {service.provider.name}
          </span>
        </div> */}
        <p className=' flex items-center gap-1 capitalize font-semibold text-md'> <IoLocationSharp /> area:  dhaka </p>
        <p className=' capitalize font-semibold text-md'> price: $ 25 </p>
      </CardContent>
    </Card>
    
  )
}

export default ServiceCard