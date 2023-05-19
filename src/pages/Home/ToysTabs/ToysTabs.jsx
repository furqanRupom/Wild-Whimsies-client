import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AwesomeStarsRating from 'react-awesome-stars-rating';
import './ToysTabs.css';
import 'react-tabs/style/react-tabs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


const ToysTabs = () => {
  const [tabToys, setTabToys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then((res) => res.json())
      .then((data) => setTabToys(data));
  }, []);

  const toysByCategory = tabToys.reduce((acc, toy) => {
    if (!acc[toy.sub_category]) {
      acc[toy.sub_category] = [];
    }
    acc[toy.sub_category].push(toy);
    return acc;
  }, {});
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="zoom-in" className="container mx-auto p-4 mt-32 mb-16">

            <div>
                <h3 className="text-4xl font-semibold font-Raleway">Sensory Toys</h3>

                <div className="w-full h-[0.14rem] bg-gray-100 mt-8 mb-16">
                    <div className="w-36 bg-lime-500 h-full">
                    </div>
                </div>
            </div>
      <Tabs>
        <TabList className="flex my-8 justify-center items-center flex-wrap">
          {Object.keys(toysByCategory).map((category, index) => (
            <Tab
              key={index}
              className="px-4 py-2  md:text-lg font-semibold focus:outline-none cursor-pointer"
            >
              {category}
            </Tab>
          ))}
        </TabList>

        {Object.keys(toysByCategory).map((category, index) => (
          <TabPanel key={index}>
            <div className="grid  md:grid-cols-2 gap-4 mt-32 mb-8">
              {toysByCategory[category].map((toy, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">{toy.name}</h3>
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      height={100}
                      src={toy.image}
                      alt={toy.name}
                      className="w-full h-96 object-contain"
                    />
                  </div>
                  <p className="text-gray-600 py-3">{toy.description}</p>
                  <p>Price: ${toy.price}</p>
                  <div className="py-3" style={{ display: 'flex', alignItems: 'center' }}>
                    <AwesomeStarsRating
                      value={toy.rating}
                      size={20}
                      isEdit={false}
                      classNames={{
                        hover: 'awesome-stars-rating-hover',
                        selected: 'awesome-stars-rating-selected',
                      }}
                    />
                  </div>
                  <Link to={`/singleToys/${toy?._id}`}>
                  <button className="my-3 px-7 py-3 rounded-full bg-lime-500 text-white hover:bg-lime-600">
                    View Details
                  </button>
                  </Link>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ToysTabs;
