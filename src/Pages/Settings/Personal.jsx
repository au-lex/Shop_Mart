import React, {useState} from 'react'
import { FaUser,FaCamera } from 'react-icons/fa'

const Personal = () => {

    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('john.doe@example.com');

    const [avatarUrl, setAvatarUrl] = useState('https://png.pngtree.com/png-clipart/20230620/original/pngtree-3d-avatar-man-like-teacher-artist-png-image_9192787.png');

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatarUrl(`/api/placeholder/200/200?text=${file.name}`);
    }
  };
  return (
    <>
    
    
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-[15px] font-semibold mb-4 flex items-center text-gray-700">
          <FaUser className="mr-2 text-yellow-600 " /> Personal Information
        </h2>
        <div className="flex items-center mb-4">
          <div className="h-20 w-20 mr-4 bg-gray-200 rounded-full border-2 border-yellow-600">
            <img src={avatarUrl} alt={name} className="h-full w-full object-cover rounded-full" />
          </div>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{email}</p>
            <label htmlFor="avatar-upload" className="cursor-pointer">
              <div className="flex items-center  mt-2 text-sm text-gray-500">
                <FaCamera className="mr-1 h-4 w-4 text-yellow-500 " /> Change Profile Picture
              </div>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </label>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border rounded w-full border-yellow-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border rounded w-full border-yellow-600"
            />
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Personal