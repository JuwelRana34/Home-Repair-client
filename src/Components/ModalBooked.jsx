import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import UserContext from "../Context/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

function ModalBooked({ item }) {
  const { user } = useContext(UserContext);
  const [date, setDate] = useState(new Date());

  const queryClient = useQueryClient();
  const { mutate, isError, isSuccess, error, isPending } = useMutation({
    mutationFn: async (data) => {
      axios.post(`${import.meta.env.VITE_API}/booked_service`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myPostedServices"]);
      toast.success("Service booked successfully!");
      document.getElementById("my_modal_2").close();
    },
  });

  const handelBookedServices = (e) => {
    e.preventDefault();
    const {
      service_id,
      Service_Name,
      Photo_url,
      Provider_email,
      Provider_name,
      customer_email,
      customer_name,
      Special_instruction,
      price,
    } = e.target;

    mutate({
      service_id: service_id.value,
      Service_Name: Service_Name.value,
      Photo_url: Photo_url.value,
      Provider_email: Provider_email.value,
      Provider_name: Provider_name.value,
      customer_email: customer_email.value,
      customer_name: customer_name.value,
      price: price.value,
      special_instruction: Special_instruction.value,
      service_taking_data: date,
      status: "Pending",
    });

    e.target.reset();
  };

  useEffect(() => {
    if (isSuccess) {
      document.getElementById("my_modal_2").close();
      queryClient.invalidateQueries(["myPostedServices"]);
    }
  }, [isSuccess, queryClient]);

  if (isError) {
    console.log(error.message);
    toast.error("Failed to booked service");
  }

  return (
    <dialog id="my_modal_2" className="modal z-50">
      <div className="modal-box z-50">
        <h3 className="font-bold text-3xl text-center my-5">Booked service!</h3>
        <div>
          {item && (
            <form
              method="dialog"
              onSubmit={handelBookedServices}
              className="gap-5 w-[80%]  mx-auto space-y-4"
            >
              <label>
                <span className=" capitalize font-semibold text-gray-700">
                  service ID:
                </span>
                <input
                  required
                  defaultValue={item?._id}
                  disabled
                  placeholder="service id"
                  className="border  p-2 rounded-md w-full my-4"
                  name="service_id"
                />
              </label>

              <label>
                <span className=" capitalize font-semibold text-gray-700">
                  service Name:
                </span>
                <input
                  required
                  disabled
                  defaultValue={item?.Service_Name || ""}
                  placeholder="Service Name"
                  className="border  p-2 rounded-md w-full my-4"
                  name="Service_Name"
                />
              </label>

              <label>
                <span className=" capitalize font-semibold text-gray-700">
                  service photo:
                </span>
                <input
                  required
                  disabled
                  defaultValue={item?.Photo_url || ""}
                  placeholder="service image link ex : https://service.jpg"
                  className="border  p-2 rounded-md w-full my-4"
                  name="Photo_url"
                />
              </label>

              <label>
                <span className=" capitalize font-semibold text-gray-700">
                  Provider email:
                </span>
                <input
                  required
                  disabled
                  defaultValue={item?.Provider_info?.email || ""}
                  placeholder="service image link ex : https://service.jpg"
                  className="border  p-2 rounded-md w-full my-4"
                  name="Provider_email"
                />
              </label>

              <label>
                <span className=" capitalize font-semibold text-gray-700">
                  Provider name:
                </span>
                <input
                  required
                  disabled
                  defaultValue={item?.Provider_info?.name || ""}
                  placeholder="service image link ex : https://service.jpg"
                  className="border  p-2 rounded-md w-full my-4"
                  name="Provider_name"
                />
              </label>

              {/* myinfo  */}

              <label>
                <span className=" capitalize font-semibold text-gray-700">
                  customer email:
                </span>
                <input
                  required
                  disabled
                  defaultValue={user?.email || ""}
                  placeholder="service image link ex : https://service.jpg"
                  className="border  p-2 rounded-md w-full my-4"
                  name="customer_email"
                />
              </label>

              <label>
                <span className=" capitalize font-semibold text-gray-700">
                  customer name:
                </span>
                <input
                  required
                  disabled
                  defaultValue={user?.displayName || ""}
                  placeholder="service image link ex : https://service.jpg"
                  className="border  p-2 rounded-md w-full my-4"
                  name="customer_name"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className=" capitalize font-semibold text-gray-700">
                  Service Taking Date:
                </span>

                <DatePicker
                  className="border p-2"
                  selected={date || new Date()}
                  onChange={(date) => setDate(date)}
                />
              </label>

              <label>
                <span className=" capitalize font-semibold text-gray-700">
                  Price:
                </span>
                <input
                  required
                  disabled
                  defaultValue={item?.price || ""}
                  placeholder="Price"
                  type="number"
                  className="border  p-2 rounded-md w-full my-4"
                  name="price"
                />
              </label>

              <label>
                <span className=" capitalize font-semibold text-gray-700">
                  Special instruction:
                </span>

                <textarea
                  placeholder="anything like address , area, customized service plan..."
                  className="border col-span-2  p-2 rounded-md w-full my-4"
                  name="Special_instruction"
                />
              </label>

              <input
                className="border p-2 font-semibold rounded-md hover:cursor-pointer  w-full col-span-2 my-5"
                type="submit"
                value={`${isPending ? "Booking service..." : "Book service"}`}
              />
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
}

export default ModalBooked;
