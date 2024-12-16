import { assets } from "../assets/assets";

function Categories() {
  return (
    <div className="my-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {/* Item 1 */}
        <div className="h-auto md:h-[90vh] w-full border rounded-lg overflow-hidden shadow-lg flex flex-col justify-between p-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Image 1"
            className="w-full h-2/3 object-cover rounded"
          />
          <div className="text-center mt-4">
            <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              View More
            </button>
          </div>
        </div>

        {/* Item 2 */}
        <div className="h-auto md:h-[90vh] w-full border rounded-lg overflow-hidden shadow-lg flex flex-col justify-between p-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Image 2"
            className="w-full h-2/3 object-cover rounded"
          />
          <div className="text-center mt-4">
            <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Learn More
            </button>
          </div>
        </div>

        {/* Item 3 */}
        <div className="h-auto md:h-[90vh] w-full border rounded-lg overflow-hidden shadow-lg flex flex-col justify-between p-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Image 3"
            className="w-full h-2/3 object-cover rounded"
          />
          <div className="text-center mt-4">
            <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
