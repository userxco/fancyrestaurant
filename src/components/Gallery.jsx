import React, {useState, useRef, useEffect} from 'react';
import { motion } from 'framer-motion';
import images from '../images';
import x from '../assets/spoon.svg';
import image1 from '../assets/gallery01.png';
import image2 from '../assets/gallery02.png';
import image3 from '../assets/gallery03.png';
import image4 from '../assets/gallery04.png';


const Gallery = () => {
  return (
    <div className='bg-black text-white xl:py-[4rem] xl:px-[6rem] px-8'>
        <div className='container mx-auto py-20'>
            <div className='xl:flex justify-center items-center'>
                {/* text */}
                <div className='mr-12 mb-16 xl:mb-0 xl:mr-0 w-full flex flex-col justify-start items-start'>
                    <h4 className='xl:text-[48px] text-[23px] font-fan'>Instagram</h4>
                    <div className='w-full h-full'>
                        <img src={x} alt=""  className='w-[45px] xl:w-[70px]'/>
                    </div>
                    <h2 className='xl:text-[72px] text-[48px] font-fan text-[#dcca87]'>Photo Gallery</h2>
                    <p className='font-cc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
                    </p>
                    <div className='pt-8'>
                        <button className='border px-9 py-2.5 bg-[#dcca87] text-black border-[#dcca87] font-fan hover:bg-black hover:text-[#dcca87] duration-500'>View More</button>
                    </div>
                </div>
                {/* img */}
                <div className='flex justify-start items-start'>
                    <motion.div className='cursor-grab overflow-hidden'>
                        <motion.div drag='x' dragSnapToOrigin className='flex'>
                            
                                    <motion.div className='flex md:w-[50%] md:pl-4 p-4 md:p-0'>
                                        <img src={image1} alt="" className='md:w-[70%] p-4  pointer-events-none border ml-4 border-[#dcca87]'/>
                                        <img src={image2} alt="" className='md:w-[70%] p-4 pointer-events-none border ml-4 border-[#dcca87]'/>
                                        <img src={image3} alt="" className='md:w-[70%] p-4 pointer-events-none border ml-4 border-[#dcca87]'/>
                                        <img src={image4} alt="" className='md:w-[70%] p-4 pointer-events-none border ml-4 border-[#dcca87]'/>
                                    </motion.div>
                               
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery