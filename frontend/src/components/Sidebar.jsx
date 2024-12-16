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
      { to: "/collection/men-topwear", label: "T-Shirts | Shirts" },
      { to: "/collection/men-bottomwear", label: "Jeans | Trousers" },
      { to: "/collection/men-winterwear", label: "Sweatshirts | Hoodies" },
    ],
    women: [
      { to: "/collection/women", label: "View All" },
      { to: "/collection/women-topwear", label: "T-Shirts" },
      { to: "/collection/women-bottomwear", label: "Jeans | Trousers" },
      { to: "/collection/women-winterwear", label: "Jackets | Coats" },
    ],
    kids: [
      { to: "/collection/kids", label: "View All" },
      { to: "/collection/kids-topwear", label: "Shirts | Shackets" },
      { to: "/collection/kids-bottomwear", label: "Jeans" },
      { to: "/collection/kids-winterwear", label: "Sweaters" },
    ],
  };

  return (
    <>
      <div
        className={`px-[8vw] sm:px-[10vw] lg:px-[6vw] flex items-center justify-start gap-8 border-t border-b border-black py-2`}
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
        className="px-[8vw] sm:px-[10vw] lg:px-[6vw] mt-10 text-lg font-medium"
      >
        New Arrivals
      </button>

      {/* Show Links for the Selected Category if New Arrivals is toggled on */}
      {showNewArrivals && (
        <div className="flex flex-col gap-2 mt-2 px-[8vw] sm:px-[10vw] lg:px-[6vw] text-gray-500">
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
      <div className="px-[8vw] sm:px-[10vw] lg:px-[6vw] mt-8">
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
