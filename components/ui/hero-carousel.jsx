import { useState } from "react";

function HeroCarousel(props) {
  const slides = [
    {
      headline:
        "Knowing Where to Go for Cancer Treatment Makes all the Difference",
      subhead: "",
      src: "/images/hero1.png",
      alt: "Cancer Treatment",
      buttonText: "Learn More",
      buttonUrl: "/cancer-treatment",
    },
    {
      headline: "Schedule an Appointment",
      subhead:
        "Learn about our 9,500 providers. Call, book online or schedule a virtual visit",
      src: "/images/hero2.jpeg",
      alt: "Slide 2",
      buttonText: "Schedule Now",
      buttonUrl: "/scheduling",
    },
  ];

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
    <section id="hero-carousel" className="site-container flex-col overflow-hidden relative flex md:min-h-[380px] px-4 max-md:px-5">
      <img
        loading="lazy"
        src={slides[currentSlide].src}
        className="absolute z-[-1] h-96 w-full object-cover object-center inset-0"
        alt={slides[currentSlide].alt}
      />

      <div className="flex flex-col">
        {/* top containier */}
        <div className="flex flex-row justify-between">
            <div id="previous-slide" className="mt-16">
            <div onClick={goToPrevSlide} className="mr-2 opacity-40">
              <svg
                width="100px"
                height="200px"
                viewBox="0 0 1024 1024"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                  fill="#747474"
                />
              </svg>
            </div>
          </div>
          {/* text overlay and button */}
          <div className="text-white w-3/4">
            <div className="pb-4">
            <h1 className="relative text-white text-4xl leading-10 w-[492px] max-w-full mt-28 max-md:mt-10">
              {slides[currentSlide].headline}
            </h1>
            {slides[currentSlide].subhead && (
              <p className="text-xl pb-8">{slides[currentSlide].subhead}</p>
            )}
            </div>
            <a
              href={slides[currentSlide].buttonUrl}
              className="relative text-white text-center text-base leading-6 capitalize whitespace-nowrap rounded border bg-cyan-500 bg-opacity-70 w-[124px] max-w-full items-center mt-14 mb- px-5 py-5 border-solid border-sky-400 max-md:my-10"
            >
              {slides[currentSlide].buttonText}
            </a>
          </div>
          <div id="next-slide" className="mt-16">
            <div onClick={goToNextSlide} className="ml-2 opacity-40">
              <svg
                width="100px"
                height="200px"
                viewBox="0 0 1024 1024"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                  fill="#747474"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* dot navigation */}
        <div className="flex justify-center">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`mx-2 mt-4 h-12 rounded-full bg-tertiaryAccent ${
                index === currentSlide ? "bg-gray-400" : ""
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
