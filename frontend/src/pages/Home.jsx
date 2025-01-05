import Carousel from "../components/Carousel";
// import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import LatestCollection from "../components/LatestCollection";
import OurPolicy from "../components/OurPolicy";

function Home() {
  return (
    <div className="flex flex-col">
      {/* <Hero /> */}
      <Carousel />
      <Categories />
      <LatestCollection />
      <OurPolicy />
      <BestSeller />

      {/* <NewsletterBox /> */}
    </div>
  );
}

export default Home;
