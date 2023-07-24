import React from 'react';
import g from '../assets/G.png';
import n from '../assets/knife.png';
import xs from '../assets/spoon.svg';

const About = () => {
  return (
    <div id='about' className='relative bg-about bg-center bg-cover bg-repeat bg-fixed flex justify-center items-center py-[4rem] px-[6rem]'>
        <div className='absolute inset-0 flex justify-center items-center'>
            <img src={g} alt="" className='w-[391px] h-[415px] z-0'/>
        </div>
        <div className='w-full md:py-20 z-[2] flex justify-center items-center text-white text-right flex-col md:flex-row'>
            {/* About us */}
            <div className='flex-1 flex justify-end items-end flex-col'>
                <h1 className='lg:text-[72px] text-[36px] font-fan text-[#dcca87]'>About Us</h1>
                <img src={xs} alt=""  className='xl:w-[70px] w-[45px]'/>
                <p className='my-[2rem] mx-0 max-w-[550px] font-cc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra 
                    adipiscing ultrices vulputate posuere tristique. In sed odio nec 
                    aliquet eu proin mauris et.
                </p>
                <button className='border px-9 py-2.5 bg-[#dcca87] text-black border-[#dcca87] font-fan hover:bg-black hover:text-[#dcca87] duration-500'>Know More</button>
            </div>
            <div className='my-[2rem] mx-[4rem] flex justify-center items-center'>
                {/* knife */}
                <img src={n} alt="" className='md:h-[740px]  h-[650px] '/>
            </div>
            {/* About us */}
            <div className='flex-1 flex justify-start items-start flex-col text-left'>
                <h1 className='lg:text-[72px] text-[36px] font-fan text-[#dcca87]'>Our History</h1>
                <img src={xs} alt=""  className='xl:w-[70px] w-[45px]'/>
                <p className='my-[2rem] mx-0 max-w-[550px] font-cc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra 
                    adipiscing ultrices vulputate posuere tristique. In sed odio nec 
                    aliquet eu proin mauris et.
                </p>
                <button className='border px-9 py-2.5 bg-[#dcca87] text-black border-[#dcca87] font-fan hover:bg-black hover:text-[#dcca87] duration-500'>Know More</button>
            </div>
        </div>
    </div>
  )
}

export default About