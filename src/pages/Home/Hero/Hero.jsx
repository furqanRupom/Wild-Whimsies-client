import {bgBanner} from './Hero.module.css'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const  Hero = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className={bgBanner}>
                <div className="w-full h-full flex items-center justify-center ">
                    <div  data-aos="zoom-in" className="flex flex-col bg-white p-12 rounded-lg shadow-md text-center max-w-[330px] mx-auto sm:max-w-full">
                        <h2 className=" font-bold text-lime-400 text-xs md:text-base ">Your Ultimate Animal Toys Wonderland!</h2>

                        <p className="leading-relaxed font-Raleway pt-4 font-bold  max-w-xs md:max-w-xl  sm:text-2xl md:text-4xl mx-auto">Whimsical animals for playful imaginations </p>

                        <button className="bg-lime-400 px-7 py-3 rounded-3xl text-white w-fit mx-auto font-bold mt-4 hover:shadow-lg text-xs md:text-base hover:shadow-lime-500 transition-colors duration-200">
                        Find Your Wild Whimsy
                        </button>
                    </div>
                </div>
        </div>
    );
};


export default Hero;