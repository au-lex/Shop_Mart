import React, {useState} from 'react'
import { FaSave, FaBell, FaLock, FaUser, FaChevronRight, FaCamera, FaCreditCard, FaMapMarkerAlt, FaSignOutAlt } from 'react-icons/fa';
const Notification = () => {

    const [marketingEmails, setMarketingEmails] = useState(true);
    const [orderUpdates, setOrderUpdates] = useState(true);
  
  return (
    <>
    
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-[15px] font-semibold mb-4 flex items-center text-gray-700">
          <FaBell className="mr-2 text-yellow-600" /> Notification Preferences
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Marketing Emails</span>
            <input
              type="checkbox"
              checked={marketingEmails}
              onChange={(e) => setMarketingEmails(e.target.checked)}
              className="h-4 w-4 "
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Order Updates</span>
            <input
              type="checkbox"
              checked={orderUpdates}
              onChange={(e) => setOrderUpdates(e.target.checked)}
              className="h-4 w-4"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Notification