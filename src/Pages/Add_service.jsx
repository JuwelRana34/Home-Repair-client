import { useContext } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../Context/AuthContext";
import { toast } from "sonner";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
function Add_service() {
  const { user } = useContext(UserContext);
  const { register, handleSubmit, reset } = useForm();
  const { isPending, isSuccess, isError, error, mutate } = useMutation({
    mutationFn: (service) => {
      return axios.post(`${import.meta.env.VITE_API}/AddService`, service);
    },
  });

  const onSubmit = (data) => {
    const checkPhotoLink = /(https?:\/\/.*\.(?:png|jpg)$)/i;

    if (!checkPhotoLink.test(data.Photo_url)) {
      return toast.error("Please enter a valid image link");
    }

    if (isNaN(data.price)) {
      return toast.error("Please enter a valid price");
    }

    mutate({
      ...data,
      Provider_info: {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      },
    });
   
    reset();
  };

  if (isSuccess) {
    toast.success("Service added successfully");
    
  }

  if (isError) {
    console.log(error.message);
    toast.error("Failed to add service");
  }

  return (
    <div>
      <h1 className="text-4xl mb-10 text-gray-700 text-center my-5 font-bold">
        Add Your Service
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" md:grid items-start  gap-5 w-[80%]  mx-auto space-y-4"
      >
        <input
          required
          placeholder="service image link ex : https://service.jpg"
          className="border  p-2 rounded-md w-full my-4"
          {...register("Photo_url", { required: true })}
        />

        <input
          required
          placeholder="Service Name"
          className="border  p-2 rounded-md w-full my-4"
          {...register("Service_Name", { required: true })}
        />

        <input
          required
          placeholder="Price"
          type="number"
          className="border  p-2 rounded-md w-full my-4"
          {...register("price", { required: true })}
        />

        <input
          required
          placeholder="Service Area"
          className="border   p-2 rounded-md w-full my-4"
          {...register("Service_Area", { required: true })}
        />

        <textarea
          required
          placeholder="Description write here..."
          className="border col-span-2  p-2 rounded-md w-full my-4"
          {...register("Description", { required: true })}
        />

        <input
          className="border p-2 bg-gradient-to-tr from-orange-500 to-rose-500  text-white font-semibold rounded-md hover:cursor-pointer  w-full col-span-2 my-5"
          type="submit"
          value={`${isPending ? "Adding service..." : "Add service"}`}
        />
      </form>
    </div>
  );
}

export default Add_service;
