import { useLocation } from "react-router-dom";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Hero from "../Hero/Hero";
import Mission from "../Mission/Mission";
import ToysTabs from "../ToysTabs/ToysTabs";
import {FaPaperPlane} from 'react-icons/fa';
import useTitle from "../../../Hooks/useTittle";
import Enhance from "../Enhance/Enhance";

const  Home = () => {
    const location = useLocation()
    const routesName = location.pathname
    useTitle(routesName .slice(1));
    return (
        <div>
              <Hero />
              <div className="px-8">
              <About />
              <Gallery />
              <ToysTabs />
              <Enhance />
              <Mission />


                <div className="grid grid-cols-1 gap-y-5 md:gap-y-0 md:grid-cols-2 mt-48 mb-16     px-4 sm:px-10 md:px-20 py-8 shadow-lg rounded-lg items-center">

                    <div className="flex flex-col space-y-3 md:flex-row md:space-y-0  items-center space-x-5">
                    <div className="bg-lime-500 w-fit p-4 md:p-6 text-white text-md sm:text-xl md:text-2xl rounded-full">
                        <FaPaperPlane />
                    </div>
                    <div className="text-md sm:text-xl md:text-2xl font-Raleway font-semibold w-full">
                        <h3>Subscribe to our newsletter</h3>
                        <h3>& get <span className="text-lime-500 inline">10% discount</span> </h3>
                    </div>
                    </div>
                    <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row space-x-2">
                        <input className="bg-gray-100 text-gray-500 px-3 py-3 rounded-2xl focus:outline-lime-400 md:w-9/12  outline-gray-200 outline-2 outline " type="text" placeholder="Enter your email address"/>
                        <button className=" px-4 py-3 md:px-7 md:py-4 rounded-2xl bg-lime-500 text-white font-semibold ">Subscribe</button>
                    </div>


                </div>
              </div>

        </div>
    );
};


export default Home;