import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

function Contact() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t px-4 lg:px-8">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-10 mb-28 justify-center">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">25890 Baker Street, London</p>
          <p className="text-gray-500">
            Tel: +92-1234567890 <br /> Email:cantact@company.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Company
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
}

export default Contact;
