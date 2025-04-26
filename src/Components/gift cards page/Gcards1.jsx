import { useState } from "react";
// import { FaShoppingCart, FaExchangeAlt, FaHeart } from "react-icons/fa";
import cardImage from "../../assets/Gift-Cards/gift-cards.png";
import { FaExchangeAlt, FaHeart, FaShoppingCart } from "react-icons/fa";

const Gcards1 = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="relative max-w-xs p-4 border rounded-lg shadow-md overflow-hidden group">
      {/* Icons (Appear on Hover) */}
      {/* <div className="absolute right-3 top-3 flex flex-col space-y-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"> */}
      <div className="absolute right-3 top-3 flex flex-col space-y-2 opacity-0 hover:opacity-80">
        <button className="p-2 bg-white shadow rounded-full hover:text-blue-500">
          {/* <FaShoppingCart /> */} <FaShoppingCart></FaShoppingCart>
        </button>
        <button className="p-2 bg-white shadow rounded-full hover:text-green-500">
          {/* <FaExchangeAlt /> */}
          <FaExchangeAlt></FaExchangeAlt>
        </button>
        <button className="p-2 bg-white shadow rounded-full hover:text-red-500">
          {/* <FaHeart /> */}
          <FaHeart></FaHeart>
        </button>
      </div>

      {/* Image with Hover Zoom */}
      <div className="overflow-hidden rounded-md">
        <img
          src={cardImage}
          alt="Gift Card"
          className="w-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <h2 className="mt-3 text-lg font-semibold text-center">
        $100 Physical Gift Card
      </h2>

      {/* Rating */}
      <div className="flex justify-center mt-1">
        {"★★★★★".split("").map((_, i) => (
          <span key={i} className="text-gray-400">☆</span>
        ))}
      </div>

      {/* Price */}
      <p className="mt-2 text-xl font-semibold text-yellow-600 text-center">
        $100.00 incl tax
      </p>

      {/* Quantity Selector */}
      <div className="flex items-center justify-center mt-3">
        <button
          className="px-2 py-1 border rounded-l bg-gray-200"
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
        >
          -
        </button>
        <input
          type="text"
          value={quantity}
          readOnly
          className="w-10 text-center border-t border-b"
        />
        <button
          className="px-2 py-1 border rounded-r bg-gray-200"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>

      {/* Buy Now Button */}
      <button
        className={`w-full px-4 py-2 mt-3 text-white rounded ${
          quantity > 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400"
        }`}
        disabled={quantity === 0}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Gcards1;
