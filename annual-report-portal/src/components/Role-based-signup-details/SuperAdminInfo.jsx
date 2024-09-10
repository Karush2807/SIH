import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';

const SuperAdminInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    instituteName: '',
    roleDescription: '',
    department: '',
    yearsOfExperience: '',
    instituteAddress: '',
    profilePicture: null, // For file input
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0], // Set the file to the state
    });
  };

  const completeRegistration = async (e) => {
    e.preventDefault();

    const { name, phoneNumber, instituteName, roleDescription, department, yearsOfExperience, instituteAddress } = formData;
    const registrationData = {
      name,
      phoneNumber,
      instituteName,
      roleDescription,
      department,
      yearsOfExperience,
      instituteAddress,
    };
    try {
      const response = await axios.post('/api/v1/register/super-admin', registrationData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      toast.success(`Registration Completed ! `);
      navigate('/reports')
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-md">
          <h2 className="text-2xl text-center font-bold mb-4">Register as Super Admin</h2>
          <form className="space-y-4" onSubmit={completeRegistration}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name here"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number here"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Institute Name</label>
              <input
                type="text"
                name="instituteName"
                value={formData.instituteName}
                onChange={handleChange}
                placeholder="Enter institute name here"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Role Description</label>
              <input
                type="text"
                name="roleDescription"
                value={formData.roleDescription}
                onChange={handleChange}
                placeholder="Enter role description (e.g., Director, Principal)"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            {/* <div>
              <label className="block text-sm font-medium text-gray-700">Super Admin Code</label>
              <input
                type="text"
                
                placeholder="Decide and Enter Super Admin Code"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div> */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Department (if applicable)</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Enter department here"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
              <input
                type="number"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                placeholder="Enter years of experience"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Institute Address</label>
              <textarea
                name="instituteAddress"
                value={formData.instituteAddress}
                onChange={handleChange}
                placeholder="Enter institute address here"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                rows="3"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Profile Picture (optional)</label>
              <input
                type="file"
                name="profilePicture"
                onChange={handleFileChange}
                className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:ring-2 focus:ring-green-500"
              >
                Complete Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SuperAdminInfo
