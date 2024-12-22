import { assets } from "../assets/assets";

function Footer() {
  return (
    <div>
      <div className="grid gap-4 grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4 text-sm my-10 mt-20 px-4 lg:px-8">
        <div className="row-span-1 col-span-2 md:col-span-2">
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            asperiores ea totam tempore repudiandae itaque dicta quidem est
            eveniet ab ex! Quibusdam at, repellendus optio quae soluta
            necessitatibus odio inventore?
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+92-1234567890</li>
            <li>contact@company.com</li>
            <li></li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
