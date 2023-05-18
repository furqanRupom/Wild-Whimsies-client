import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Hero from "../Hero/Hero";
import Mission from "../Mission/Mission";
import ToysTabs from "../ToysTabs/ToysTabs";

const  Home = () => {

    return (
        <div>
              <Hero />
              <About />
              <Gallery />
              <ToysTabs />
              <Mission />

        </div>
    );
};


export default Home;