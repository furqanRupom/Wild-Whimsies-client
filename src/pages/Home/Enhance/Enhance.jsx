import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Enhance = () => {
  const girlsToys = [
    "Dogs Toys",
    "Teddy Bears Toys",
    "Cats Toys",
    "Rabbit Toys",
    "Unicorn Toys",
  ];
  const boysToys = [
    "Lion Toys",
    "Dinosaur Toys",
    "Elephant Toys",
    "Shark Toys",
    "Superhero Toys",
  ];
  const featuredToys = [
    "Panda Toys",
    "Monkey Toys",
    "Giraffe Toys",
    "Kangaroo Toys",
    "Tiger Toys",
  ];
  const specialToys = [
    "Animal Puzzles",
    "Animal Figurines",
    "Animal Plush Toys",
    "Animal Play Sets",
    "Animal Building Blocks",
  ];

  return (
    <section className="py-16 max-w-6xl mx-auto">
      <h2 className="text-xl md:text-3xl font-Raleway font-semibold">
        Enchanting Playthings
      </h2>
      <div className="w-full h-[0.14rem] bg-gray-100 mt-8 mb-16">
        <div className="w-36 bg-lime-500 h-full"></div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="  w-full ">
              <h3 className="text-xl font-semibold mb-4">Toys for Girls</h3>
              <ul className="space-y-2">
                {girlsToys.map((toy) => (
                  <li key={toy} className="flex items-center cursor-pointer md:text-xl ">
                    <MdKeyboardDoubleArrowRight className="text-gray-500 mr-2" />
                    {toy}
                  </li>
                ))}
              </ul>
              <button className="bg-lime-500 text-white px-4 py-2 rounded-full mt-4">
                Show More
              </button>
            </div>
            <div className="w-full mt-6 md:mt-0">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="https://img.freepik.com/premium-photo/happy-little-girl-casual-clothing-posing-isolated-white-background_484921-25756.jpg?size=626&ext=jpg&ga=GA1.2.1081246971.1673798672&semt=ais"
                  alt="Girls playing with animal toys"
                  className="w-full h-72 md:h-full object-contain md:object-cover rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="  w-full ">
              <h3 className="text-xl font-semibold mb-4">Toys for Boys</h3>
              <ul className="space-y-2">
                {boysToys.map((toy) => (
                  <li key={toy} className="flex items-center cursor-pointer md:text-xl ">
                    <MdKeyboardDoubleArrowRight className="text-gray-500 mr-2" />
                    {toy}
                  </li>
                ))}
              </ul>
              <button className="bg-lime-500 text-white px-4 py-2 rounded-full mt-4">
                Show More
              </button>
            </div>
            <div className="w-full mt-6 md:mt-0">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="https://img.freepik.com/free-photo/portrait-cheerful-boy-pointing-white-banner-isolated_186202-6517.jpg?w=360&t=st=1684676514~exp=1684677114~hmac=67f44f6240cb2cb82953d278af7b62c16b96b570db94e2a8f17e4315751332f4"
                  alt="Boys playing with animal toys"
                  className="w-full h-72 md:h-full object-contain md:object-cover rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="  w-full ">
              <h3 className="text-xl font-semibold mb-4">Featured Toys</h3>
              <ul className="space-y-2">
                {featuredToys.map((toy) => (
                  <li key={toy} className="flex items-center cursor-pointer md:text-xl ">
                    <MdKeyboardDoubleArrowRight className="text-gray-500 mr-2" />
                    {toy}
                  </li>
                ))}
              </ul>
              <button className="bg-lime-500 text-white px-4 py-2 rounded-full mt-4">
                Show More
              </button>
            </div>
            <div className="w-full mt-6 md:mt-0">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="https://m.media-amazon.com/images/I/41ye+bsmIpL.jpg"
                  alt="Featured toys"
                  className="w-full h-72 md:h-full object-contain md:object-cover rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="  w-full ">
              <h3 className="text-xl font-semibold mb-4">Special Toys </h3>
              <ul className="space-y-2">
                {specialToys.map((toy) => (
                  <li key={toy} className="flex items-center cursor-pointer md:text-xl ">
                    <MdKeyboardDoubleArrowRight className="text-gray-500 mr-2" />
                    {toy}
                  </li>
                ))}
              </ul>
              <button className="bg-lime-500 text-white px-4 py-2 rounded-full mt-4">
                Show More
              </button>
            </div>
            <div className="w-full mt-6 md:mt-0">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2020/9/DP/OT/HH/2391943/img-5364-1000x1000.JPG"
                  alt="Animal toys"
                  className="w-full h-72 md:h-full object-contain md:object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enhance;
