import { useState } from "react";

export default function Hero() {
  const imageData = [
    {
      image: "/new-pets/hero.png",
    },
    {
      image: "/new-pets/pet17.jpg",
    },
    {
      image: "/new-pets/pet6.jpg",
    },
    {
      image: "/new-pets/pet1.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = imageData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(imageData) || imageData.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="lg:max-w-[1600px] lg:px-16 flex flex-col mx-auto">
        <div
          id="controls-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* Item 1 */}
            {imageData.map((item, index) => (
              <div
                key={index}
                className={
                  index === current
                    ? "slide-active duration-700 ease-in-out"
                    : "slide"
                }
              >
                {index === current && (
                  <img
                    src={item.image}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2
                  "
                    alt="..."
                  />
                )}
              </div>
            ))}
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev=""
            onClick={() => prevSlide()}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next=""
            onClick={() => nextSlide()}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}