
import { toast } from "sonner";
import Slider from "../Components/Slider";
import { Button } from "keep-react";

function Home() {

  const handleDelete = () => {
    toast.custom((t) => (
      <div 
       className="p-4 bg-white rounded-lg shadow-lg"
      >
       
        <p>Are you sure you want to delete this item?</p>
        <div 
         className="flex gap-2 justify-end mt-2"
        >
          <Button
            onClick={() => {
              toast.dismiss(t);
              // Perform the delete action here
              console.log("Item deleted");
              toast.success("Item successfully deleted!");
            }}
            className="bg-green-500 text-white"
          >
            Confirm
          </Button>
          <Button
            onClick={() => {
              toast.dismiss(t);
              console.log("Delete canceled");
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
      <Slider/>

       
        
        <button onClick={handleDelete}>Show Delete Confirmation</button>
    </>
  );
}

export default Home;
