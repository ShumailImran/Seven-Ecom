import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import Sidebar from "./Sidebar";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
    wishlist,
  } = useShop();

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setCartItems({});
    navigate("/login");
  };

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Track scroll position to toggle fixed Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  return (
    <div
      className={`${
        isFixed
          ? "fixed top-0 left-0 w-full bg-white shadow-md z-50"
          : "relative"
      } flex items-center justify-between py-5 font-medium px-4 lg:px-8 transition-all`}
    >
      <div className="flex items-center gap-2 sm:gap-6">
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer"
          alt="menu"
        />
        <Link to="/">
          <div className="flex items-center gap-1">
            <h1 className="logo text-4xl">SEVEN</h1>
          </div>
        </Link>
      </div>

      {/* RIGHT SIDE NAV */}
      <div className="flex items-center gap-4 sm:gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt="search"
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            alt="profile"
            className="w-5 cursor-pointer"
          />
          {token && (
            <div className="group-hover:block absolute hidden dropdown-menu right-0 pt-4 z-50">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <Link to="wishlist" className="relative">
          <img src={assets.heart_icon} className="w-4 min-w-6" alt="wishlist" />
          {wishlist.length > 0 && (
            <p className="absolute right-[-1px] bottom-[-2px] w-3 text-center leading-4 bg-red-500 text-white aspect-square rounded-full text-[8px]" />
          )}
        </Link>
      </div>

      {visible && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={() => setVisible(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-full md:w-[450px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          visible ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 lg:px-8 md:justify-start">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-6 py-5 cursor-pointer"
          >
            <img src={assets.cross_icon} className="w-4" alt="close" />
            <Link to="/">
              <div className="flex items-center gap-1">
                <h1 className="logo text-4xl">SEVEN</h1>
              </div>
            </Link>
          </div>
        </div>
        <Sidebar visible={visible} setVisible={setVisible} />
      </div>
    </div>
  );
}

export default Navbar;
