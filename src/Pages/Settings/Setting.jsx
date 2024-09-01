import React, { useState } from 'react';
import { FaSave, FaSignOutAlt } from 'react-icons/fa';
import Personal from './Personal';
import Privacy from './Privacy';
import Payment from './Payment';
import Notification from './Notification';

const Setting = () => {

 
 

  const handleSave = () => {
    console.log('Settings saved');
  };



  const handleLogout = () => {
    console.log('User logged out');
  };


  return (
    <div className="container mx-auto pt-[10rem] max-w-2xl">
      <h1 className="text-[22px] font-semibold text-gray-800 text-center">Account Settings</h1>
      <Personal/>
      <Privacy />
      <Notification />
      <Payment/>

      
   
      
  

   
      
      <div className="space-y-4 px-[1rem] mb-[2rem]">
        <button onClick={handleSave} className="w-full py-2 px-4 bg-yellow-600 text-white rounded flex justify-center items-center">
          <FaSave className="mr-2 h-4 w-4" /> Save Changes
        </button>
        <button onClick={handleLogout} className="w-full py-2 px-4 border rounded border-yellow-600 text-yellow-600 flex justify-center items-center">
          <FaSignOutAlt className="mr-2 h-4 w-4" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Setting;
