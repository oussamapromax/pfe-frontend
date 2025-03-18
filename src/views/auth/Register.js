import React from "react";
import { Link } from "react-router-dom";
import { IoIosMail, IoIosLock, IoIosPerson } from "react-icons/io";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // Gestion des changements de champs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Efface l'erreur quand l'utilisateur tape
  };
  // Vérification du formulaire
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Enter a valid email";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Ici, tu peux envoyer les données au backend
    }
  };
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign up with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                 
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/google.svg").default}
                    />
                    Google
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign up with credentials</small>
                </div>
                <form>
                <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-3">
        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
          Name
        </label>
          <div className="flex items-center border border-gray-300 rounded-lg shadow-sm px-3 py-2 bg-white">
            <IoIosPerson className="text-blueGray-600 text-xl" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full transition-all duration-150"
              placeholder="Full Name"
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-3">
        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
          Email
        </label>
          <div className="flex items-center border border-gray-300 rounded-lg shadow-sm px-3 py-2 bg-white">
            <IoIosMail className="text-blueGray-600 text-xl" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full transition-all duration-150"
              placeholder="Email"
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div className="mb-3">
        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
          Password
        </label>
          <div className="flex items-center border border-gray-300 rounded-lg shadow-sm px-3 py-2 bg-white">
            <IoIosLock className="text-blueGray-600 text-xl" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full transition-all duration-150"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-500 focus:outline-none"
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>

 
      </form>

      <p className="text-center text-gray-500 mt-3">
        Already have an account? <a href="/auth/login" className="text-blue-600">Login</a>
      </p>
  

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link 
                  to="/auth/forget"
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </Link>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/login" className="text-blueGray-200">
                  <small>Login</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
