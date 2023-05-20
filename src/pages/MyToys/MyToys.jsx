import { useContext, useEffect, useState } from "react";
import { ToysContext } from "../../Providers/AuthProviders";
import MyToysDetails from "./MyToysDetails";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import useTitle from "../../Hooks/useTittle";
import { handler } from "daisyui";

const MyToys = () => {
  const { user } = useContext(ToysContext);
  const [sortOrder, setSortOrder] = useState("");
  const [sortBy, setSortBy] = useState("");
  const location = useLocation();
  const routesName = location.pathname;
  useTitle(routesName.slice(1));
  console.log(user);
  const [myToys, setMyToys] = useState([]);

  const fetchData = () => {
    let url = `https://wild-whimsies-server.vercel.app/MyToys?sellerEmail=${user?.email}&sortOrder=${sortOrder}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, [sortOrder]);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const deleteToysSubmit = (id) => {
    console.log(id);
    Swal.fire({
      title: "Deleting this will remove it permanently",
      text: "Are you sure you want to proceed?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(132 204 22)",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://wild-whimsies-server.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", "Your Toys has been deleted.", "success");
          });
        const remaining = myToys.filter((ty) => ty._id !== id);
        setMyToys(remaining);
      }
    });
  };
  return (
    <div className="min-h-screen">
      <h3 className="font-Raleway text-3xl font-bold pt-16">My Toys</h3>
      <div className="w-full h-[0.14rem] bg-gray-100 mt-8 mb-4">
        <div className="w-36 bg-lime-500 h-full"></div>
      </div>
      <div>
        <div className="flex justify-end">
          <div className="">
            <select
              id="sortOrder"
              value={sortOrder}
              onChange={handleSortChange}
              className="block  bg-white border border-lime-400 hover:border-lime-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">sort by price</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>

        {/* Render the toy data */}
        {/* Render the toy data */}
      </div>
      <table className="table table-zebra w-full mt-12 mb-16">
        <thead className="text-left font-Raleway font-semibold">
          <th></th>
          <th></th>
          <th>Toy Image</th>
          <th>Seller</th>
          <th>Toy Name</th>
          <th>Sub category</th>
          <th>price</th>
          <th>rating</th>
          <th>Available quantity</th>
          <th></th>
        </thead>

        <tbody>
          {myToys.map((toy) => (
            <MyToysDetails
              key={toy._id}
              toy={toy}
              deleteToysSubmit={deleteToysSubmit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
