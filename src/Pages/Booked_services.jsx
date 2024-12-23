import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'keep-react'
import axios from "axios";
import { useQuery } from '@tanstack/react-query'
import { toast } from "sonner";
import { useContext } from 'react';
import UserContext from '../Context/AuthContext';

function Booked_services() {
  const { user } = useContext(UserContext);
  const { isLoading , error , isError, data }= useQuery({ queryKey: ["booked_services"], queryFn: () =>{
    return axios.get(`${import.meta.env.VITE_API}/booked_service/${user.email}`)
  } });

  console.log(data)
  if(isLoading) return <div>Loading...</div>

  if(isError) return toast.error('An error has occurred: ' + error.message)

  return (
    <div className='md:px-8 mt-5'>
     <h1 className=' text-3xl py-5 mb-5 capitalize font-bold text-center text-gray-700'> my Booked services </h1>
    <Table >
    <TableHeader>
      <TableRow>
        <TableHead>
          <div className="max-w-[250px]">service photo </div>
        </TableHead>
        <TableHead>
          <div className="w-[80px]">service name</div>
        </TableHead>
        <TableHead>
          <div className="w-[85px]">Price</div>
        </TableHead>
        <TableHead>
          <div className="w-[90px]">Service Taking Date </div>
        </TableHead>
        <TableHead>
          <div className="w-[90px]">Provider Name</div>
        </TableHead>
        <TableHead>
          <div className="w-[80px]">Status</div>
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.data.length === 0 ?<>NO services booked yet!</>: <>
      
     
      {data.data.map((item) => (
        <TableRow key={item._id}>
          <TableCell>
            <div className="max-w-[250px] truncate"> <img className=' rounded-full w-16  h-16 object-cover object-center ' src={item.Photo_url}alt=""  /></div>
          </TableCell>
          <TableCell>{item.Service_Name}</TableCell>
          <TableCell>{item.price}</TableCell>
          <TableCell>{ new Date(item.service_taking_data).toLocaleDateString() }</TableCell>
          <TableCell>{item.Provider_email}</TableCell>
          <TableCell>{item.status}</TableCell>
        </TableRow>
      ))}

</>}
    </TableBody>
  </Table>
    </div>
  )
}

export default Booked_services