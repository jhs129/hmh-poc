import { useState } from "react";
import { getDefaultContent } from "./hero-carousel.content";
import Image from "next/image";

function HeroCarousel(props) {
  let slides;
  if (!props.slides) {
    slides = getDefaultContent();
  } else {
    slides = props.slides;
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <section
      id="hero-carousel"
      className="site-container flex flex-col overflow-hidden h-60 lg:h-96 relative lg:px-4"
    >
      <div className="flex flex-col">
        <Image
          src={slides[currentSlide].image}
          alt="Hero Image"
          width={1024}
          height={400}
          className="absolute z-[-1] h-full w-full mx-auto object-cover object-center lg:inset-0"
          loading="eager"
          priority
        />
        {/* top containier */}
        <div className="flex flex-row mt-8">
          {/* text overlay and button */}
          <div id="banner-text" className="flex flex-col gap-8 w-80 md:w-1/2">
            <div id="headline" className="relative p-2">
              <h1
                id="headline-text"
                className="text-primaryDark text-2xl md:text-4xl font-bold py-2 md:py-4 leading-6 md:leading-10 z-20"
              >
                {slides[currentSlide].headline}
              </h1>
              <div
                id="overlay"
                className="absolute top-0 w-full h-full bg-white opacity-10 z-10"
              ></div>
            </div>
            <div
              id="hero-button" 
              className={`${slides[currentSlide].buttonText ? "" : "hidden"} p-2`}
            >
              {slides[currentSlide].buttonText && (
                <a
                  href={slides[currentSlide].buttonUrl}
                  className="px-4 md:px-8 py-3 md:py-5 text-primaryLight text-center text-base bg-primaryAccent rounded-full"
                >
                  {slides[currentSlide].buttonText}
                </a>
              )}
            </div>
          </div>
        </div>
        {/* dot navigation */}
        <div className="absolute bottom-5 w-full mx-auto">
          <div id="nav-buttons" className="flex justify-center">
            {slides.map((slide, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`mx-2 mt-4 h-4 w-4 md:h-4 md:w-4 rounded-full bg-primaryAccent ${
                  index === currentSlide ? "bg-secondaryDark " : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
