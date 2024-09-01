import React, {useState} from 'react'
import { FaSave, FaBell, FaLock, FaUser, FaChevronRight, FaCamera, FaCreditCard, FaMapMarkerAlt, FaSignOutAlt } from 'react-icons/fa';

const Privacy = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [twoFactor, setTwoFactor] = useState(false);
    const handleChangePassword = () => {
      console.log('Password changed');
    };
  return (
    <>
    
    
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="ttext-[15px] font-semibold mb-4 flex items-center text-gray-700">
          <FaLock className="mr-2 text-yellow-600" /> Privacy and Security
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Two-Factor Authentication</span>
            <input
              type="checkbox"
              checked={twoFactor}
              onChange={(e) => setTwoFactor(e.target.checked)}
              className="h-4 w-4"
            />
          </div>
          <button className="w-full py-2 px-4 border border-yellow-600 rounded flex justify-between items-center">
            Change Password
            {/* <FaChevronRight className="ml-2 h-4 w-4" /> */}
          </button>
          <div className="mt-4">
            <div className='mb-2'>
              <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Current Password</label>
              <input
                id="current-password"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="mt-1 p-2 border rounded w-full border-yellow-600"
              />
            </div>
            <div className='mb-2'>
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                id="new-password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 p-2 border rounded w-full border-yellow-600"
              />
            </div>
            <div className='mb-2'>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 p-2 border border-yellow-600 rounded w-full"
              />
            </div>
            <button onClick={handleChangePassword} className="w-full mt-4 py-2 px-4 bg-yellow-600 text-white rounded">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Privacy