import { useContext, useEffect, useState } from "react";
import { ToysContext } from "../../Providers/AuthProviders";
import MyToysDetails from "./MyToysDetails";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import useTitle from "../../Hooks/useTittle";

const MyToys = () => {
  const { user } = useContext(ToysContext);
  const location = useLocation()
  const routesName = location.pathname
  useTitle(routesName .slice(1));
  console.log(user)
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/MyToys?sellerEmail=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data)
        console.log(data)
      });
  },[]);

  const deleteToysSubmit = (id)=>{
    console.log(id)
    Swal.fire({
      title: 'Deleting this will remove it permanently',
      text: "Are you sure you want to proceed?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(132 204 22)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/toys/${id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          Swal.fire(
            'Deleted!',
            'Your Toys has been deleted.',
            'success'
          )
        })
        const remaining = myToys.filter(ty => ty._id !== id)
        setMyToys(remaining);

      }
    })

  }
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
                myToys.map(toy=> <MyToysDetails key={toy._id} toy={toy} deleteToysSubmit={deleteToysSubmit} />)
              }
            </tbody>
      </table>
    </div>
  );
};

export default MyToys;
