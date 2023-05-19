import { useLoaderData } from "react-router-dom";

const UpdateToys = () => {
    const {_id,price,quantity_available,description} = useLoaderData();
    console.log(_id)
    const handleToyUpdate = (e)=>{
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const description = form.description.value;
        const quantity = form.quantity.value;
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
    </div>
  );
};

export default UpdateToys;
