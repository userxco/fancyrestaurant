import React, {useState, useEffect} from 'react';
import logo from '../assets/logo (2).svg';
import { HiMenuAlt1 } from 'react-icons/hi';
import { IoLogoInstagram, IoLogoPinterest, IoLogoTwitter, IoLogoYoutube, } from 'react-icons/io';
import { GrFacebookOption } from 'react-icons/gr';
import { RiArrowDownSLine } from 'react-icons/ri';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Link } from 'react-scroll';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  // nav mobile
  const [navMobile, setNavMobile] = useState(false);
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.screenY > 50 ? setIsActive(true) : setIsActive(false);
    })
  })


  return (
    <header className={`${isActive ? 'h-[110px] lg:h-[110px] shadow-lg' : 'h-[120px] lg:h-[150px]'} fixed left-0 right-0 top-0 z-10 bg-black text-white max-w-[1920px] w-full pb-12 md:pb-0 transition-all duration-300`}>
      <div className='flex flex-col md:flex-row justify-between items-center h-full md:pl-[50px] md:pr-[60px] pr-[200px] pt-6 md:pt-0'>
        {/* logo */}
        <a href="/">
          <img src={logo} alt=""  className='w-[188px] h-[50px]'/>
        </a>
        {/* nav - initially hidden - show on desktop */}

        <div className='hidden xl:flex'>
          {/* nav lg screen  */}
          <div>
            <ul className='flex gap-x-[58px]'>
              <li className='font-cc tracking-normal text-[18px] leading-[17px] cursor-pointer uppercase text-[#dcca87] flex justify-center items-center hover:text-white'>
              <Link activeClass='active' to='hero' spy={true} smooth={true} offset={50} duration={500}>Home</Link> <RiArrowDownSLine size={20}/></li>
              <li className='font-cc tracking-normal text-[18px] leading-[17px] cursor-pointer uppercase text-[#dcca87] flex justify-center items-center hover:text-white'>
              <Link activeClass='active' to='about' spy={true} smooth={true} offset={50} duration={500}>about</Link> <RiArrowDownSLine size={20}/></li>
              <li className='font-cc tracking-normal text-[18px] leading-[17px] cursor-pointer uppercase text-[#dcca87] flex justify-center items-center hover:text-white'>
              <Link activeClass='active' to='menu' spy={true} smooth={true} offset={50} duration={500}>menu</Link> <RiArrowDownSLine size={20}/></li>
              <li className='font-cc tracking-normal text-[18px] leading-[17px] cursor-pointer uppercase text-[#dcca87] flex justify-center items-center hover:text-white'>
              <Link activeClass='active' to='chef' spy={true} smooth={true} offset={50} duration={500}>chef</Link> <RiArrowDownSLine size={20}/></li>
            </ul>
          </div>
        </div>
        {/* nav menu btn = showing by default on desktop mode */}
        <div onClick={() => setNavMobile(!navMobile)} className='xl:hidden absolute right-[5%] bg-black text-white p-2 rounded-md cursor-pointer'>
          <HiMenuAlt1 size={30}/>
        </div>
        {/* nav mobile- showing by defoul on hidden desktop */}
        <div className={`${navMobile ? 'max-h-full' : 'max-h-0'} ${isActive ? 'top-[100px] lg:top-[110px]' : 'top-[120px] lg:top-[150px] lg:hidden' } fixed bg-black w-full h-full left-0 -z-10 transition-all duration-300`}>
          {/* NavMibile */}
          <div className='w-full h-full flex flex-col justify-evenly overflow-hidden'>
            <ul className='flex flex-col justify-center items-center gap-y-8 py-5 mb-6'>
              <li className='font-fan text-[30px] text-[#dcca87] cursor-pointer hover:text-white'>Home</li>
              <li className='font-fan text-[30px] text-[#dcca87] cursor-pointer hover:text-white'>Page</li>
              <li className='font-fan text-[30px] text-[#dcca87] cursor-pointer hover:text-white'>Contact</li>
              <li className='font-fan text-[30px] text-[#dcca87] cursor-pointer hover:text-white'>Blog</li>
            </ul>
            {/* social icons */}
            <div className='text-2xl'>
              <div className='flex justify-center gap-x-[30px]'>
                         <GrFacebookOption size={20} className='cursor-pointer'/>
                         <IoLogoInstagram size={20} className='cursor-pointer'/>
                         <IoLogoPinterest size={20} className='cursor-pointer'/>
                         <IoLogoTwitter size={20} className='cursor-pointer'/>
                         <IoLogoYoutube size={20} className='cursor-pointer'/>
              </div>
            </div>
          </div>
        </div>
        {/* input lg */}
        <div className='hidden md:flex mr-12 pt-6 justify-center items-center'>
          <input type="text" placeholder='Search wedsite' className='bg-transparent border-b border-gray-500 pb-4 font-cc'/> <BiSearchAlt2 size={20} className=''/>
        </div>
      </div>
        {/* input sm */}
        <div className='flex md:hidden mr-6 justify-end items-center'>
          <input type="text" placeholder='Search wedsite' className='bg-transparent border-b border-gray-500 pb-4 font-cc'/> <BiSearchAlt2 size={20} className=''/>
        </div>
    </header>
  )
}

export default Header