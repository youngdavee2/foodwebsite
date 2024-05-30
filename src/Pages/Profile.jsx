import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaPencil } from "react-icons/fa6";

const Profile = (props) => {
  const [bio, setBio] = useState('');

  const handleSubmitBio = () => {
    // Handle bio submission logic here
  };

  return (
    <div className="flex items-center justify-center bg-gray-900 text-white min-h-screen p-4">
      <div className="max-w-xl w-full">
        {props.userName ? (
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <img
                src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Profile"
                className="h-16 w-16 rounded-full mr-4 relative"
              />
              <div className='cursor-pointer absolute lg:left-[480px] '>
                <FaPencil />
              </div>
              <h1 className="text-2xl font-bold">Hello, {props.userName}</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              <div className="border border-white rounded-lg p-4 flex items-center justify-center hover:bg-gray-700 transition duration-300">
                <span className="text-2xl font-bold">{`No. of Orders ${props.cartNo}`}</span>
              </div>
              <div className="border border-white rounded-lg p-4 flex items-center justify-center hover:bg-gray-700 transition duration-300">
                <span className="text-2xl font-bold">No. of Cancelled Orders</span>
              </div>
              <div className="border border-white rounded-lg p-4 flex items-center justify-center hover:bg-gray-700 transition duration-300">
                <span className="text-2xl font-bold">No. of Visits</span>
              </div>
              <div className="border border-white rounded-lg p-4 flex items-center justify-center hover:bg-gray-700 transition duration-300">
                <span className="text-2xl font-bold">Personal Information <IoIosArrowForward /></span>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <h2 className="text-lg font-bold">Email</h2>
                <span>{props.email}</span>
              </div>
              <div>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-300"
                  rows="3"
                  placeholder="Enter your bio..."
                />
                <button
                  onClick={handleSubmitBio}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Link to="/">
            <div className="border-2 border-white p-4 rounded-lg hover:text-blue-500">
              <span>Go and Login</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Profile;
