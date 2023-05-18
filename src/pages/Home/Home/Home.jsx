import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Hero from "../Hero/Hero";
import Mission from "../Mission/Mission";
import ToysTabs from "../ToysTabs/ToysTabs";

const  Home = () => {

    return (
        <div>
              <Hero />

              <div className="px-8">
              <About />
              <Gallery />
              <ToysTabs />
              <Mission />

              </div>

        </div>
    );
};


export default Home;