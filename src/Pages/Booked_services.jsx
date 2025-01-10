import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'keep-react'
import { useQuery } from '@tanstack/react-query'
import { toast } from "sonner";
import { useContext } from 'react';
import UserContext from '../Context/AuthContext';
import SecureAxios from '../hook/SecureAxios';
import NotFound from '../Components/NotFound';
import Loading from '../Components/Loading';

function Booked_services() {
  const { user } = useContext(UserContext);
  const { isLoading , error , isError, data }= useQuery({ queryKey: ["booked_services"], queryFn: () =>{
    return  SecureAxios.get(`${import.meta.env.VITE_API}/booked_service/${user?.email}`)
  } });

  if(isLoading) return <Loading/>

  if(isError) return toast.error('An error has occurred: ' + error.message)

  return (
    <div className='md:px-8 mt-5 min-h-screen'>
     <h1 className=' text-3xl py-5 mb-5 capitalize font-bold text-center text-gray-700 dark:text-metal-300'> my Booked services </h1>
     {data?.data?.length === 0 ? <div> <NotFound text={"You have not booked any service yet !"} /></div>  :
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
    <TableBody className='dark:bg-metal-800'>
    
      {data?.data?.map((item) => (
        <TableRow key={item._id}>
          <TableCell>
            <div className="max-w-[250px] truncate"> <img className=' rounded-md w-16  h-16 object-cover object-center ' src={item.Photo_url}alt=""  /></div>
          </TableCell>
          <TableCell>{item.Service_Name}</TableCell>
          <TableCell>{item.price}</TableCell>
          <TableCell>{ new Date(item.service_taking_data).toLocaleDateString() }</TableCell>
          <TableCell>{item.Provider_name}</TableCell>
          <TableCell >
              <span className={`
               font-semibold dark:bg-metal-700 dark:text-metal-300
                ${item.status === 'pending'? 'text-orange-500 bg-yellow-100 p-2 px-3 rounded-full' : 
                  item.status === 'working'? 'text-green-500 bg-green-100 p-2 px-3 rounded-full' : 
                  item.status === 'completed'? 'text-blue-500 bg-blue-100 p-2 px-3 rounded-full' : 
                  'text-gray-500 ' 
                }
            `}>
                {item.status}
              </span>
              
              
              </TableCell>
        </TableRow>
      ))}


    </TableBody>
  </Table>
  }
    </div>
  )
}

export default Booked_services