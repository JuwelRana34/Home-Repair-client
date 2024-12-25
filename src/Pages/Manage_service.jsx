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
  }


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

                DeleteService(id)
                
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
    <>
      <h1 className="text-3xl py-10 text-gray-700 dark:text-metal-300 text-center font-bold">
        {" "}
        Manage Services
      </h1>
      <div
        className={`grid grid-cols-1 my-10 gap-5 mx-auto ${
          resposdatas?.length > 0 && "md:grid-cols-2"
        }   `}
      >
        {resposdatas?.length === 0 ? (
          <NotFound text={"Oops! you have not add any services yet!"} />
        ) : (
          resposdatas?.map((item) => {
            return (
              <div
                key={item?._id}
                className="w-[90%]  mx-auto dark:bg-metal-800 rounded-md "
              >
                <div className="card dark:bg-metal-800 lg:flex-row md:h-[28rem] lg:h-[18rem] flex-grow bg-base-100 w-full shadow-xl">
                  <figure className="p-2">
                    <img
                      className="w-full rounded-md h-full object-cover object-center"
                      src={item.Photo_url}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body  ">
                    <h2 className="card-title capitalize">
                      {item.Service_Name}
                    </h2>
                    <p className=" text-justify">
                      {item.Description.substring(0, 100)}...
                    </p>
                    <span className=" font-semibold text-lg">
                      Price: $ {item.price}{" "}
                    </span>

                    <div className="card-actions  h-10 justify-end items-center">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="badge badge-outline py-3 bg-rose-100 text-rose-600 font-semibold dark:bg-metal-800 dark:text-metal-300 dark:hover:text-metal-25"
                      >
                        <MdDeleteForever /> Delete{" "}
                      </button>
                      <Link
                        to={`/UpdateService/${item._id}`}
                        className="badge badge-outline py-3 bg-yellow-100 text-orange-500 font-semibold dark:bg-metal-800 dark:text-metal-300 dark:hover:text-metal-25"
                      >
                        <FaRegEdit /> edit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default Manage_service;
