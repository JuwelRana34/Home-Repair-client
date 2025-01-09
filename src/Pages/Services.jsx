import axios from "axios";
import ServiceCard from "../Components/ServiceCard";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import NotFound from "../Components/NotFound";

import {
  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "keep-react";

function Services() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const allServices = async () => {
      await axios
        .get(`${import.meta.env.VITE_API}/?filter=${search}&&sort=${sort}`)
        .then((res) => {
          setLoading(false);
          setData(res.data);
        })
        .catch((err) => {
          setLoading(false);
          toast.error("Failed to fetch services, please try again later!");
          console.log(err);
        });
    };
    allServices();
  }, [search, sort]);

  if (isLoading) return <Loading />;

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl text-center text-[ #1A73E8] font-bold mb-4">
        Our Services
      </h2>

      <label className="input input-bordered md:w-[50%] my-5 mx-auto flex items-center gap-2">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className=" grow"
          placeholder="Search"
        />
      </label>
      <div className="flex mb-5 container mx-auto  justify-end">
        <Select onValueChange={(e) => setSort(e)}>
          <SelectAction className="w-[20rem]">
            <SelectValue placeholder="Sort by price" />
          </SelectAction>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>sort</SelectLabel>
              <SelectItem value="asc">Asc</SelectItem>
              <SelectItem value="desc">Desc</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-5 ">
        {data.length === 0 ? (
          <NotFound text={"Oops! data not Found! something went wrong! "} />
        ) : (
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((service) => {
              return <ServiceCard key={service.id} service={service} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
