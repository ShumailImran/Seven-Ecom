import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Carousel = () => {
  const items = [assets.hero_duplicate, assets.second_hero, assets.sale]; // Example backgrounds
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeSlide = (next = true) => {
    setIsFading(true);
    setTimeout(() => {
      setIsFading(false);
      setCurrentIndex(
        (prevIndex) =>
          next
            ? (prevIndex + 1) % items.length // Move forward
            : (prevIndex - 1 + items.length) % items.length // Move backward
      );
    }, 300); // Match fade duration
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => changeSlide(true), 5000);
    return () => clearInterval(interval); // Cleanup
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") changeSlide(true);
      if (event.key === "ArrowLeft") changeSlide(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="my-2 relative w-full h-64 flex justify-center items-center overflow-hidden">
      {/* Stacked Slides */}
      {items.map((src, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-300 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            className="w-full h-full object-cover"
            src={src}
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={() => changeSlide(false)}
        className="absolute left-4 bg-gray-800 text-white px-4 py-2 z-20"
      >
        Prev
      </button>
      <button
        onClick={() => changeSlide(true)}
        className="absolute right-4 bg-gray-800 text-white px-4 py-2 z-20"
      >
        Next
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 flex space-x-2 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
