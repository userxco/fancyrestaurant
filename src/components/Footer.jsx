import React from 'react';
import bg from '../assets/bg.png';
import x from '../assets/spoon.svg';
import a from '../assets/Gerícht.png';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='bg-[#0c0c0c] xl:h-[900px] h-[1300px]'>
        <div className='container mx-auto'>
            <div>
                {/* text */}
                <div className='bg-[#0c0c0c] h-[400px] text-white'>
                    <div className='container mx-auto flex justify-center items-center w-full h-full '>
                        <div className='border border-[#dcca87] mt-96 w-[85%] h-full flex justify-start items-center flex-col bg-[#0c0c0c]'>
                            <h4 className='md:text-[38px] text-[23px] font-fan xl:mt-8 mt-20'>Newsletter</h4>
                            <div>
                                <img src={x} alt="" className='xl:w-[52px] w-[45px]'/>
                            </div>
                            <h2 className='xl:text-[72px] text-[36px] font-fan text-[#dcca87]'>Subscribe To Our Newsletter</h2>
                            <p className='font-cc text-[#aaaaaa] mb-6'>And never miss latest Updates!</p>
                            <div className='flex justify-center items-center'>
                                <input type="email" placeholder='Email Addres' name='email' className='bg-transparent border xl:w-[620px] px-4 py-4'/>
                                <button className='border px-9 py-4 bg-[#dcca87] text-black border-[#dcca87] font-fan hover:bg-black hover:text-[#dcca87] duration-500'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
        
                    <div className='flex justify-center items-center mt-72 text-white'>
                        <div className='xl:flex text-center gap-x-32'>
                            {/* text */}
                            <div>
                                <h3 className='text-[23px] font-fan mb-4'>Contact Us</h3>
                                <p className='font-cc text-[#aaaaaa]'>9 W 53rd St, New York, NY 10019, USA</p>
                                <p className='font-cc text-[#aaaaaa]'>+1 212-344-1230</p>
                                <p className='font-cc text-[#aaaaaa]'>+1 212-555-1230</p>
                            </div>
                            {/* text */}
                            <div className='my-12 xl:my-0'>
                                <div className='mb-4'>
                                    <img src={a} alt="" />
                                </div>
                                <p className='font-cc text-[#aaaaaa]'>“The best way to find yourself is to lose <br />yourself in the service of others.”</p>
                                <div className='ml-32'>
                                    <img src={x} alt="" className='w-[45px]'/>
                                </div>
                                <div className='flex mt-4 gap-x-6 ml-20'>
                                    <FaFacebookF size={30}/>
                                    <FaTwitter size={30}/>
                                    <FaInstagram size={30}/>
                                </div>
                                
                            </div>
                            {/* text */}
                            <div>
                                <h3 className='text-[23px] font-fan mb-4'>Working Hours</h3>
                                <p className='font-cc text-[#aaaaaa]'>Monday-Friday:</p>
                                <p className='font-cc text-[#aaaaaa]'>08:00 am -12:00 am</p>
                                <p className='font-cc text-[#aaaaaa]'>Saturday-Sunday:</p>
                                <p className='font-cc text-[#aaaaaa]'>07:00am -11:00 pm</p>
                            </div>
                        </div>
                    </div>
                 
            </div>
        </div>
    </div>
  )
}

export default Footer