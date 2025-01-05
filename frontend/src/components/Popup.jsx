import React, { useEffect } from "react";
import { useShop } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Popup = ({ popupVisible, setPopupVisible }) => {
  const { products, cartItems, currency, updateQuantity, navigate } = useShop();

  const [cartData, setCartData] = React.useState([]);

  // Update cart data whenever cartItems or products change
  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  useEffect(() => {
    if (popupVisible) {
      document.documentElement.classList.add(
        "overflow-hidden",
        "sm:overflow-auto"
      );
      document.body.classList.add("overflow-hidden", "sm:overflow-auto");
    } else {
      document.documentElement.classList.remove(
        "overflow-hidden",
        "sm:overflow-auto"
      );
      document.body.classList.remove("overflow-hidden", "sm:overflow-auto");
    }

    return () => {
      document.documentElement.classList.remove(
        "overflow-hidden",
        "sm:overflow-auto"
      );
      document.body.classList.remove("overflow-hidden", "sm:overflow-auto");
    };
  }, [popupVisible]);

  return (
    <div
      className={`flex items-center justify-center sm:items-start sm:justify-end sm:pt-[81px] sm:pr-6 fixed inset-0 z-50 bg-black/80 sm:bg-inherit overflow-hidden ${
        popupVisible ? "block" : "hidden"
      }`}
      onClick={() => setPopupVisible(false)}
    >
      <div
        className="bg-white w-[90%] sm:w-[350px] h-[47vh] flex flex-col p-6 relative border border-gray-400"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium sticky top-0 bg-white py-2 z-10">
            SHOPPING CART
          </h2>
          <button
            onClick={() => setPopupVisible(false)} // Close the popup
            className="text-black text-xl"
          >
            &times;
          </button>
        </div>

        {/* Cart Items Container */}
        <div className="cart-items overflow-auto flex-1 max-h-[30vh]">
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );

            return (
              <div
                key={index}
                className="py-4 border-b text-gray-700 flex items-center justify-between"
              >
                {/* Image and Product Name Section */}
                <div className="flex items-center gap-4">
                  <img
                    src={productData.image[0]}
                    className="w-16 sm:w-20"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">
                      {item.quantity} {productData.name}
                    </p>
                    <p className="text-sm mt-1 border bg-slate-50 px-2 w-auto self-start">
                      {item.size}
                    </p>
                  </div>
                </div>

                {/* Bin Icon and Price Section */}
                <div className="flex flex-col items-end">
                  <img
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    src={assets.bin_icon}
                    className="w-4 cursor-pointer mb-6"
                    alt="remove"
                  />
                  {/* Price (at bottom) */}
                  <p className="text-xs sm:text-sm text-gray-800">
                    {currency}
                    {productData.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons: Continue Shopping and View Cart */}
        <div className="mt-4">
          <button
            className="w-full bg-black text-white text-sm py-2"
            onClick={() => navigate("/cart")}
          >
            VIEW CART
          </button>
          <button
            className="w-full bg-white text-black border border-black text-sm py-2 my-1"
            onClick={() => setPopupVisible(false)}
          >
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
