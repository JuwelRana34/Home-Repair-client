import autoPlay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselSlides,
} from 'keep-react'
import { motion } from "motion/react"
import mag1 from '../assets/mechanic.gif'

function Slider() {
     
  const slides = [
      {
      id: 1,  
      img: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWUlMjByZXBhaXJ8ZW58MHx8MHx8fDA%3D",
      text: "1st Worker",
      },
      {
      id: 2,  
      img:'https://media.istockphoto.com/id/1372596908/photo/busy-mom-spends-time-with-cheerful-daughter-engages-her-to-help-together-they-painting-the.jpg?s=612x612&w=0&k=20&c=Qv-j5BEnlWxRZZmPykFONmLiePe3w6FDWiYwBGUVRio=',
      text: "1st Worker",
      },
      {
      id: 3,  
      img: mag1,
      text: "1st Worker",
      },
      {
      id: 4,  
      img: mag1,
      text: "1st Worker",
      }
  ]

  return (

    <Carousel className=' container mx-auto ' options={{ loop: true }} plugins={[autoPlay()]}>
      <CarouselSlides>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div style={{background:`linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.img})`, backgroundRepeat: "no-repeat" , backgroundPosition:"center", backgroundSize: "cover" }} className="flex bg-cover items-center justify-center rounded-xl border border-metal-100 bg-metal-50 h-96 dark:border-metal-900 dark:bg-metal-900">
              <motion.h1 initial={{Y: -4 }} animate={{ Y: 1 ,transition: { duration: 1 }}} className="text-heading-1 font-medium text-white dark:text-white">{slide.text}</motion.h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselSlides>
      <div className=' flex justify-center'>

        <CarouselControl className='flex text-orange-500 justify-items-center'>
        {/* <CarouselButtons>
          <CarouselPrevButton />
          <CarouselNextButton />
        </CarouselButtons> */}
        <CarouselIndicators />
      </CarouselControl>
      </div>
      
    </Carousel>


  )
}

export default Slider