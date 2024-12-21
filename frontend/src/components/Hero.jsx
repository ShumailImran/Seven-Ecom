import { assets } from "../assets/assets";
function Hero() {
  return (
    <div className=" ">
      <div className=" w-full">
        <div className="object-contain w-full h-full">
          <img
            className="w-full  h-full md:hidden"
            src={assets.smHero}
            alt=""
          />
          <img
            className="w-full  h-full hidden md:block"
            src={assets.hero}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
