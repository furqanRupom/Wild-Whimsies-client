import AwesomeStarsRating from "react-awesome-stars-rating";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import "./MyToys.css";
import { Link, useLocation } from "react-router-dom";
import useTitle from "../../Hooks/useTittle";

const MyToysDetails = ({ toy, deleteToysSubmit }) => {

  const location = useLocation()
  const routesName = location.pathname
  useTitle(routesName .slice(1));
  const {
    sellerName,
    name,
    price,
    sub_category,
    quantity_available,
    rating,
    image,
    _id,
  } = toy;




  return (
    <>
      <tr>
        <td>
          <button
            onClick={() => deleteToysSubmit(_id)}
            className="btn btn-sm bg-lime-500 btn-circle border-none hover:bg-lime-600 my-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </td>
        <td className="text-lg text-white">
          <Link to={`/updateToys/${_id}`}>
            <div className="bg-lime-500 p-2 inline-flex items-center rounded-full hover:bg-lime-600">
              <ArrowPathIcon className="w-5 h-5 cursor-pointer " />
            </div>
          </Link>
        </td>
        <td className=" py-2 my-3">
          <img
            className="w-20 h-20 rounded-full object-cover"
            src={image}
            alt=""
          />
        </td>
        <td className=" py-2 my-3">{sellerName}</td>
        <td className=" py-2 my-3">{name}</td>

        <td className=" py-2 my-3">{sub_category}</td>
        <td className=" py-2 my-3">${price}</td>
        <td className=" py-2 my-3">
          <div
            className="py-3"
            style={{ display: "flex", alignItems: "center" }}
          >
            <AwesomeStarsRating
              value={rating}
              size={20}
              isEdit={false}
              classNames={{
                hover: "awesome-stars-rating-hover",
                selected: "awesome-stars-rating-selected",
              }}
            />
          </div>
        </td>

        <td className=" py-2 my-3">{quantity_available}</td>
        <td>
          <Link to={`/singleToys/${_id}`}>
          <button className="bg-lime-500 rounded-lg hover:bg-lime-600 text-white p-3">
            Details More
          </button>
          </Link>

        </td>
      </tr>
    </>
  );
};

export default MyToysDetails;
