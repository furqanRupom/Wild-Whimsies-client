import { useEffect, useState } from "react";
import AllToysDetails from "./AllToysDetails";
import useTitle from "../../Hooks/useTittle";
import { useLocation } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const location = useLocation();
  const name = location.pathname;
  console.log(name);
  useTitle(name.slice(1));
  const [showMore, setShowMore] = useState(false);
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    fetchToys(20, 0);
  }, []);

  const fetchToys = (limit, skipValue) => {
    fetch(`http://localhost:5000/toys?limit=${limit}&skip=${skipValue}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setShowMore(data.length === limit);
      })
      .catch((err) => console.error('Error fetching toys:', err));
  };

  const handleShowMore = () => {
    fetchToys(-1, skip + 20);
    setSkip((prevSkip) => prevSkip + 20);
  };

  return (
    <div className="mb-32 mt-8">
      <h3 className="font-Raleway text-3xl font-bold pt-16">All Toys</h3>
      <div className="w-full h-[0.14rem] bg-gray-100 mt-8 mb-4">
        <div className="w-36 bg-lime-500 h-full"></div>
      </div>
      <table className="table table-zebra w-full my-12 ">
        <thead className="text-left font-Raleway font-semibold">
          <th>toy image</th>
          <th>Seller</th>
          <th>Toy Name</th>
          <th>Sub category</th>
          <th>price</th>
          <th>Available quantity</th>
          <th></th>
        </thead>

        <tbody>
          {toys.map((toy) => (
            <AllToysDetails key={toy._id} toy={toy} />
          ))}
        </tbody>
      </table>

      {
        toys.length>= 20 && <button
        className="px-7 py-3 rounded-lg bg-lime-500 text-white"
        onClick={handleShowMore}
      >
        Show More
      </button>
      }


    </div>
  );
};

export default AllToys;
