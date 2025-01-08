import { useShop } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";
import { useEffect, useState } from "react";

function LatestCollection() {
  const { products } = useShop();
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(39, 44));
  }, [products]);

  return (
    <div className="my-2 px-2">
      <div className="text-center py-4 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
      </div>

      {/* RENDERING PRODUCTS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestCollection;
