import { useEffect, useState } from "react";
import AllToysDetails from "./AllToysDetails";
import useTitle from "../../Hooks/useTittle";
import { useLocation } from "react-router-dom";
import {FaSearch} from 'react-icons/fa'

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchName, setSearchName] = useState('');
  const location = useLocation();
  const name = location.pathname;
  console.log(name);
  useTitle(name.slice(1));
  const [showMore, setShowMore] = useState(false);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    fetchToys(20);
  }, []);
  const fetchToys = (limit) => {
    const url = `http://localhost:5000/toys?limit=${limit}}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data); // Append new toys to the existing toys
      })
      .catch((err) => console.error('Error fetching toys:', err));
  };

  const [disappear ,SetDisappear] = useState(true)

  const handleShowMore = () => {
    SetDisappear(false);
    fetch('http://localhost:5000/AllToys')
    .then(res=>res.json())
    .then(data=> setToys(data))
  }




  const  handleSearchQueryChange = (e)=>{
    e.preventDefault()
    fetch(`http://localhost:5000/SearchToys/${searchName}`)
    .then(res=>res.json())
    .then(data=> setToys(data))
  }








  return (
    <div className="mb-32 mt-8 min-h-screen">
      <div className="flex items-center justify-between pt-16">
      <h3 className="font-Raleway text-3xl font-bold ">All Toys</h3>
      <form onSubmit={ handleSearchQueryChange }  className="mx-3 flex items-center space-x-2" action="">
        <input onChange={(e)=> setSearchName(e.target.value)} value={searchName} className="focus:outline-lime-500 outline outline-gray-200 px-3 py-1 rounded-lg" type="text" placeholder="Search by name" />
        <button className="text-xl text-lime-500" type="submit"><FaSearch /></button>
      </form>
      </div>

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


         <button
        className={toys.length  >= 20  && disappear === true? 'px-7 py-3 rounded-lg bg-lime-500 text-white':'hidden'}
        onClick={handleShowMore}
      >
        Show More
      </button>



    </div>
  );
};

export default AllToys;
