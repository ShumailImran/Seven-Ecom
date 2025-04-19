import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function ProductItem({ id, image, name, price, onClick }) {
  const { currency } = useShop();

  return (
    <Link
      className="text-gray-700 cursor-pointer group"
      onClick={onClick}
      to={`/product/${id}`}
    >
      <div className="overflow-hidden">
        <div className="relative w-full flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
          {/* Default image */}
          <img
            src={image[0]}
            alt="product"
            className="w-full transition-opacity duration-300"
          />

          {/* Hover image, shown only on hover */}
          {image[1] && (
            <img
              src={image[1]}
              alt="product hover"
              className="absolute top-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            />
          )}
        </div>
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
}

export default ProductItem;
