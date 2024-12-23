import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import UserContext from "../Context/AuthContext";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function ModalForm({ item }) {
  const { user } = useContext(UserContext);
  const { register, handleSubmit, reset } = useForm();

  const queryClient = useQueryClient();
  const { mutate, isError, isSuccess, error, isPending } = useMutation({
    mutationFn: async (data) => {
       axios.patch(`${import.meta.env.VITE_API}/AddService/${item._id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myPostedServices"]);
      toast.success("Service updated successfully!");
    },
  });

  const onSubmit = async (data) => {

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

 useEffect(() => {
    if (isSuccess) {
      document.getElementById("my_modal_1").close();
      queryClient.invalidateQueries(["myPostedServices"]);
    }
  }, [isSuccess, queryClient]);

  if (isError) {
    console.log(error.message);
    toast.error("Failed to add service");
  }

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-3xl text-center my-5">Update service!</h3>
        <div>
          {item && (
            <form
              method="dialog"
              onSubmit={handleSubmit(onSubmit)}
              className=" md:grid items-start  gap-5 w-[80%]  mx-auto space-y-4"
            >
              <input
                required
                defaultValue={item.Photo_url}
                placeholder="service image link ex : https://service.jpg"
                className="border  p-2 rounded-md w-full my-4"
                {...register("Photo_url",{ required: true })}
              />

              <input
                required
                defaultValue={item.Service_Name}
                placeholder="Service Name"
                className="border  p-2 rounded-md w-full my-4"
                {...register("Service_Name", { required: true })}
              />

              <input
                required
                defaultValue={item.price}
                placeholder="Price"
                type="number"
                className="border  p-2 rounded-md w-full my-4"
                {...register("price",{ required: true })}
              />

              <input
                required
                defaultValue={item.Service_Area}
                placeholder="Service Area"
                className="border   p-2 rounded-md w-full my-4"
                {...register("Service_Area",{ required: true })}
              />

              <textarea
                required
                defaultValue={item.Description}
                placeholder="Description write here..."
                className="border col-span-2  p-2 rounded-md w-full my-4"
                {...register("Description",{ required: true })}
              />

              <input
                className="border p-2 font-semibold rounded-md hover:cursor-pointer  w-full col-span-2 my-5"
                type="submit"
                value={`${
                  isPending ? "updating service..." : "update service"
                }`}
              />
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
}

export default ModalForm;
