import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="mt-2 px-1">
      <div className="grid grid-rows-1 md:grid-cols-3  gap-2">
        {/* Men */}
        <Link to="/collection/men">
          <div>
            <div className="relative">
              <img
                className="w-full h-auto md:hidden"
                src={assets.smMenGrid}
                alt=""
              />
              <img
                className="w-full h-auto hidden md:block"
                src={assets.menGrid}
                alt=""
              />
              <button className="w-36 sm:w-60 absolute top-[75%] sm:top-[82%] left-1/2 transform -translate-x-1/2  px-4 py-2 sm:px-10 sm:py-3 bg-white border border-gray-300 text-gray-600 font-bold whitespace-nowrap">
                SHOP MEN
              </button>
            </div>
          </div>
        </Link>

        {/* Kids */}
        <Link to="/collection/kids">
          <div>
            <div className="relative">
              <img
                className="w-full h-auto md:hidden"
                src={assets.smKidsGrid}
                alt=""
              />
              <img
                className="w-full h-auto hidden md:block"
                src={assets.kidsGrid}
                alt=""
              />
              <button className="w-36 sm:w-60 absolute top-[75%] sm:top-[82%] left-1/2 transform -translate-x-1/2  px-4 py-2 sm:px-10 sm:py-3 bg-white border border-gray-300 text-gray-600 font-bold whitespace-nowrap">
                SHOP KIDS
              </button>
            </div>
          </div>
        </Link>

        {/* Women */}
        <Link to="/collection/women">
          <div>
            <div className="relative">
              <img
                className="w-full h-auto md:hidden"
                src={assets.smWomenGrid}
                alt=""
              />

              <img
                className="w-full h-auto hidden md:block"
                src={assets.womenGrid}
                alt=""
              />
              <button className="w-36 sm:w-60 absolute top-[75%] sm:top-[82%] left-1/2 transform -translate-x-1/2  px-4 py-2 sm:px-10 sm:py-3 bg-white border border-gray-300 text-gray-600 font-bold whitespace-nowrap">
                SHOP WOMEN
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
