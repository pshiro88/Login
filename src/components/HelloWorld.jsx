import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HelloWorld = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">User Information</h2>
        {userData ? (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Name:</h3>
              <p>{userData.name}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email:</h3>
              <p>{userData.email}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Address:</h3>
              <p>{userData.address.street}, {userData.address.city}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact:</h3>
              <p>{userData.phone}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default HelloWorld;
