import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ setVisible }) {
  const [selected, setSelected] = useState("men");
  const [showNewArrivals, setShowNewArrivals] = useState(true); // Single toggle state for New Arrivals

  const handleSelected = (selectedItem) => {
    setSelected(selectedItem);
    setShowNewArrivals(true); // Hide "New Arrivals" when switching categories
  };

  const links = {
    men: [
      { to: "/collection/men", label: "View All" },
      { to: "/collection/men-topwear", label: "Shirts" },
      { to: "/collection/men-bottomwear", label: "Bottomwear" },
      { to: "/collection/men-winterwear", label: "Outerwear" },
    ],
    women: [
      { to: "/collection/women", label: "View All" },
      { to: "/collection/women-topwear", label: "Tops" },
      { to: "/collection/women-bottomwear", label: "Bottomwear" },
      { to: "/collection/women-winterwear", label: "Outerwear" },
    ],
    kids: [
      { to: "/collection/kids", label: "View All" },
      { to: "/collection/kids-topwear", label: "Kids Tops" },
      { to: "/collection/kids-bottomwear", label: "Bottomwear" },
      { to: "/collection/kids-winterwear", label: "Outerwear" },
    ],
  };

  return (
    <>
      <div
        className={`px-14 lg:px-[70px] flex items-center justify-start gap-8 border-t border-b border-black py-2`}
      >
        {["men", "women", "kids"].map((selectedItem) => (
          <button
            key={selectedItem}
            onClick={() => handleSelected(selectedItem)}
            className={`${
              selected === selectedItem
                ? "text-black font-normal"
                : "text-gray-500 font-light"
            }`}
          >
            {selectedItem.charAt(0).toUpperCase() + selectedItem.slice(1)}
          </button>
        ))}
      </div>

      {/* New Arrivals Button */}
      <button
        onClick={() => setShowNewArrivals(!showNewArrivals)} // Toggle visibility of New Arrivals section
        className="px-14 lg:px-[70px] mt-10 text-lg font-medium"
      >
        New Arrivals
      </button>

      {/* Show Links for the Selected Category if New Arrivals is toggled on */}
      {showNewArrivals && (
        <div className="flex flex-col gap-2 mt-2 px-14 lg:px-[70px] text-gray-500">
          {links[selected].map((link) => (
            <Link
              to={link.to}
              key={link.to}
              onClick={() => setVisible(false)}
              className="px-3 py-1 hover:text-black w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
      <div className="px-14 lg:px-[70px] mt-8">
        <Link
          to={"/orders"}
          onClick={() => setVisible(false)}
          className="text-lg font-medium"
        >
          Track Your Order
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
