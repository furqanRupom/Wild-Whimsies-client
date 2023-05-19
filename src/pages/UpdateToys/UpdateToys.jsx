import { Toaster, toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateToys = () => {
    const {_id,price,quantity_available,description,name} = useLoaderData();
    const handleToyUpdate = (e)=>{
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const description = form.description.value;
        const quantity_available = form.quantity.value;
        const updateInfo = {
            price,
            description,
            quantity_available
        }

        fetch(`http://localhost:5000/toys/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateInfo)
        })
        .then(res=> res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                toast.success(`${name} Toys Updated Successfully`)
            }
        })
    }
  return (
    <div>
      <h3 className="font-Raleway text-3xl font-bold pt-16">Update Toys</h3>
      <div className="w-full h-[0.14rem] bg-gray-100 mt-8 mb-4">
        <div className="w-36 bg-lime-500 h-full"></div>
      </div>

    <form onSubmit={handleToyUpdate} className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg mt-32 mb-16">
      <div className="grid sm:grid-cols-2 gap-6 mb-8 mt-5">
          <div>
            <label
              htmlFor="price"
              className="block mb-2 font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              defaultValue={price}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-lime-500 focus:border-lime-500"
              placeholder="Update toy price"


              required
            />
          </div>



          <div>
            <label
              htmlFor="quantityAvailable"
              className="block mb-2 font-medium text-gray-700"
            >
              update quantity
            </label>
            <input
              type="number"
              name="quantity"
              defaultValue={quantity_available}
              id="quantityAvailable"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-lime-500 focus:border-lime-500"
              placeholder=" update quantity"


              required
            />
          </div>

        </div>

        <textarea
            id="description"
            name="description"
            defaultValue={description}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-lime-500 focus:border-lime-500"
            placeholder="Update toy description"
            rows="3"

            required
          ></textarea>
        <button
          type="submit"
          className="w-full max-w-5xl mx-auto mt-6 mb-5 py-4 bg-lime-500 text-white font-semibold rounded-md hover:bg-lime-600 "
        >
          update the toy
        </button>

    </form>

    <Toaster
        containerStyle={{
          top: 100,
          left: 20,
          bottom: 20,
          right: 20,
        }}
        toastOptions={{

          style: {
            background: "#fff",
            color: "#84cc16",
            width: "300px",
            fontWeight: "bold",
            zIndex: "200",
          },
          success: {
            iconTheme: {
              primary: "#84cc16",
              secondary: "#fff",
            },
          },
        }}
        duration="5000"
        position="top-center"
      />
    </div>
  );
};

export default UpdateToys;
