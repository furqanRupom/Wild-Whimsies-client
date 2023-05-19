import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { ToysContext } from "../../Providers/AuthProviders";
import { Toaster, toast } from "react-hot-toast";

const AddToysForm = () => {
  const { user } = useContext(ToysContext);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [quantityAvailable, setQuantityAvailable] = useState(0);
  const [rating, setRating] = useState(0);
  const [price,setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    const form = e.target
    e.preventDefault();
    console.log("Form submitted:", {
      sellerName: user?.displayName,
      sellerEmail: user?.email,
      name,
      image,
      description,
      sub_category:subCategory,
      quantity_available: quantityAvailable,
      rating,
      price

    });

    const toysInfo = {
        sellerName: user?.displayName,
        sellerEmail: user?.email,
        name,
        image,
        description,
        sub_category:subCategory,
        quantity_available: quantityAvailable,
        price,
        rating,
    }

    fetch('http://localhost:5000/toys',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(toysInfo)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    toast.success('new toys successfully created!')
    // Reset form fields
    setImage("");
    setName("");
    setSubCategory("");
    setQuantityAvailable(0);
    setRating(0);
    setDescription("");
    setPrice(0)
    form.reset()
  };

  return (
    <>
      <h3 className="font-Raleway text-3xl font-bold pt-16">Add New Toys</h3>
      <div className="w-full h-[0.14rem] bg-gray-100 mt-8 mb-4">
        <div className="w-36 bg-lime-500 h-full"></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg mt-32 mb-16"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-lime-500 focus:border-lime-500"
              placeholder="Enter toy name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block mb-2 font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="text"
              id="image"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-lime-500 focus:border-lime-500"
              placeholder="Enter image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          <div className="mt-2">
            <label
              htmlFor="subCategory"
              className="block  font-medium text-gray-700"
            >
              Sub Category
            </label>
            <select
              id="subCategory"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-lime-500 focus:border-lime-500"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              required
            >
                <option value="">Select sub-category</option>
              <option value="Teddy Bears Toys">Teddy Bears Toys</option>
              <option value="Cats Toys">Cats Toys</option>
              <option value="Dogs Toys">Dogs Toys</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="quantityAvailable"
              className="block mb-2 font-medium text-gray-700"
            >
              Quantity Available
            </label>
            <input
              type="number"
              id="quantityAvailable"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-lime-500 focus:border-lime-500"
              placeholder="Enter quantity available"
              value={quantityAvailable}
              onChange={(e) => setQuantityAvailable(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <label
              htmlFor="rating"
              className="block mb-2 font-medium text-gray-700"
            >
              Rating
            </label>
            <input
              type="number"
              id="rating"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-lime-500 focus:border-lime-500"
              placeholder="Enter rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>
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
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-lime-500 focus:border-lime-500"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="description"
            className="block mb-2 font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-lime-500 focus:border-lime-500"
            placeholder="Enter toy description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full mt-6 py-4 bg-lime-500 text-white font-semibold rounded-md hover:bg-lime-600 "
        >
          Add Toy
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
    </>
  );
};

export default AddToysForm;
