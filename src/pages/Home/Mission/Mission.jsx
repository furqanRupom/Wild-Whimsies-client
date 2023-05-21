import React from "react";
import missionImg from "../../../assets/mission.png";

const Mission = () => {


  return (
    <section className="mt-32 mb-16">
     <h2 className=" text-xl md:text-3xl font-Raleway font-semibold">
            Our Mission for Wild Whimsies
          </h2>
          <p>
           A Haven for Animal Toys
          </p>
      <div className="w-full h-[0.14rem] bg-gray-100 mt-8 mb-16">
        <div className="w-36 bg-lime-500 h-full"></div>
      </div>
      <section className=" py-10 grid  lg:grid-cols-2 gap-5 ">
        <div className="container mx-auto">

          <blockquote className=" text-gray-700 mb-8">
            At Wild Whimsies, our mission is to create a haven for animal lovers
            of all ages, where imagination runs wild and playtime is filled with
            joy. We are dedicated to providing a wide range of high-quality,
            ethically sourced animal toys that inspire curiosity, nurture
            compassion, and foster a deep connection with the natural world.
          </blockquote>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">
              Nurturing Wonder and Empathy
            </h3>
            <p className="text-gray-700 mb-6">
              At Wild Whimsies, we believe that every child and adult deserves
              the opportunity to explore the wonders of the animal kingdom
              through play. Our carefully curated collection of animal toys
              sparks imagination and encourages a lifelong love for wildlife.
              From cuddly plush companions to realistic figurines, each item is
              designed to engage and captivate, fostering a sense of wonder and
              empathy for the diverse creatures that inhabit our planet.
            </p>

            <h3 className="text-xl font-semibold mb-4">
              Experience the Magic of Wild Whimsies
            </h3>
            <p className="text-gray-700 mb-6">
              Indulge your sense of adventure, nurture your compassion, and let
              your imagination soar with the extraordinary animal toys available
              at Wild Whimsies. Explore our collection today and discover the
              joy of bringing the enchanting world of wildlife into your life,
              one whimsical toy at a time.
            </p>
          </div>
        </div>

        <div>
          <img
            src={missionImg}
            className="h-full mx-auto lg:mx-0 object-cover rounded-[100%]  "
            alt=""
          />
        </div>
      </section>



    </section>
  );
};

export default Mission;
