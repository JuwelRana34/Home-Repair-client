import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Context/AuthContext";
import axios from "axios";
import { toast } from "sonner";
import ModalForm from "../Components/ModalForm";

function Manage_service() {
  const { user } = useContext(UserContext);
  const [selectId, setSelectId] = useState(null);
  // const [data , setData] = useState([])
  const queryClient = useQueryClient()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["myPostedServices"],
    queryFn: async () => {
      return await axios.get(`${import.meta.env.VITE_API}/AddService/${user.email}`);
    },
  });
  const { mutate } = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`${import.meta.env.VITE_API}/AddService/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myPostedServices"]);
      toast.success("Service deleted successfully!");
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;




  const handelDelete = (id) => {
    mutate(id);
  };
  const handelEdit = (item) => {
    setSelectId(item);
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <>
      <h1 className="text-3xl py-10 text-gray-700 text-center font-bold"> Manage  Services</h1>
    <div className="grid grid-cols-1 my-10 gap-5  mx-auto md:grid-cols-2 ">
      {data.data.map((item) => {
        return (
          <div key={item?._id} className="w-[80%] mx-auto ">
            <div className="card bg-base-100 w-full shadow-xl">
              <figure>
                <img src={item.Photo_url} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title capitalize">
                  {item.Service_Name}
                  <div className="badge badge-secondary">${item.price}</div>
                </h2>
                <p>{item.Description}</p>

                <div className="card-actions h-10 justify-end items-center">
                  <button
                    onClick={() => handelDelete(item._id)}
                    className="badge badge-outline py-3 bg-rose-100 text-rose-600 font-semibold "
                  >
                    
                    <MdDeleteForever /> Delete{" "}
                  </button>
                  <button
                    onClick={()=>handelEdit(item)}
                    className="badge badge-outline py-3 bg-yellow-100 text-orange-500 font-semibold "
                  >
                    <FaRegEdit /> edit
                  </button>
                  <ModalForm item={selectId} />
                </div>
              </div>
            </div>
          </div>
        );
      })}

      
    </div>
    </>
    
  );
}

export default Manage_service;
