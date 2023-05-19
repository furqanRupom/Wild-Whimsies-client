import { useContext, useEffect, useState } from "react";
import { ToysContext } from "../../Providers/AuthProviders";
import MyToysDetails from "./MyToysDetails";

const MyToys = () => {
  const { user } = useContext(ToysContext);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/toys?${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  });
  return (
    <div >
      <h3 className="font-Raleway text-3xl font-bold pt-16">My Toys</h3>
      <div className="w-full h-[0.14rem] bg-gray-100 mt-8 mb-4">
        <div className="w-36 bg-lime-500 h-full"></div>
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
              {
                myToys.map(toy=> <MyToysDetails key={toy._id} toy={toy} />)
              }
            </tbody>
      </table>
    </div>
  );
};

export default MyToys;
