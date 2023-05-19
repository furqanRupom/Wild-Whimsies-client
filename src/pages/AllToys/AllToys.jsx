import { useEffect, useState } from "react";
import AllToysDetails from "./AllToysDetails";

const AllToys = () => {
    const [toys,setToys] = useState([]);
    useEffect(()=>{
            fetch('http://localhost:5000/toys')
            .then(res=>res.json())
            .then(data => setToys(data))
    },[])

  return (
    <div className="mb-32 mt-8">
      <h3 className="font-Raleway text-3xl font-bold pt-16">All Toys</h3>
      <div className="w-full h-[0.14rem] bg-gray-100 mt-8 mb-4">
      <div className="w-36 bg-lime-500 h-full"></div>
      </div>
        <table className="table table-zebra w-full my-12 ">
            <thead className="text-left font-Raleway font-semibold">
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub category</th>
                <th>price</th>
                <th>Available quantity</th>
                <th></th>
            </thead>

            <tbody>
                {
                    toys.map(toy=> <AllToysDetails key={toy._id} toy={toy}/>)
                }
            </tbody>
        </table>
    </div>
  );
};

export default AllToys;
