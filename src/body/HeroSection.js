import React from 'react';
import imagesone from './Heroimage/logotype.e4df684f (1) 1.png';
import puggy from './Heroimage/PUGGY.png';
import twitter from './Heroimage/Vector1.png';
import telegram from './Heroimage/Vector2.png';
import worlf from './Heroimage/wolvie (2) 2.png';
import downicoln from './Heroimage/Group 427319029.png';

const HeroSection = () => {
    return (
        <div>
            <div className="relative container mx-auto pb-[35px] sm:pb-[40px] md:pb-[50px] lg:pb-[60px] xl:pb-[70px] 2xl:pb-[78.33px]">
                <img className='hidden xl:block absolute bottom-[-47px] right-0 w-[94px] z-10 cursor-pointer' src={downicoln} alt="" />
                <img src={worlf} className='absolute bottom-0 opacity-25 sm:opacity-[100] w-full sm:left-[19%] md:left-[12%] sm:w-[40%] md:w-[50%] lg:w-[60%] xl:w-fit hidden sm:block' alt="" />
                <h2 className='step_into leading-[50px] sm:block flex justify-center items-center flex-col sm:leading-[137px] text-[#202020] text-[40px] sm:text-[60px] md:text-[70px] lg:text-[90px] xl:text-[110px] 2xl:text-[137px] uppercase mt-[30px] sm:mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[119px] '><div className='flex-col sm:flex-row flex items-start sm:items-center justify-start gap-[10px] lg:gap-[20px]'>Step into <div className='hidden sm:flex justify-center w-fit items-center border-[2.06px] border-opacity-[50%] border-[#000] gap-[10px] lg:gap-[15px] 2xl:gap-[20px] px-[21px] md:px-[23px] lg:px-[26px] xl:px-[29px] 2xl:px-[32.71px] py-[18px] sm:py-[20px] md:py-[22px] lg:py-[24px] xl:py-[26px] 2xl:py-[28.8] powered-by text-[16px] md:text-[18px] lg:text-[20] xl:text-[22px] 2xl:text-[24.75px]'>powered by <img src={imagesone} className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[180px] 2xl:w-[209.32px] h-auto" alt="" /></div></div>
                 <span className='text-[#FF3366]'><span className="!text-[#202020]">the</span> Puggy-verse</span>
                 <div className='sm:hidden flex justify-center w-fit items-center border-[2.06px] border-opacity-[50%] border-[#000] gap-[10px] lg:gap-[15px] 2xl:gap-[20px] px-[21px] md:px-[23px] lg:px-[26px] xl:px-[29px] 2xl:px-[32.71px] py-[13px] sm:py-[20px] md:py-[22px] lg:py-[24px] xl:py-[26px] 2xl:py-[28.8] powered-by text-[16px] md:text-[18px] lg:text-[20] xl:text-[22px] 2xl:text-[24.75px]'>powered by <img src={imagesone} className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[180px] 2xl:w-[209.32px] h-auto" alt="" /></div>
                 </h2>
                <img src={puggy} className='w-screen mt-[30px] md:mt-[40] lg:mt-[50px] xl:mt-[60px] 2xl:mt-[70px]  mb-[30px] md:mb-[40] lg:mb-[50px] xl:mb-[60px] 2xl:mb-[70px]' alt="" />
                <div className="flex justify-between items-end px-[25px] sm:px-[0]">
                    <div className="flex flex-col  gap-[10px] lg:gap-[16px]">
                        <button className='flex justify-center items-center gap-[6px] lg:gap-[9px] 2xl:gap-[13px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[17.41px] buttonsoculmedia rounded-[4px] sm:rounded-[6px] lg:rounded-[8px] 2xl:rounded-[12px] py-[10px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[17px] 2xl:py-[17.41px] px-[20px] sm:px-[27px] md:px-[29px] lg:px-[31px] xl:px-[33px] 2xl:px-[35.23px] uppercase hover:bg-[#00000018]  duration-300 cursor-pointer'><img src={twitter} alt="" />twitter</button>
                        <button className='flex justify-center items-center gap-[6px] lg:gap-[9px] 2xl:gap-[13px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[17.41px] buttonsoculmedia rounded-[4px] sm:rounded-[6px] lg:rounded-[8px] 2xl:rounded-[12px] py-[10px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[17px] 2xl:py-[17.41px] px-[20px] sm:px-[27px] md:px-[29px] lg:px-[31px] xl:px-[33px] 2xl:px-[35.23px] uppercase hover:bg-[#00000018]  duration-300 cursor-pointer'><img src={telegram} alt="" />telegram</button>
                    </div>
                    <div className="flex flex-col gap-[15px] sm:gap-[20px] lg:gap-[25px] xl:gap-[32.93px]">
                        <button className='PUGGY-PRESALE-text border-[2.99px] border-solid shadow-[2px_3px_0px_0px_#000000]sm:border-[1px] sm:shadow-[2.49px_3.99px_0px_0px_#000000] md:border-[2px] md:shadow-[3.49px_4.99px_0px_0px_#000000] lg:border-[2.99px] lg:shadow-[4.49px_5.99px_0px_0px_#000000] border-[#000000] bg-[#FF3366] hover:bg-[#e0355f] duration-300 px-[20px] sm:px-[36px] md:px-[38px] lg:px-[40px] xl:px-[43px] 2xl:px-[45.74px] py-[10px] sm:py-[21px] md:py-[23px] lg:py-[25px] xl:py-[27px] 2xl:py-[29.94px] rounded-[4px] sm:rounded-[6px] lg:rounded-[8px] 2xl:rounded-[12px] text-[#fff] text-[12px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[25px] 2xl:text-[27.38px]'>$PUGGY PRESALE </button>

                        <button className='PUGGY-PRESALE-text border-[2.99px] border-solid shadow-[2px_3px_0px_0px_#000000]sm:border-[1px] sm:shadow-[2.49px_3.99px_0px_0px_#000000] md:border-[2px] md:shadow-[3.49px_4.99px_0px_0px_#000000] lg:border-[2.99px] lg:shadow-[4.49px_5.99px_0px_0px_#000000] border-[#000000] bg-[#2FC6B7] hover:bg-[#25a195] duration-300 px-[20px] sm:px-[36px] md:px-[38px] lg:px-[40px] xl:px-[43px] 2xl:px-[45.74px] py-[10px] sm:py-[21px] md:py-[23px] lg:py-[25px] xl:py-[27px] 2xl:py-[29.94px] rounded-[4px] sm:rounded-[6px] lg:rounded-[8px] 2xl:rounded-[12px] text-[#fff] text-[12px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[25px] 2xl:text-[27.38px]'>$PUGGY PRESALE </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;