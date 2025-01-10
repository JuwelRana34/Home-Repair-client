import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Context/AuthContext";
import { toast } from "sonner";
import SecureAxios from "../hook/SecureAxios";
import { Button } from "keep-react";
import { Link } from "react-router";
import NotFound from "../Components/NotFound";
import Loading from "../Components/Loading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";
function Manage_service() {
  const { user } = useContext(UserContext);
  const [resposdatas, setResposdatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    SecureAxios.get(`${import.meta.env.VITE_API}/AddService/${user.email}`)
      .then((response) => {
        setResposdatas(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [user.email]);

  const DeleteService = async (id) => {
    try {
      await SecureAxios.delete(`${import.meta.env.VITE_API}/AddService/${id}`);
      setResposdatas((prev) => prev.filter((item) => item._id !== id));
      toast.success("Service successfully deleted!");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <Loading />;

  const handleDelete = (id) => {
    toast.custom(
      (t) => (
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <p>Are you sure you want to delete this item?</p>
          <div className="flex gap-2 justify-end mt-2">
            <Button
              onClick={() => {
                toast.dismiss(t);

                DeleteService(id);
              }}
              className="bg-green-500 text-white"
            >
              Confirm
            </Button>
            <Button
              onClick={() => {
                toast.dismiss(t);
              }}
              className="bg-red-500 text-white"
            >
              Cancel
            </Button>
          </div>
        </div>
      ),
      {
        duration: Infinity,
      }
    );
  };

  return (
    <div className=" min-h-screen">
      <h1 className="text-3xl py-10 text-gray-700 dark:text-metal-300 text-center font-bold">
        {" "}
        Manage Services
      </h1>
      <div className={`grid grid-cols-1 my-10 gap-5 mx-auto  `}>
        {resposdatas?.length === 0 ? (
          <div>
            {" "}
            <NotFound text={"You have not booked any service yet !"} />
          </div>
        ) : (
          <Table className=" md:w-11/12 mx-auto">
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
                  <div className="w-[90px]">Actions </div>
                </TableHead>
                
              </TableRow>
            </TableHeader>
            <TableBody className="dark:bg-metal-800">
              {resposdatas?.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>
                    <div className="max-w-[250px] truncate">
                      {" "}
                      <img
                        className=" rounded-md w-16  h-16 object-cover object-center "
                        src={item.Photo_url}
                        alt=""
                      />
                    </div>
                  </TableCell>
                  <TableCell>{item.Service_Name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell className=" space-x-5">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-200 dark:bg-metal-700 p-2 rounded "
                    >
                      <MdDeleteForever className="text-lg dark:text-rose-200 text-rose-500" />
                    </button>
                    <Link to={`/UpdateService/${item._id}`}>
                      <button className="bg-yellow-200 dark:bg-metal-700 p-2 rounded ">
                        <FaRegEdit className="text-lg dark:text-yellow-100 text-orange-500" />
                      </button>
                    </Link>
                  </TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}

export default Manage_service;
