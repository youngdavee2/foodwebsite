import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const ImageSlide = (props) => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  const toggleImages = () => {
    setShowSecondImage((prev) => !prev);
  };

  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
      <AnimatePresence>
        {!showSecondImage ? (
          <motion.div
            key="first"
            initial={{ opacity: 0 ,x:400}}
            animate={{ opacity: 1 ,x:0}}
            exit={{ opacity: 0 ,x:-400}}
            transition={{ duration: 0.6 }}
            className={`relative flex items-center justify-center ${props.lightMode ? 'bg-black' : 'bg-white' } lg:mt-0 w-full md:h-[650px] lg:h-[605px]`}
          >
            <motion.div
              className="absolute z-10 right-3 top-[50%] cursor-pointer text-orange-600"
              onClick={toggleImages}
              whileHover={{ scale: 1.5 }}
            >
              <IoIosArrowForward size={40} />
            </motion.div>
            <img
              src="https://media.istockphoto.com/id/1500141300/photo/bbq-classic-burger-against-fiery-flames-vibrant-food-black-background.jpg?s=1024x1024&w=is&k=20&c=RW1wOHygSGYyjC-WcLt2JFG0NxOqR3JOsfDSiLYOago="
              alt=""
              className="w-full h-full lg:h-[450px]"
            />
            <div className="absolute bg-black/25 w-full h-full lg:h-[450px] flex justify-end items-center">
              <h1 className="text-white lg:text-5xl text-2xl font-bold p-4 text-center animate-bounce">
                "Sizzle, bite, <span className='text-orange-600'>delight!</span>"
              </h1>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="second"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{ duration: 0.6 }}
            className={`relative flex items-center justify-center ${props.lightMode ? 'bg-black' : 'bg-white' } lg:mt-0 w-full md:h-[650px] lg:h-[605px]`}
          >
            <motion.div
              className="absolute z-10 left-3 top-[50%] cursor-pointer text-orange-600"
              onClick={toggleImages}
              whileHover={{ scale: 1.5 }}
            >
              <IoIosArrowBack size={40} />
            </motion.div>
            <img
              src="https://media.istockphoto.com/id/1059234510/photo/hot-italian-pizza.jpg?s=612x612&w=0&k=20&c=DhkWNJ4oUBgvzzhIqOukfRu2J2rfLTYF0385_zAYWdA="
              alt=""
              className="w-full h-full lg:h-[450px]"
            />
            <div className="absolute bg-black/55 w-full h-full lg:h-[450px] flex justify-end items-center">
              <h1 className="text-white lg:text-5xl text-3xl font-bold p-4 text-center animate-bounce">
                "The cheesiest <span className='text-orange-600'>taste!</span>"
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ImageSlide;
