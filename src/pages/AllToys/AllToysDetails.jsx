import { Link } from "react-router-dom";

const AllToysDetails = ({ toy }) => {
  const {_id, sellerName, name, price, sub_category, quantity_available, image } =
    toy;
  return (
    <>
      <tr className=" hover:bg-lime-200">
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

export default AllToysDetails;
