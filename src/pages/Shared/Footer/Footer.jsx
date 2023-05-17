import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-lime-500 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-bold">About Us</h4>
            <p className="text-sm">
              Wild Whimsies is your one-stop destination for adorable and high-quality animal toys. Our mission is to bring joy and imagination to children of all ages with our carefully curated collection of teddy bears, cats, dogs, and more. Let your wild imagination roam free with Wild Whimsies!
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-bold">Contact Us</h4>
            <div className="space-y-2">
              <p className="text-sm">123 Wild Whimsies Street</p>
              <p className="text-sm">Feni, Bangladesh</p>
              <p className="text-sm">Email: info@wildwhimsies.com</p>
              <p className="text-sm">Phone: +1234567890</p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-bold">Wild Delights</h4>
            <ul className="space-y-2">
              <li className="text-sm">Enjoy free shipping on all orders. No minimum purchase required.</li>
              <li className="text-sm">We offer a 30-day money-back guarantee for your peace of mind.</li>
              <li className="text-sm">Explore our exclusive limited edition toys that are sure to delight.</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-bold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-200">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col  space-y-4 md:flex-row md:justify-between md:space-y-0 max-w-5xl">
          <div className="">
            <h2 className="text-3xl font-bold">Wild Whimsies</h2>
            <p className="mt-2 text-sm">Unleash Your Wild Imagination</p>
          </div>

          <nav>
            <ul className="flex flex-wrap md:justify-center space-x-4">
              <li>
                <Link to="/" className="hover:text-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/toys" className="hover:text-gray-200">
                  All Toys
                </Link>
              </li>
              <li>
                <Link to="/mytoys" className="hover:text-gray-200">
                  My Toys
                </Link>
              </li>
              <li>
                <Link to="/addtoys" className="hover:text-gray-200">
                  Add New Toys
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-gray-200">
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs opacity-70">&copy; {new Date().getFullYear()} Wild Whimsies. All rights reserved.</p>
          <p className="text-xs opacity-70">Designed and developed by Furqan Ahmad Rupom.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
