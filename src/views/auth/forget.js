import React, { useState } from "react";
import { IoIosMail } from "react-icons/io"; // Import the mail icon
import { Link } from "react-router-dom"; // Import Link for navigation

export default function Forget() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
    // Add logic here to send the reset password email
  };

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Forgot Password?
                  </h6>
                </div>
             
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small> reset with email</small>
                </div>
                <form onSubmit={handleSubmit}>
                  {/* Email Field */}
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Email
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg shadow-sm px-3 py-2 bg-white">
                      <IoIosMail className="text-blueGray-600 text-xl" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full transition-all duration-150"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center mt-6">
                    <button
                      className="bg-yellow-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link
                  to="/auth/login"
                  className="text-black text-lg"
                >
                  <small>Login</small>
                </Link>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-black text-lg">
                  <small>Create new account</small>
                </Link>
              </div>
                </div>
              </div>
            </div>
          </div>
       
     
    </>
  );
}