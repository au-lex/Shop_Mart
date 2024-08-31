import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaTrashAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const savedProductsData = [
  {
    id: 1,
    name: "PS5 Wireless Controller",
    price: 34.99,
    rating: 4.5,
    reviewCount: 120,
    image: "https://shopnest.africa/wp-content/uploads/2024/04/unnamed-file-50-300x300.jpg",
    description: "The PS5 Wireless Controller is engineered to deliver an unparalleled gaming experience on the PlayStation 5. This cutting-edge controller features adaptive triggers that provide dynamic resistance, allowing you to feel the impact of your actions in-game, whether it's the tension of a bowstring or the rumble of a car engine. The advanced haptic feedback technology enhances immersion by simulating a wide range of sensations, from subtle vibrations to intense, immersive effects. Its ergonomic design ensures maximum comfort during extended gaming sessions, with textured grips and strategically placed buttons for optimal responsiveness. Additionally, the controller boasts a built-in rechargeable battery, offering hours of gameplay on a single charge. Compatible with the PS5 console, this controller is a must-have for gamers looking to elevate their play to new heights."
  },
  {
    id: 2,
    name: "Wireless EarPod",
    price: 54.99,
    rating: 5,
    reviewCount: 89,
    image: "https://shopnest.africa/wp-content/uploads/2024/07/220916160021352331-300x300.webp",
    description: "The Wireless EarPod delivers exceptional audio quality and a truly wireless listening experience. Designed with advanced Bluetooth technology, these EarPods provide a stable connection to your devices, ensuring uninterrupted music playback and crystal-clear phone calls. The sleek, ergonomic design ensures a secure and comfortable fit, making them perfect for extended use during workouts, commutes, or relaxation. The EarPods feature high-definition sound with deep bass and clear treble, providing an immersive listening experience that enhances every note and beat. The included compact charging case not only protects the EarPods when not in use but also provides multiple additional charges, extending your listening time. With intuitive touch controls, you can easily manage your music, adjust the volume, and take calls without needing to reach for your device."
  },
  {
    id: 3,
    name: "HP Laptop Stand",
    price: 19.99,
    rating: 5,
    reviewCount: 69,
    image: "https://shopnest.africa/wp-content/uploads/2023/11/1-6-300x300.jpg",
    date: "2024-07-27",
    description: "The HP Laptop Stand is a versatile and practical accessory designed to enhance your workspace ergonomics and productivity. This stand elevates your laptop to a more comfortable viewing height, helping to reduce neck and back strain associated with long hours of computer use. Constructed from durable and lightweight materials, the stand is both sturdy and portable, making it easy to move between workstations or take on the go. The adjustable design allows you to set the stand to the perfect angle for typing, viewing, or presentations, ensuring that you maintain a healthy posture and improve your overall comfort. With a sleek, modern look, it complements any desk setup while providing ample ventilation to prevent your laptop from overheating. Ideal for professionals, students, or anyone who uses a laptop frequently, the HP Laptop Stand is a practical investment in your health and productivity."
  },
  {
    id: 4,
    name: "JBL Soundbox",
    price: 44.99,
    rating: 5,
    reviewCount: 84,
    image: "https://shopnest.africa/wp-content/uploads/2024/05/IMG_5337-300x300.jpeg",
    date: "2024-07-27",
    description: "The JBL Soundbox is a high-performance portable speaker that brings powerful audio and robust design to your music experience. Featuring JBL's renowned sound technology, this speaker delivers rich, full-range sound with deep bass and clear highs, making it perfect for any genre of music. Its compact and rugged construction means it can withstand the rigors of outdoor adventures, including dust, water, and accidental drops. The integrated Bluetooth connectivity allows for easy pairing with your smartphone, tablet, or other devices, so you can stream your favorite tracks without the hassle of wires. With a long-lasting battery life, the JBL Soundbox ensures that your music keeps playing all day long. Whether you're hosting a backyard barbecue, going on a camping trip, or simply enjoying a day at the beach, this speaker provides high-quality sound in any environment."
  },
  {
    id: 5,
    name: "Wireless Keyboard",
    price: 44.99,
    rating: 5,
    reviewCount: 189,
    image: "https://shopnest.africa/wp-content/uploads/2023/12/fe0cddf8df6cc294a8ebee979fda6446-300x300.jpeg",
    date: "2024-07-27",
    description: "The Wireless Keyboard offers a sleek and modern design combined with superior functionality. Its slim profile and low-profile keys provide a comfortable typing experience with reduced noise, making it ideal for both work and leisure. The wireless connectivity ensures a clutter-free desk, eliminating the need for tangled cords and allowing for greater flexibility in your workspace. Equipped with long battery life, this keyboard is designed to keep up with your busy schedule, and it features an intuitive layout with multimedia keys for quick access to your favorite applications and functions. Whether you're working from home, in the office, or simply enjoying a casual typing session, the Wireless Keyboard delivers reliable performance and convenience."
  },
  {
    id: 6,
    name: "MTN Cart 6 Router",
    price: 44.99,
    rating: 5,
    reviewCount: 92,
    image: "https://shopnest.africa/wp-content/uploads/2024/06/3654B6EF-0C86-45D2-A278-3E0901E810FF-300x300.jpeg",
    date: "2024-07-27",
    description: "The MTN Cart 6 Router provides a seamless and efficient solution for your home or small office networking needs. With its advanced technology, this router delivers high-speed internet access and reliable connectivity for all your devices, ensuring smooth browsing, streaming, and online gaming experiences. The compact and modern design allows for easy placement in any environment, while its powerful signal strength ensures strong coverage throughout your space. The MTN Cart 6 Router supports multiple devices simultaneously, making it perfect for households with multiple users or small businesses with high internet demands. Easy to set up and configure, this router also offers robust security features to keep your network safe from unauthorized access, giving you peace of mind as you connect and share data."
  },
];

const SavedProductCard = ({ product, onRemove, onAddToCart, isExpanded, onToggle }) => {
  return (
    <div className="border rounded-lg shadow-sm mb-8 relative bg-yelklow-50 overflkow-hidden">
      <span className="del border shadow flex w-[2.5rem] absolute top-[-1rem] h-[2.5rem] items-center justify-center bg-white rounded-full">
        <button onClick={() => onRemove(product.id)} className="p-2 text-red-600 hover:bg-red-100 rounded">
          <FaTrashAlt size={16} />
        </button>
      </span>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
          <div>
            <h3 className="font-semibold text-[12px] text-yellow-800">{product.name}</h3>
            <p className="text-yellow-600">${product.price.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => onAddToCart(product)} className="p-2 text-yellow-600 hover:bg-yellow-100 rounded">
            <FaShoppingCart size={20} />
          </button>
          <button onClick={() => onToggle(product.id)} className="p-2 text-yellow-600 hover:bg-yellow-100 rounded">
            {isExpanded ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="px-4 pb-4 text-yellow-700">
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};

const Saved = () => {
  const [savedProducts, setSavedProducts] = useState(savedProductsData);
  const [expandedId, setExpandedId] = useState(null);

  const handleRemove = (productId) => {
    setSavedProducts(savedProducts.filter(product => product.id !== productId));
    if (expandedId === productId) {
      setExpandedId(null);
    }
  };

  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
    // Here you would typically dispatch an action to add the item to the cart
  };

  const handleToggle = (productId) => {
    setExpandedId(expandedId === productId ? null : productId);
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-[10rem]">
      <h1 className="text-xl font-semibold mb-6 flex items-center">
        Saved Products
        <button className="p-2 text-red-500 ml-2">
          <FaHeart size={20} />
        </button>
      </h1>
      {savedProducts.length === 0 ? (
        <p className="text-yellow-700">You have no saved products.</p>
      ) : (
        savedProducts.map(product => (
          <SavedProductCard
            key={product.id}
            product={product}
            onRemove={handleRemove}
            onAddToCart={handleAddToCart}
            isExpanded={expandedId === product.id}
            onToggle={handleToggle}
          />
        ))
      )}
    </div>
  );
};

export default Saved;