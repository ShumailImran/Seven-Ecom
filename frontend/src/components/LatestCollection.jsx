import { useShop } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import ProductSkeleton from "./ProductSkeleton";
import Title from "./Title";
import { useEffect, useState } from "react";

function LatestCollection() {
  const { products } = useShop();
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products.length) {
      setLatestProducts(products.slice(39, 44));
    }
  }, [products]);

  const isLoading = products.length === 0;

  return (
    <div className="my-2 px-2">
      <div className="text-center py-4 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {isLoading
          ? [...Array(5)].map((_, i) => <ProductSkeleton key={i} />)
          : latestProducts.map((item) => (
              <ProductItem
                key={item._id}
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
