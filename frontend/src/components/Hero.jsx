import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <div className=" ">
      <div className=" w-full">
        <div className="object-contain w-full h-full cursor-pointer">
          <img
            className="w-full  h-full md:hidden"
            src={assets.smHero}
            alt=""
            onClick={() => navigate("/collection")}
          />
          <img
            className="w-full  h-full hidden md:block"
            src={assets.hero}
            alt=""
            onClick={() => navigate("/collection")}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
