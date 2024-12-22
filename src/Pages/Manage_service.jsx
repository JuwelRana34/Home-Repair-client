import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function Manage_service() {

  const handelDelete = () => {
    console.log("Delete")
  }
  const handelEdit = () => {
    console.log("Edit")
  }

  return (
    
    <div className="w-[80%] grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 "> 
      <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src="https://i.ibb.co.com/rsPxmfY/07-699f9620f4254f2e9aae0f8fe9e580ab.jpg"
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title capitalize">
       name
        <div className="badge badge-secondary">$56</div>
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions h-10 justify-end items-center">
        <button onClick={handelDelete} className="badge badge-outline py-3 bg-rose-100 text-rose-600 font-semibold "> <MdDeleteForever/> Delete </button>
        <button  onClick={handelEdit} className="badge badge-outline py-3 bg-yellow-100 text-orange-500 font-semibold "><FaRegEdit /> edit</button>
      </div>
    </div>
  </div>
       </div>
    
  )
}

export default Manage_service