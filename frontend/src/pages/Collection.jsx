import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import ProductSkeleton from "../components/ProductSkeleton";

function Collection({ defaultCategory, subCategory: defaultSubCategory }) {
  const { products, search, showSearch } = useShop();

  const [filterProducts, setFilterProducts] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [loading, setLoading] = useState(true);

  const { category: routeCategory, subCategory: routeSubCategory } =
    useParams();

  const category = routeCategory || defaultCategory;
  const subCategory = routeSubCategory || defaultSubCategory;

  const applyFilter = (productList) => {
    let filtered = productList;

    if (showSearch && search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase().trim())
      );
    }

    if (category) {
      filtered = filtered.filter((item) => item.category === category);
    }

    if (subCategory) {
      filtered = filtered.filter((item) => item.subCategory === subCategory);
    }

    return filtered;
  };

  const sortProduct = (productList) => {
    let sorted = [...productList];

    switch (sortType) {
      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "new-old":
        sorted.sort((a, b) => b.date - a.date);
        break;
      case "old-new":
        sorted.sort((a, b) => a.date - b.date);
        break;
      default:
        break;
    }

    return sorted;
  };

  // Initial load
  useEffect(() => {
    if (products && products.length > 0) {
      const timeout = setTimeout(() => {
        const filtered = applyFilter(products);
        const sorted = sortProduct(filtered);
        setFilterProducts(sorted);
        setLoading(false); // Stop showing skeletons after first load
      }, 300); // Optional small delay to show skeleton briefly

      return () => clearTimeout(timeout);
    }
  }, [products]);

  // Apply filters/sorting without loading effect
  useEffect(() => {
    if (!loading) {
      const filtered = applyFilter(products);
      const sorted = sortProduct(filtered);
      setFilterProducts(sorted);
    }
  }, [category, subCategory, search, showSearch, sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-4 lg:px-8">
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4 ">
          <Title
            text1={category ? category.toUpperCase() : "ALL"}
            text2={"COLLECTION"}
          />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 px-2 text-sm"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
            <option value="new-old">Sort by: New to Old</option>
            <option value="old-new">Sort by: Old to New</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-5">
          {loading ? (
            [...Array(10)].map((_, i) => <ProductSkeleton key={i} />)
          ) : filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))
          ) : (
            <div className="w-full h-[40vh] flex items-center justify-center col-span-full">
              <p className="text-lg">No products found for this Search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collection;
