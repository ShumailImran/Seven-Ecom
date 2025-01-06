import { assets } from "../assets/assets";
function Navbar({ setToken }) {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <div className="flex items-center gap-1">
        <img src="/public/favicon.ico" className="w-25" alt="" />
        <h1 className="logo text-4xl">SEVEN</h1>
      </div>
      <button
        onClick={() => setToken("")}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
