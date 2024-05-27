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
      className="site-container flex flex-col overflow-hidden lg:h-96 relative lg:px-4"
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
          <div className="flex flex-col gap-2 w-80 md:w-4/6 lg:w-3/4">
            <div id="headline"
              className="flex flex-col py-16 pb-4 bg-primaryLight opacity-80"
            >
              <div className="h-20">
                <h1
                  className={`text-primaryAccent leading-10 md:w-1/2 max-w-full`}
                >
                  {slides[currentSlide].headline}
                </h1>
              </div>
            </div>
            {slides[currentSlide].buttonText && (
              <div>
                <a
                  id="hero-button"
                  href={slides[currentSlide].buttonUrl}
                  className="px-8 py-3 md:py-5 text-primaryLight text-center text-base bg-primaryAccent rounded-full"
                >
                  {slides[currentSlide].buttonText}
                </a>
              </div>
            )}
          </div>
        </div>
        {/* dot navigation */}
        <div id="nav-buttons" className="flex justify-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`mx-2 mt-6 h-6 w-6 md:h-8 md:w-8 rounded-full bg-primaryAccent ${
                index === currentSlide ? "bg-secondaryDark " : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
