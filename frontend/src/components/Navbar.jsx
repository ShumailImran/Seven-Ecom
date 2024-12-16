import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import Sidebar from "./Sidebar";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false); // Track if the sidebar is closing

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useShop();

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setCartItems({});
    navigate("/login");
  };

  const handleCloseSidebar = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 300);
  };

  // ALLOW NO SCROLL WHEN SIDEBAR IS OPEN
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  return (
    <div className="flex items-center justify-between py-5 font-medium z-100 ">
      <div className="flex items-center gap-6">
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer"
          alt=""
        />
        <Link to="/">
          <img src={assets.logo} alt="logo" className="w-36" />
        </Link>
      </div>

      {/* RIGHT SIDE NAV MAIN*/}
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
            alt=""
            className="w-5 cursor-pointer"
          />
          {/* Profile Dropdown */}
          {token && (
            <div className="group-hover:block absolute hidden dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
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
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <Link to="wishlist" className="relative">
          <img src={assets.heart_icon} className="w-4 min-w-6" alt="" />
        </Link>
      </div>

      {/*---------- SIDEBAR ----------  */}
      {visible && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={() => setVisible(false)}
        />
      )}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          visible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`bg-white w-full md:w-[450px] h-full shadow-lg transform transition-transform duration-300 ease-in-out ${
            closing
              ? "-translate-x-full"
              : visible
              ? "translate-x-0"
              : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-4 sm:px-[5vw] md:px-[7vw] lg:px-[6vw] md:justify-start">
            <div
              onClick={handleCloseSidebar} // Trigger close with animation
              className="flex items-center gap-6 py-5"
            >
              <img
                src={assets.cross_icon}
                className="w-4 cursor-pointer"
                alt="close"
              />
              <Link to="/">
                <img src={assets.logo} alt="logo" className="w-36" />
              </Link>
            </div>

            {/* Right side nav in sidebar */}
            <div className="flex items-center gap-4 sm:gap-6 md:hidden">
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
                  alt=""
                  className="w-5 cursor-pointer"
                />
                {/* Profile Dropdown */}
                {token && (
                  <div className="group-hover:block absolute hidden dropdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                      <p className="cursor-pointer hover:text-black">
                        My Profile
                      </p>
                      <p
                        onClick={() => navigate("/orders")}
                        className="cursor-pointer hover:text-black"
                      >
                        Orders
                      </p>
                      <p
                        onClick={logout}
                        className="cursor-pointer hover:text-black"
                      >
                        Logout
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <Link to="cart" className="relative">
                <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
                <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                  {getCartCount()}
                </p>
              </Link>
              <Link to="wishlist" className="relative">
                <img src={assets.heart_icon} className="w-4 min-w-6" alt="" />
              </Link>
            </div>
          </div>

          <Sidebar visible={visible} setVisible={setVisible} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
