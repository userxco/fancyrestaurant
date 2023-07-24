import React from 'react';
import menu from '../assets/menu.png';
import x from '../assets/spoon.svg';

const Menu = () => {
  return (
    <section id='menu' className='min-h-[600px] pt-52 pb-12 text-center relative md:pt-32 lg:pt-44 lg:pb-32 lg:text-left bg-black text-white pl-12 pr-4 md:pl-0 md:pr-0'>
        <div className='text-center pb-12'>
          <h5 className='text-[23px] font-fan'>Menu That Fits You Palatte</h5>
          <div className='flex justify-center items-center w-full'>
            <img src={x} alt=""  className='w-[45px]'/>
          </div>
          <h2 className='text-[72px] font-fan text-[#dcca87]'>Today's Special</h2>
        </div>
        <div className='container mx-auto md:p-12 lg:p-0'>
            <div className='md:flex flex-col lg:flex-row'>
                {/* Wine & Beer */}
                <div className='px-4'>
                    <h3 className='text-[48px] font-fan pb-6'>Wine & Beer</h3>
                    <ul>
                        <div className='flex justify-start items-end'>
                           <li className='text-[23px] font-fan text-[#dcca87]'>Chapel Hill Shiraz</li>
                        <div className='w-[140px] h-[1px] bg-white mx-2 mb-3'/> 
                        <p>$56</p>
                        </div>
                        <p className='text-[#aaaaaa] text-[16px] py-4 flex'>AU | Bottle</p>
                        <div className='flex justify-start items-end'>
                           <li className='text-[23px] font-fan text-[#dcca87]'>Catena Malbec</li>
                        <div className='w-[140px] h-[1px] bg-white mx-2 mb-3'/> 
                        <p>$56</p>
                        </div>
                        <p className='text-[#aaaaaa] text-[16px] py-4 flex'>AR | bottle</p>
                        <div className='flex justify-start items-end'>
                           <li className='text-[23px] font-fan text-[#dcca87]'>La Vieille Rosé</li>
                        <div className='w-[140px] h-[1px] bg-white mx-2 mb-3'/> 
                        <p>$56</p>
                        </div>
                        <p className='text-[#aaaaaa] text-[16px] py-4 flex'>FR |750 ml</p>
                        <div className='flex justify-start items-end'>
                           <li className='text-[23px] font-fan text-[#dcca87]'>Rhino Pale Ale</li>
                        <div className='w-[140px] h-[1px] bg-white mx-2 mb-3'/> 
                        <p>$56</p>
                        </div>
                        <p className='text-[#aaaaaa] text-[16px] py-4 flex'>CA | 750 ml</p>
                        <div className='flex justify-start items-end '>
                           <li className='text-[23px] font-fan text-[#dcca87]'>Irish Guinness</li>
                        <div className='w-[140px] h-[1px] bg-white mx-2 mb-3'/> 
                        <p>$56</p>
                        </div>
                        <p className='text-[#aaaaaa] text-[16px] py-4 flex'>IE | 750 ml</p>
                    </ul>
                </div>
                {/* img */}
                <div className='flex-1 flex justify-center items-center '>
                    <img src={menu} alt=""  className='w-[410px] lg:w-[510px] h-auto'/>
                </div>
                {/* text */}
                <div className='px-4'>
                    <h3 className='text-[48px] font-fan pb-6'>Cocktails</h3>
                    <ul>
                    <div className='flex justify-start items-end'>
                           <li className='text-[23px] font-fan text-[#dcca87]'>Aperol Spritz</li>
                        <div className='w-[140px] h-[1px] bg-white mx-2 mb-3'/> 
                        <p>$56</p>
                        </div>
                        <p className='text-[#aaaaaa] text-[16px] py-4 flex'>Aperol | Villa Marchesi prosecco | soda | 30ml</p>
                        <div className='flex justify-start items-end'>
                           <li className='text-[23px] font-fan text-[#dcca87]'>Dark 'N' Stormy</li>
                        <div className='w-[140px] h-[1px] bg-white mx-2 mb-3'/> 
                        <p>$56</p>
                        </div>
                        <p className='text-[#aaaaaa] text-[16px] py-4 flex'>Dark rum | Ginger beer | Slice of lime.</p>
                        <div className='flex justify-start items-end'>
                           <li className='text-[30px] font-fan text-[#dcca87]'>Daiquiri</li>
                        <div className='w-[140px] h-[1px] bg-white mx-2 mb-3'/> 
                        <p>$56</p>
                        </div>
                        <p className='text-[#aaaaaa] text-[16px] py-4 flex'>Rum | Citrus juice | Sugar</p>
                        <div className='flex justify-start items-end'>
                           <li className='text-[23px] font-fan text-[#dcca87]'>Old Fashioned</li>
                        <div className='w-[140px] h-[1px] bg-white mx-2 mb-3'/> 
                        <p>$56</p>
                        </div>
                        <p className='text-[#aaaaaa] text-[16px] py-4 flex'>Bourbon | Brown sugar | Angostura Bitters</p>
                        <div className='flex justify-start items-end'>
                           <li className='text-[23px] font-fan text-[#dcca87]'>Negroni</li>
                        <div className='w-[140px] h-[1px] bg-white mx-2 mb-3'/> 
                        <p>$56</p>
                        </div>
                        <p className='text-[#aaaaaa] text-[16px] py-4 flex'>Gin | Sweet Vermouth | Campari | Orange garnish</p>
                    </ul>
                </div>
            </div>
        </div>
        {/* button */}
        <div className='flex justify-center items-center mt-16'>
            <button className='border px-9 py-2.5 bg-[#dcca87] text-black border-[#dcca87] font-fan hover:bg-black hover:text-[#dcca87] duration-500'>View More</button>
        </div>
    </section>
  )
}

export default Menu