function ProductSkeleton() {
  return (
    <div className="text-gray-700 cursor-pointer animate-pulse">
      <div className="overflow-hidden">
        <div className="relative w-full flex items-center justify-center overflow-hidden transition-transform duration-300">
          {/* Image Skeleton */}
          <div className="bg-gray-200 w-full h-[250px]"></div>
        </div>
      </div>
      {/* Name Skeleton */}
      <div className="pt-3 pb-1">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        {/* Price Skeleton */}
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
}

export default ProductSkeleton;
