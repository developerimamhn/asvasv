import React from 'react';
import { Link } from 'react-router-dom';
import logo from './footerimage/telegram-cloud-photo-size-4-5805594898907383759-y.png';
import icon from './footerimage/Vector-1.png';
import icon1 from './footerimage/Vector.png';

const Footer = () => {
    return (
        <div className="">
            <div className='bg-[#F3F3F3] pt-[25px] lg:pt-[40px] pb-[15px] lg:pb-[30px]'>
                <div className="container mx-auto">
                    <div className="flex justify-between items-center flex-col sm:flex-row ">
                    <Link className=' flex justify-center items-center logo-image-text gap-[12px] text-[20px] sm:text-[28px] md:text-[30px] lg:text-[42px]  xl:text-[55px] 2xl:text-[61.67px]' to="/"><img className='w-[35px] sm:w-[40px] md:w-[45px] lg:w-[50px] xl:w-[60px] 2xl:w-[70px]' src={logo} alt=''/> PUGGY</Link>
                    <div className="flex justify-end items-center gap-[15px] sm:gap-[20px] md:gap-[25px] lg:gap-[30px] xl:gap-[40px] 2xl:gap-[50px] ">
                        <Link className='uppercase manu-section !text-[#292929] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]'  to='About_Puggy '>About Puggy </Link>
                        <Link className='uppercase manu-section !text-[#292929] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]'  to='About_Puggy '>About Puggy </Link>
                        <Link className='uppercase manu-section !text-[#292929] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]'  to='About_Puggy '>About Puggy </Link>

                        <div className="flex justify-center items-center gap-[8px] lg:gap-[16px]">
                            <Link className='bg-[#fff] border-[1.24px] border-[#000] flex justify-center items-center w-[50px] h-[50px] rounded-[7px] lg:rounded-[12px]'><img src={icon} alt="" /></Link>
                            <Link className='bg-[#fff] border-[1.24px] border-[#000] flex justify-center items-center w-[50px] h-[50px] rounded-[7px] lg:rounded-[12px]'><img src={icon1} alt="" /></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className='footerlawstcommit text-[12px] lg:text-[20px] bg-[#000] text-[#fff] pt-[20px] sm:pt-[27px] lg:pt-[47px] pb-[15px] lg:pb-[29px]'>© puggy 2024 - All Rights Reserved </h1>
            </div>
        </div>    
    );
};

export default Footer;