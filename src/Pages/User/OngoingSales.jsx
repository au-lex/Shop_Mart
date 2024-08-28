import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

const OngoingSales = () => {
    const saleProducts = [
        {
            id: 1,
            name: "Blue light glasses",
            originalPrice: 49.99,
            salePrice: 39.99,
            image: "https://shopnest.africa/wp-content/uploads/2024/05/chrome-heart-sunglass-300x300.jpg",
            remaining: 5
        },
        {
            id: 3,
            name: "Premium Headphones",
            originalPrice: 49.99,
            salePrice: 39.99,
            sub: "Electronics",
            price: 29.99,
            image: "https://shopnest.africa/wp-content/uploads/2024/07/220916160021352331-300x300.webp",
            description: "Experience exceptional sound quality with these Premium Headphones. Designed with advanced noise-cancellation technology and comfortable ear cushions, they provide an immersive audio experience. Whether you're listening to music, watching movies, or taking calls, these headphones deliver crystal-clear sound and reduce ambient noise.",
            remaining: 8
        },
        {
            id: 11,
            name: "8 bus portable USB",
            price: 24.99,
            originalPrice: 49.99,
            salePrice: 39.99,
            image: "https://shopnest.africa/wp-content/uploads/2024/05/61OQKB0-o4L._AC_UF10001000_QL80_-300x300.jpg",
            date: "2024-07-25",
            remaining: 3
        },
        {
            id: 2,
            name: "Portable HardDrive",
            originalPrice: 49.99,
            salePrice: 39.99,
            image: "https://shopnest.africa/wp-content/uploads/2024/04/61icoXyZ8aL._AC_SL1500_-300x300.jpg",
            date: "2024-07-26",
            remaining: 12
        },
        {
            id: 5,
            name: "Canyon Bluetooth",
            sub: "Accessories",
            originalPrice: 49.99,
            salePrice: 39.99,
            image: "https://shopnest.africa/wp-content/uploads/2024/07/230309080910252110-300x300.webp",
            description: "The Canyon Bluetooth Speaker combines stylish design with impressive sound quality. It features wireless Bluetooth connectivity, allowing you to stream music from your smartphone or tablet effortlessly. With a long-lasting battery and compact size, it's perfect for parties, travel, and everyday use.",
            remaining: 7
        },
        {
            id: 6,
            name: "Wireless Mouse",
            sub: "Accessories",
            originalPrice: 49.99,
            salePrice: 39.99,
            image: "https://shopnest.africa/wp-content/uploads/2024/07/221123150033194311-300x300.webp",
            description: "This Wireless Mouse offers precision and comfort with its ergonomic design and adjustable DPI settings. It's ideal for both work and gaming, providing smooth and accurate tracking on various surfaces. The wireless connectivity ensures a clutter-free desk, and its battery life is optimized for extended use.",
            remaining: 15
        },
    ];

    return (
        <div className="ongoing-sales-container">
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
                <div className="flex items-center">
                    <FaExclamationTriangle className="text-yellow-500 mr-2 text-xl" />
                    <h2 className="text-2xl font-bold text-yellow-700">Ongoing Sales</h2>
                </div>
                <p className="text-yellow-600 mt-2">Don't miss out on these amazing deals!</p>
                <p className="text-yellow-600 mt-2">Don't miss out on these amazing deals!</p>
            </div>
            <div className="ongoing-sales-content">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-2 gap-2">
                    {saleProducts.map((product) => (
                        <div key={product.id} className="rounded-lg border p-2 flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs font-bold">
                                SALE
                            </div>
                            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded" />
                            <h3 className="text-[12px] font-semibold">{product.name}</h3>
                            <span className="flex justify-between" >

                            <p className="text-gray-600 line-through">${product.originalPrice}</p>
                            <p className="text-yellow-500 font-bold">${product.salePrice}</p>
                            </span>
                            <p className="text-sm text-gray-500 mt-1">
                                {product.remaining <= 5 ? (
                                    <span className="text-red-500 font-semibold">Only {product.remaining} left!</span>
                                ) : (
                                    <span>{product.remaining} in stock</span>
                                )}
                            </p>
                            <button className="mt-2 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OngoingSales