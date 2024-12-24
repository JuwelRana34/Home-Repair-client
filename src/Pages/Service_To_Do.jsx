import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useContext} from "react";
import UserContext from "../Context/AuthContext";
import SecureAxios from "../hook/SecureAxios";
import NotFound from "../Components/NotFound";

function Service_To_Do() {
  // const [status, setStatus] = useState('Pending')
  const { user } = useContext(UserContext);
  const queryClient = useQueryClient();
  const { isLoading, error, isError, data } = useQuery({
    queryKey: ["booked_services"],
    queryFn: () => {
      return SecureAxios.get(
        `${import.meta.env.VITE_API}/service_To_Do/${user.email}`
      );
    },
  });

  const { mutate } = useMutation({
    mutationFn: async ({ id, newStatus }) => {
      await axios.patch(
        `${import.meta.env.VITE_API}/service_To_Do/${newStatus}/${id}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["booked_services"]);
      toast.success("Status updated successfully");
    },
  });

  const handelStatus = (id, newStatus) => {
    mutate({ id, newStatus });
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return toast.error("An error has occurred: " + error.message);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center my-5">
      
        Service To Do
      </h1>
      {data.data.length === 0? <NotFound text={'Oops! you have no  to do services!'}/> : 
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
            <div className="w-[85px]">Special instruction </div>
          </TableHead>
          <TableHead>
            <div className="w-[90px]">Service Taking Date </div>
          </TableHead>
          <TableHead>
            <div className="w-[90px]">Customar Name </div>
          </TableHead>
          <TableHead>
            <div className="w-[80px]">Status</div>
          </TableHead>
        </TableRow>
      </TableHeader>
     
      <TableBody>
        {data.data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <div className="max-w-[250px] truncate">
                {" "}
                <img
                  className=" rounded-md w-16  h-16 object-cover "
                  src={item.Photo_url}
                  alt=""
                />
              </div>
            </TableCell>
            <TableCell>{item.Service_Name}</TableCell>
            <TableCell>{item.special_instruction}</TableCell>

            <TableCell>
              {new Date(item.service_taking_data).toLocaleDateString()}
            </TableCell>
            <TableCell>{item.customer_name}</TableCell>
            <TableCell>
              {item?.status && (
                <select
                  className={`border  p-2 rounded-md
                     ${
                       item.status === "pending"
                         ? "bg-yellow-100 text-orange-500"
                         : item.status === "working"
                         ? "bg-blue-100 text-blue-500"
                         : "bg-green-100 text-green-500"
                     }
                    `}
                  value={item.status}
                  onChange={(value) =>
                    handelStatus(item._id, value.target.value)
                  }
                >
                  <option value="pending">pending</option>
                  <option value="working">working</option>
                  <option value="completed">completed</option>
                </select>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
}
    </div>
    
  );
}

export default Service_To_Do;
