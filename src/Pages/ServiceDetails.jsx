import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import ModalBooked from "../Components/modalBooked"



function ServiceDetails() {
    const [selectItem, setSelectItem]= useState(true)
    const [Details, setDetails]= useState({})
    const{id}= useParams()
    console.log(id)
     useEffect(() =>{
      
      axios.get(`${import.meta.env.VITE_API}/AddService/details/${id}`)
      .then(({data}) => {
        setDetails(data)
        // setLoading(false)
      }).catch((err) => {  
        // setLoading(false)
        console.log(err)
      })
     },[id])


     const handelBookedService = (item) => {
      setSelectItem(item);
      document.getElementById("my_modal_2").showModal();
    };

     console.log(Details)
    // if(Loading) return <div>Loading...</div>
    // if(!Details) return <div>Service not found</div>
  return (
    <div>


<div className="mt-5">
      <div className="hero bg-gradient-to-t from-blue-200 to-white  mx-auto container min-h-screen">
        <div className="hero-content w-full gap-5 items-start flex-col lg:flex-row">
          <img
            src={Details.Photo_url}
            className="w-full md:w-[30%] rounded-lg shadow-2xl"
          />
          <div className="md:w-[70%]  md:px-10">
            <h1 className=" text-4xl md:text-5xl bg-gradient-to-bl from-rose-600 to-orange-600 bg-clip-text text-transparent  font-bold">
              {Details.Service_Name}
            </h1>
            <p className="text-gray-600 md:flex gap-2 items-center text-lg py-4">
              {/* <img className="w-14" src={doc} alt="" /> */}
              <h1 > <span className="font-bold text-xl"> Description : </span>  {Details.Description}</h1> 
            </p>

            <hr className=" border-gray-500" />
           
            <hr className=" border-gray-500" />
            <div className="text-gray-600 py-4 flex items-center gap-3 text-lg font-semibold">
              Price: ${Details.price}
              {/* <Rating
                count={rating}
                className="flex text-sm"
                initialValue={rating}
                readonly
              /> */}
            </div>
            <hr className=" border-gray-500" />
           
            <hr className=" border-gray-500" />
            
            <hr className=" border-gray-500 " />
            <div className="my-4 grid grid-cols-3 md:flex space-x-2">
             
              <button
                onClick={() => handelBookedService(Details)}
                className="  py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-yellow-500 font-semibold text-white "
              >
                Add to Favorite
              </button>
              
            </div>
          </div>
        </div>
      </div>

      
    </div>

    <ModalBooked item={selectItem}/>
        
    </div>
  )
}

export default ServiceDetails