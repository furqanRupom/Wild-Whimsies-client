import { useLoaderData, useLocation } from "react-router-dom";
import AwesomeStarsRating from "react-awesome-stars-rating";
import { Toaster, toast } from "react-hot-toast";
import useTitle from "../../Hooks/useTittle";

const SingleToys = () => {
    const location = useLocation()
    const routesName = location.pathname
    useTitle(routesName .slice(1));
  const {
    _id,
    sellerName,
    sellerEmail,
    name,
    price,
    sub_category,
    quantity_available,
    image,
    description,
    rating,
  } = useLoaderData();

  return (
    <div>
      <h3 className="font-Raleway text-3xl font-bold pt-16">{name} Toys</h3>
      <div className="w-full h-[0.14rem] bg-gray-100 mt-8 mb-4">
        <div className="w-36 bg-lime-500 h-full"></div>
      </div>
      <div className="w-full md:max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col  md:flex-row items-center mt-32 mb-16 font-Nunito">
        <div className="  w-1/2">
          <img className="w-full h-auto object-cover" src={image} alt={name} />
        </div>
        <div className="p-6  md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex items-center mb-4">
            <span className="font-semibold text-lg text-green-600 mr-2">
              Price:
            </span>
            <span className="text-gray-600">${price}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="font-semibold text-lg text-gray-600 mr-2">
              Seller:
            </span>
            <span className="text-gray-600">{sellerName}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="font-semibold text-lg text-gray-600 mr-2">
              Seller Email:
            </span>
            <span className="text-gray-600">{sellerEmail}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="font-semibold text-lg text-gray-600 mr-2">
              Sub-category:
            </span>
            <span className="text-gray-600">{sub_category}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="font-semibold text-lg text-gray-600 mr-2">
              Quantity available:
            </span>
            <span className="text-gray-600">{quantity_available}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="font-semibold text-lg text-gray-600 mr-2">
              Rating:
            </span>
            <div className="flex items-center space-x-3">
              <AwesomeStarsRating
                value={rating}
                size={24}
                isEdit={false}
                classNames={{
                  hover: "awesome-stars-rating-hover",
                  selected: "awesome-stars-rating-selected",
                }}
              />
              <span className="text-gray-600">({rating})</span>
            </div>
          </div>
          <button onClick={()=> toast.success('Added to the cart !')} className="bg-lime-500 text-white py-3 px-6 rounded-lg hover:bg-lime-600 transition duration-300 ease-in-out">
            Add to Cart
          </button>
        </div>
      </div>

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

export default SingleToys;
