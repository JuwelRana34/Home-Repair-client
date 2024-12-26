import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useContext } from "react";
import UserContext from "../Context/AuthContext";
import SecureAxios from "../hook/SecureAxios";
import NotFound from "../Components/NotFound";
import Loading from "../Components/Loading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";

function Service_To_Do() {
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

  if (isLoading) return <Loading />;

  if (isError) return toast.error("An error has occurred: " + error.message);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center pb-10 my-5">
        Service To Do
      </h1>
      <div className="grid p-2 md:w-[60%] gap-5 grid-cols-1 lg:grid-cols-2 mx-auto justify-items-center ">
        {data.data.length === 0 ? (
          <NotFound text={"Oops! you have no  to do services!"} />
        ) : (
          data.data.map((item) => (
            <Card key={item._id} className="dark:bg-metal-800 max-w-full">
              <CardHeader>
                <img src={item.Photo_url} alt={item.Service_Name} />
              </CardHeader>
              <CardContent className="space-y-3">
                <CardTitle className="dark:text-metal-300">
                  {item.Service_Name}
                </CardTitle>
                <CardDescription>{item.special_instruction}</CardDescription>
                <div className="space-y-2 font-semibold">
                  <p className="text-sm md:text-base">
                    Service Taking Date:{" "}
                    <span className="bg-blue-100 text-blue-500 font-normal dark:bg-slate-500 dark:text-metal-300 rounded-full p-1 px-2">
                      {new Date(item.service_taking_data).toLocaleDateString()}
                    </span>
                  </p>

                  <p>
                    Customar Name:{" "}
                    <span className="font-normal"> {item.customer_name}</span>
                  </p>
                  <p>
                    Customar Email:{" "}
                    <span className="font-normal"> {item.customer_email}</span>
                  </p>
                </div>
                <span className="font-semibold">Status: </span>{" "}
                {item?.status && (
                  <select
                    className={`  p-1 cursor-pointer rounded-md
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
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

export default Service_To_Do;
