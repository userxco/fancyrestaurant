import React from 'react';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import quote from '../assets/quote.png';
import x from '../assets/spoon.svg';

const Testimony = () => {
  return (
    <div className='bg-black text-white py-32'>
        <div className='text-center'>
            <h5 className='text-[23px] font-fan'>Testimony</h5>
            <div className='flex justify-center items-center'>
                <img src={x} alt="" />
            </div>
            <h2 className='text-[72px] font-fan text-[#dcca87] leading-[55px] md:leading-none'>Happy Customers</h2>
        </div>
        <div className='container mx-auto'>
            <div className='xl:grid grid-cols-2'>
                {/* img */}
                <div className='flex flex-col justify-start items-start xl:items-center gap-x-8 my-12 px-12'>
                    <div className='flex flex-col md:flex-row mb-4 md:mb-0 justify-start items-start md:items-center gap-x-8 md:px-12'>
                      <img src={p1} alt="" className='mb-2 md:mb-0'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor 
                        sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. 
                        Nulla scelerisque scelerisque congue.
                    </p>  
                    </div>
                    <div className='flex justify-center items-center mr-24 md:ml-44 lg:ml-0 ml-0'>
                        <img src={quote} alt="" className='w-[45px] h-[45px]'/>
                       <h4 className='ml-4 text-[32px] font-fan text-[#dcca87]'>Jane Cooper</h4>
                    </div>
                    <span className='flex justify-center items-center mr-32 md:ml-60 lg:ml-0 ml-0'>Sommelier</span>
                </div>
                {/* img */}
                <div className='flex flex-col justify-start items-start xl:items-center gap-x-8 my-12  px-12'>
                    <div className='flex flex-col md:flex-row mb-4 md:mb-0 justify-start items-start md:items-center my-8 md:my-0 gap-x-8 md:px-12'>
                      <img src={p2} alt="" className='mb-2 md:mb-0'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor 
                        sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. 
                        Nulla scelerisque scelerisque congue.
                    </p>  
                    </div>
                    <div className='flex justify-center items-center mr-20 md:ml-44 lg:ml-0 ml-0'>
                        <img src={quote} alt="" className='w-[45px] h-[45px]'/>
                       <h4 className='ml-4 text-[32px] font-fan text-[#dcca87]'>Wade Warren</h4>
                    </div>
                    <span className='flex justify-center items-center mr-32 md:ml-60 lg:ml-0 ml-0'>Sommelier</span>
                </div>
                {/* img */}
                <div className='flex flex-col justify-start items-start xl:items-center gap-x-8  px-12'>
                    <div className='flex flex-col md:flex-row mb-4 md:mb-0 justify-start items-start md:items-center my-8 md:my-0 gap-x-8 md:px-12'>
                      <img src={p3} alt="" className='mb-2 md:mb-0'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor 
                        sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. 
                        Nulla scelerisque scelerisque congue.
                    </p>  
                    </div>
                    <div className='flex justify-center items-center mr-24 md:ml-44 lg:ml-0 ml-0'>
                        <img src={quote} alt="" className='w-[45px] h-[45px]'/>
                       <h4 className='ml-4 text-[32px] font-fan text-[#dcca87]'>Robert Fox</h4>
                    </div>
                    <span className='flex justify-center items-center mr-32 md:ml-60 lg:ml-0 ml-0'>Sommelier</span>
                </div>
                {/* img */}
                <div className='flex flex-col justify-start items-start xl:items-center gap-x-8  px-12'>
                    <div className='flex flex-col md:flex-row mb-4 md:mb-0 justify-start items-start md:items-center my-8 md:my-0 gap-x-8 md:px-12'>
                      <img src={p4} alt="" className='mb-2 md:mb-0'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor 
                        sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. 
                        Nulla scelerisque scelerisque congue.
                    </p>  
                    </div>
                    <div className='flex justify-center items-center mr-18 md:ml-44 lg:ml-0 ml-0'>
                        <img src={quote} alt="" className='w-[45px] h-[45px]'/>
                       <h4 className='ml-4 text-[32px] font-fan text-[#dcca87]'>Brooklyn Simmons</h4>
                    </div>
                    <span className='flex justify-center items-center mr-32 md:ml-60 lg:ml-0 ml-0'>Sommelier</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimony