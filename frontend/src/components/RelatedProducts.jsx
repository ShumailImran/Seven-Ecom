import { useState, useEffect } from "react";
import { useShop } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function RelatedProducts({ category, subCategory }) {
  const { products } = useShop();
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let ProductsCopy = products.slice();
      ProductsCopy = ProductsCopy.filter((item) => item.category === category);
      ProductsCopy = ProductsCopy.filter(
        (item) => item.subcategory === subCategory
      );
      setRelated(ProductsCopy.slice(0, 5));
    }
  }, [products]);

  const handleProductClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="my-12">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
            onClick={handleProductClick}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
