import React, { useContext, useRef, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { ToysContext } from "../../../Providers/AuthProviders";

const Register = () => {
  const { registerUser } = useContext(ToysContext);
  const [error, setError] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const imageUrlRef = useRef();
  const [show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const name = nameRef.current.value;
    const photoUrl = imageUrlRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmRef.current.value;
    if (password !== confirmPassword) {
      return setError('password did not matched')
    };
    if (!(password.length > 6)) {
      return setError("password should have at least 6 characters");
    }


    registerUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        loggedUser.displayName = name;
        loggedUser.photoURL = photoUrl;
        form.reset()
        updateProfile(loggedUser, {
          displayName: loggedUser.displayName,
          photoURL: loggedUser.photoURL,
        })
          .then(() => {
            console.log("updated");

          })
          .catch(() => {
            console.log("not updated");
          });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message.split(':')[1].trim());
      });
    console.log(name, email, password, photoUrl);
  };

  return (
    <div className="flex items-center justify-center h-[1000px] bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-medium mb-6 text-center">
          Create your account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="text"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="text"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-lime-500"
              placeholder="Enter your Name"
              ref={nameRef}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="text"
              className="block text-gray-700 font-medium mb-2"
            >
              image url
            </label>
            <input
              type="text"
              id="text"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-lime-500"
              placeholder="Enter your url of image"
              ref={imageUrlRef}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-lime-500"
              placeholder="Enter your email address"
              ref={emailRef}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
               Password
            </label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                id="password"
                className="w-full  px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-lime-500"
                placeholder="Enter your password"
                ref={passwordRef}
                required
              />
              <div
                onClick={() => setShow(!show)}
                className="absolute right-2 top-3 text-xl text-lime-500 cursor-pointer"
              >
                {show ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={confirmShow ? "text" : "password"}
                id="password"
                className="w-full  px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-lime-500"
                placeholder="Confirm your password"
                ref={confirmRef}
                required
              />
              <div
                onClick={() => setConfirmShow(!confirmShow)}
                className="absolute right-2 top-3 text-xl text-lime-500 cursor-pointer"
              >
                {confirmShow ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
          </div>

          <h2 className="py-1 text-lime-600">{error}</h2>
          <button
            type="submit"
            className="w-full bg-lime-500 text-white py-2 rounded-lg mt-8 hover:bg-lime-600"
          >
            Sign Up
          </button>

        </form>
        <div className="text-center mt-4 flex">
          <span className="text-gray-600 mr-2">Already have an account?</span>
          <Link
            to="/login"
            className="text-lime-500 hover:text-lime-600 font-medium"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
