const AllToysDetails = ({ toy }) => {
  const { sellerName, name, price, sub_category, quantity_available } = toy;
  return (
    <>
      <tr className=" hover:bg-lime-200">
        <td className=" py-2 my-3">{sellerName}</td>
        <td className=" py-2 my-3">{name}</td>
        <td className=" py-2 my-3">{sub_category}</td>
        <td className=" py-2 my-3">${price}</td>
        <td className=" py-2 my-3">{quantity_available}</td>
        <td>
            <button className="bg-lime-500 rounded-lg hover:bg-lime-600 text-white p-3">
                Details More
            </button>
        </td>
      </tr>
    </>
  );
};

export default AllToysDetails;
