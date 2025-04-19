function ProductSkeleton() {
  return (
    <div className="animate-pulse text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <div className="relative w-full aspect-[3/4] bg-gray-200 rounded" />
      </div>

      <div className="pt-3 pb-1">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
}

export default ProductSkeleton;
