import React from 'react';
import chef from '../assets/chef.png';
import x from '../assets/spoon.svg';
import xx from '../assets/quote.png';
import sign from '../assets/sign.png';


const Chef = () => {
  return (
    <div id='chef' className='relative bg-about bg-center bg-cover bg-repeat bg-fixed flex justify-center items-center lg:py-[4rem] lg:px-[6rem] px-4 text-white py-20'>
        <div className='container mx-auto'>
            <div className='md:flex md:py-32'>
                {/* img */}
                <div className='flex justify-center items-center'>
                    <img src={chef} alt="" className='md:w-full w-[90%]'/>
                </div>
                {/* text */}
                <div className='flex-col justify-center items-center xl:max-w-[750px] md:max-w-[300px] md:ml-12 xl:ml-0 xl:pl-32 md:pt-52 py-12 gap-y-4 px-6 md:px-0'>
                    <h5 className='xl:text-[48px] text-[23px] font-fan'>Chef's Word</h5>
                    <div>
                        <img src={x} alt="" className='xl:w-[70px] w-[45px]'/>
                    </div>
                    <h2 className='lg:text-[72px] md:leading-[72px] text-[32px] font-fan text-[#dcca87] pb-12'>What We Believe In</h2>
                    <div className='flex gap-x-6'>
                      <img src={xx} alt="" className='w-[45px] h-[45px]'/>
                      <p className='flex justify-center items-center text-cc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.</p>
                    </div>
                    <p className='text-cc'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
                    <div className='pt-20'>
                      <h4 className='text-[32px] font-fan text-[#dcca87]'>Kevin Luo</h4>
                      <p className='font-cc'>Chef & Founder</p>  
                    </div>
                    <div className='pt-20'>
                        <img src={sign} alt="" className='w-[50%]'/>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chef