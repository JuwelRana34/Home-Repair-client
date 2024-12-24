import autoPlay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselSlides,
} from "keep-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import mag1 from "../assets/img1.jpg";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img5.avif";
import img4 from "../assets/img7.avif";

function Slider() {
  const slides = [
    {
      id: 1,
      img: mag1,
      text: "Your Home, Our Priority",
    },
    {
      id: 2,
      img: img2,
      text: "Quality Repairs, Hassle-Free Service",
    },
    {
      id: 3,
      img: img3,
      text: "Fixing Homes, Building Trust",
    },
    {
      id: 4,
      img: img4,
      text: "Expert Repairs for Every Corner of Your Home",
    },
  ];

  return (
    <Carousel
      className=" container mx-auto mt-5 "
      options={{ loop: true }}
      plugins={[autoPlay()]}
    >
      <CarouselSlides>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.img})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="flex bg-cover items-center justify-center rounded-xl border border-metal-100 bg-metal-50 h-96 dark:border-metal-900 dark:bg-metal-900"
            >
              <div className="text-center space-y-4">
                <motion.h1
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className=" px-4 text-2xl md:text-5xl mb-5 font-medium text-white dark:text-white"
                >
                  {slide.text}
                </motion.h1>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                >
                  <Link
                    to={"/services"}
                    className=" py-2 px-3 bg-green-500/90 t-5 text-white rounded-md"
                  >
                    Explore Now
                  </Link>
                </motion.div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselSlides>
      <div className=" flex justify-center">
        <CarouselControl className="flex text-orange-500 justify-items-center">
          <CarouselIndicators />
        </CarouselControl>
      </div>
    </Carousel>
  );
}

export default Slider;
