import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Carousel = () => {
  const slides = [
    {
      large: assets.carousel2,
      small: assets.smCarousel2,
    },
    {
      large: assets.carousel,
      small: assets.smCarousel1,
    },
  ];

  const [curr, setCurr] = useState(0);
  const autoSlide = true;
  const autoSlideInterval = 3000;

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [curr, autoSlide, autoSlideInterval]);

  return (
    <div className="relative h-[120vh] md:h-[50vh] xl:h-[90vh] my-2 overflow-hidden">
      <div className="relative w-full h-full">
        {/* Slides */}
        {slides.map((src, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === curr ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <picture>
              <source media="(max-width: 768px)" srcSet={src.small} />
              <img
                className="w-full h-full object-cover"
                src={src.large}
                alt={`Slide ${index + 1}`}
              />
            </picture>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 flex justify-center w-full gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurr(index)}
            className={`w-3 h-3 rounded-full ${
              index === curr ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
