import {React, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import logo from "./image/telegram-cloud-photo-size-4-5805594898907383759-y.png";


const Navbar = () => {
    const [toggle, setToggle] =useState(true);
    return (
        <div className='overlayheaderone border-b-[1px] border-[#000] border-opacity-[0.1]'>
            <div className='container mx-auto py-[20px] lg:py-[26px] relative px-[24px] sm:px-0'>
                <div className='flex  justify-between items-center'>
                        <div className='relative z-50'>
                            <Link className=' flex justify-center items-center logo-image-text gap-[12px] text-[20px] sm:text-[28px] md:text-[30px] lg:text-[32px]  xl:text-[35px] 2xl:text-[38.58px]' to="/"><img className='w-[35px] sm:w-[40px] md:w-[45px] lg:w-[50px] xl:w-[60px] 2xl:w-[70px]' src={logo} alt=''/> PUGGY</Link>
                        </div>
                        
                        <div className=''>
                            <ul className={`flex sm:justify-center sm:items-center gap-[25px] md:gap-[30px] sm:gap-[10px] xl:gap-[40px] flex-col sm:flex-row sm:relative absolute sm:top-0 sm:left-0 top-[90px] sm:bg-transparent bg-[#000000ce] sm:w-auto w-3/4 sm:h-auto h-screen sm:p-0 p-4 z-30  duration-150
                            ${toggle ? 'left-[-100%]' : 'left-0'}
                            `}>
                                <Link onClick={()=>setToggle(!toggle)} className='uppercase manu-section sm:text-[#292929] text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]'  to='About_Puggy '>About Puggy </Link>
                                <Link onClick={()=>setToggle(!toggle)} className='uppercase manu-section sm:text-[#292929] text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]' to='Puggynomics'>Puggynomics</Link>
                                <Link onClick={()=>setToggle(!toggle)} className='uppercase manu-section sm:text-[#292929] text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]' to='How_to_buy'>How to buy</Link>
                            </ul>
                        </div>
                        <div className=''>
                            <button className='button-area px-[18px] sm:px-[24px] md:px-[28px] lg:px-[32px] xl:px-[36px] 2xl:px-[40px] py-[12px] sm:py-[15px] md:py-[17px] lg:py-[19px] xl:py-[21px] 2xl:py-[23px] text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[#fff] shadow-custom-light sm:shadow-custom-dark md:shadow-custom-combo md:rounded-[6px] lg:rounded-[8px] xl:rounded-[10px] 2xl:rounded-[12px] bg-[#FF3366] hover:bg-[#df2f5b] duration-300'>BUY $PUGGY</button>
                        </div>
                        {
                            toggle ?
                            <FaBars onClick={()=>setToggle(!toggle)} className='sm:hidden text-[26px]'/>
                            :
                            <IoClose onClick={()=>setToggle(!toggle)} className='sm:hidden text-[26px]'/>
                        }
                </div>
            </div>
        </div>
    );
};

export default Navbar;


// fixed z-50 left-[50%] max-w-[100%] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]