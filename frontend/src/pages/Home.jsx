import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import LatestCollection from "../components/LatestCollection";
import OurPolicy from "../components/OurPolicy";

function Home() {
  return (
    <div className="flex flex-col">
      <Carousel />
      <Categories />
      <LatestCollection />
      <OurPolicy />
      <BestSeller />

    </div>
  );
}

export default Home;
