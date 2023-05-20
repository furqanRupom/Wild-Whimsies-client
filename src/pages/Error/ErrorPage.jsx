import { Link } from "react-router-dom";

const  ErrorPage = () => {

    return (
        <div className="flex items-center justify-center">
          <div className="-mt-12">
         <img src="https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1900.jpg?w=740&t=st=1684571848~exp=1684572448~hmac=8be4105af5cbcc9e4fbb2e5c08750d9210cc2102264572838fd2bb231ca1469a" alt="" />

        <div className="flex items-center justify-center -mt-12">

        <Link to="/">
        <button className="px-7 py-3 rounded-lg bg-lime-500 text-white font-semibold ">Back To Home</button>
        </Link>
         </div>
          </div>
        </div>
    );
};


export default ErrorPage;