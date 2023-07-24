import React from 'react';
import we from '../assets/welcome.png';
import xs from '../assets/spoon.svg';

const Hero = () => {
  return (
    <section id='hero' className='min-h-[600px] pt-52 pb-12 text-center relative md:pt-32 lg:pt-44 lg:pb-32 lg:text-left bg-black text-white pl-12 pr-4 md:pl-0 md:pr-0'>
        <div className='container mx-auto'>
            <div className='md:flex '>
                {/* text */}
                <div className='md:w-[40%] lg:pt-44 md:pt-20'>
                    <h4 className='text-[23px] font-fan text-left'>Chase The New Flavour</h4>
                    <div>
                       <img src={xs} alt="" className='w-[45px]'/> 
                    </div>
                    <h1 className='mb-8 lg:text-[90px] font-fan text-[#dcca87] md:text-[55px] text-[47px] md:leading-[58px] lg:leading-[117px] text-left'>The Key To Fine Dining</h1>
                    <p className='font-cc text-left'>Sit tellus lobortis sed senectus vivamus molestie. <br /> Condimentum 
                         volutpa morbi facilisis quam scelerisque sapien. Et, penatibus 
                        aliquam amet tellus
                    </p>
                    {/* btn */}
                    <div className='flex items-center  mx-auto mt-10 pb-8 md:pb-0'>
                        <button className='border px-9 py-2.5 bg-[#dcca87] text-black border-[#dcca87] font-fan hover:bg-black hover:text-[#dcca87] duration-500'>Explore Menu</button>
                        <a href="#"></a>
                    </div>
                </div>
                {/* img */}
                <div className='flex-1 flex justify-center items-center ml-[2rem]'>
                    <img src={we} alt=""  className='lg:w-[80%] md:w-full'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero