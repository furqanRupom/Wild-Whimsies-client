import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section data-aos="zoom-in" className=" py-12 mt-32 mb-16">
        <h2 className=" text-2xl  md:text-3xl lg:text-4xl font-Raleway font-bold mb-4">Discover the World of Wild Whimsies</h2>
        <h3 className="text-xl font-semibold mb-4">Unleash Joy and Adventure</h3>
        <div className="w-full h-[0.14rem] bg-gray-100 mt-8 mb-16">
                    <div className="w-36 bg-lime-500 h-full">
                    </div>
                </div>
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 md:mr-4">
          <img src="https://img.freepik.com/premium-photo/colorful-toys-collection-desk_488220-3796.jpg?w=400"  alt="About Image" className="w-full object-cover" />
        </div>
        <div className="md:w-1/2">
          <p className="mb-6 text-gray-600 leading-relaxed">
            Welcome to Wild Whimsies, a haven for animal lovers and their beloved pets. We curate a wide collection of enchanting animal toys that ignite imagination and bring endless joy. From snuggly teddy bears to interactive dog puzzles, we offer carefully crafted toys that captivate and engage, creating special moments of play and companionship.
          </p>
          <h3 className="text-xl font-bold mb-4">Our Distinctive Features:</h3>
          <ul className="list-disc pl-6">
            <li>Hand-picked selection of premium animal toys</li>
            <li>Thoughtfully designed for durability and safety</li>
            <li>Variety of engaging toys to cater to different pet personalities</li>
            <li>Inspired by nature, stimulating your pet's senses</li>
            <li>Committed to providing memorable experiences for you and your furry friends</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
