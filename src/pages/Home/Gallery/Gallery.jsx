import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="zoom-in" className="mt-32 mb-16">



      <div>
                <h3 className="text-4xl font-bold font-Raleway">Wild Wonders</h3>
                <p>Vibrant Whimsical Delight</p>

                <div className="w-full h-[0.14rem] bg-gray-100 mt-8 mb-16">
                    <div className="w-36 bg-lime-500 h-full">
                    </div>
                </div>
            </div>
      <div className="grid grid-cols-4 max-w-3xl lg:max-w-4xl mx-auto gap-5">
        <div className="bg-white shadow rounded-lg">
          <img
            src="https://www.sendacuddly.co.uk/wp-content/uploads/2023/02/PIP3BL-350x435.jpeg"
            alt=""
          />
        </div>

        <div className="bg-white shadow rounded-lg">
          <img
            src="https://www.bigw.com.au/medias/sys_master/images/images/h8d/hb5/30654566662174.jpg"
            alt=""
          />
        </div>

        <div className="bg-white shadow rounded-lg">
          <img
            src="https://m.media-amazon.com/images/I/31ymSLGdAaL._SX300_SY300_QL70_ML2_.jpg"
            alt=""
          />
        </div>

        <div className="bg-white shadow rounded-lg">
          <img
            src="https://i.ebayimg.com/images/g/EhwAAOSwT3dhcl24/s-l640.jpg"
            alt=""
          />
        </div>

        <div className="bg-white shadow rounded-lg">
          <img
            src="https://img.fruugo.com/product/6/65/458821656_max.jpg"
            alt=""
          />
        </div>

        <div className="bg-white shadow rounded-lg">
          <img
            src="https://cdn11.bigcommerce.com/s-xr05ynhyn0/images/stencil/1280x1280/products/4297/16513/_6__05803.1668143377.png"
            alt=""
          />
        </div>

        <div className="bg-white shadow rounded-lg">
          <img
            src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0e6335e113da999a7976_33568-4-toy-image-min-p-500.png"
            alt=""
          />
        </div>

        <div className="bg-white shadow rounded-lg">
          <img
            src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0db61f2da2a4ef173617_cute-plush-toy-stuffed-animal-47335-min-p-500.png"
            alt=""
          />
        </div>

        <div className="bg-white shadow rounded-lg">
          <img
            src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png"
            alt=""
          />
        </div>

        <div className="bg-white shadow rounded-lg">
          <img
            src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min-p-500.png"
            alt=""
          />
        </div>

        <div className="bg-white shadow rounded-lg">
          <img
            src="https://cdn.shopify.com/s/files/1/1011/8106/products/Cuddle-Puppy-Standing-Corgi_800x.jpg?v=1652802460"
            alt=""
          />
        </div>

        <div className="bg-white shadow rounded-lg">
          <img
            src="https://www.jellycat.com/images/products/medium/FW6CAT.jpg"
            alt=""
          />
        </div>
      </div>
      <p className="font-Raleway  md:text-xl pt-10 pb-2 leading-relaxed text-center max-w-5xl mx-auto ">
      Step into the magical realm of Wild Whimsies' gallery, where imagination runs wild and playful wonders roam free. Our carefully curated collection of animal toys invites you on a whimsical journey through the untamed corners of your imagination
      </p>
    </div>
  );
};

export default Gallery;
