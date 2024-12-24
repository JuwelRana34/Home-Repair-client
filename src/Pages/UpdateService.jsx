import { toast } from "sonner";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import SecureAxios from "../hook/SecureAxios";

function UpdateService() {
  const { id } = useParams();
  const Navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["myPostedServices"],
    queryFn: async () => {
      return await SecureAxios.get(
        `${import.meta.env.VITE_API}/AddService/details/${id}`
      );
    },
  });

  const queryClient = useQueryClient();
  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: async (data) => {
      axios.patch(`${import.meta.env.VITE_API}/AddService/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myPostedServices"]);
      Navigate("/manage-service");
      toast.success("Service updated successfully!");
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const { price, Photo_url, Service_Name, Service_Area, Description } =
      e.target;

    const checkPhotoLink = /(https?:\/\/.*\.(?:png|jpg)$)/i;

    if (!checkPhotoLink.test(Photo_url.value)) {
      return toast.error("Please enter a valid image link");
    }

    if (isNaN(price.value)) {
      return toast.error("Please enter a valid price");
    }

    mutate({
      price: price.value,
      Photo_url: Photo_url.value,
      Service_Name: Service_Name.value,
      Service_Area: Service_Area.value,
      Description: Description.value,
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    console.log(error.message);
    toast.error("Failed to add service");
  }
  return (
    <div>
      <h3 className="font-bold text-3xl text-center my-5">Update service!</h3>
      <div>
        {data?.data && (
          <form
            method="dialog"
            onSubmit={onSubmit}
            className=" md:grid items-start  gap-5 w-[80%]  mx-auto space-y-4"
          >
            <input
              required
              defaultValue={data.data.Photo_url}
              placeholder="service image link ex : https://service.jpg"
              className="border  p-2 rounded-md w-full my-4"
              name="Photo_url"
            />

            <input
              required
              defaultValue={data.data.Service_Name}
              placeholder="Service Name"
              className="border  p-2 rounded-md w-full my-4"
              name="Service_Name"
            />

            <input
              required
              defaultValue={data.data.price}
              placeholder="Price"
              type="number"
              className="border  p-2 rounded-md w-full my-4"
              name="price"
            />

            <input
              required
              defaultValue={data.data.Service_Area}
              placeholder="Service Area"
              className="border   p-2 rounded-md w-full my-4"
              name="Service_Area"
            />

            <textarea
              required
              defaultValue={data.data.Description}
              placeholder="Description write here..."
              className="border col-span-2  p-2 rounded-md w-full my-4"
              name="Description"
            />

            <input
              className="border p-2 font-semibold rounded-md hover:cursor-pointer  w-full col-span-2 my-5"
              type="submit"
              value={`${isPending ? "updating service..." : "update service"}`}
            />
          </form>
        )}
      </div>
    </div>
  );
}

export default UpdateService;
