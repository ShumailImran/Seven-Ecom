import { useShop } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";

function Wishlist() {
  const { wishlist, products, removeFromWishlist, currency } = useShop();

  const wishlistItems = products.filter((product) =>
    wishlist.includes(product._id)
  );

  const handleRemove = (itemId) => {
    removeFromWishlist(itemId);
  };

  return (
    <div className="border-t pt-14 px-2">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"WISHLIST"} />
      </div>

      {wishlistItems.length > 0 ? (
        <div className="">
          <div>
            {wishlistItems?.map((item) => (
              <div
                key={item._id}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr] sm:grid-cols-[4fr_2fr] items-center gap-4"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 sm:w-20"
                  />

                  <h2 className="text-xs sm:text-lg font-medium">
                    {item.name}
                  </h2>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {item.price}
                    </p>
                  </div>
                </div>
                <img
                  onClick={() => handleRemove(item._id)}
                  src={assets.bin_icon}
                  className="justify-self-end w-4 mr-4 cursor-pointer sm:w-5"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-700 text-xl py-10">
          Your wishlist is empty
        </p>
      )}
    </div>
  );
}

export default Wishlist;
