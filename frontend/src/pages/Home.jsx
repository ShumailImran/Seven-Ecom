import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
// import BestSeller from "../components/BestSeller";
// import Categories from "../components/Categories";
// import LatestCollection from "../components/LatestCollection";
// import NewsletterBox from "../components/NewsletterBox";
// import OurPolicy from "../components/OurPolicy";

function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Carousel />
      {/* <Categories /> */}

      {/* <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox /> */}
    </div>
  );
}

export default Home;
