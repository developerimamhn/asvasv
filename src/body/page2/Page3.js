import React from 'react';
import imageone from './imgage2/_.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Keep autoplay styles if you're using autoplay
import { Autoplay } from 'swiper/modules';

const Page2 = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="px-[24px] sm:px-[0] flex gap-[60px] sm:gap-[80px] md:gap-[100px] lg:gap-[120px] xl:gap-[140px] 2xl:gap-[164px] justify-center items-center  mt-[200px] sm:mt-[140px] md:mt-[180px] lg:mt-[190px] xl:mt-[220px] 2xl:mt-[266px] flex-col sm:flex-row">
                    <div className=""><img src={imageone} className='w-full sm:w-auto' alt="" /></div>
                    <div className="">
                    <h2 className='step_into leading-[50px] sm:leading-[137px] text-[#202020] text-[35px] sm:text-[50px] md:text-[65px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px] uppercase '>Puggy TV–Watch the 
                    <span className='text-[#FF4828]'> Pack in Action.</span></h2>
                    <p className='diveindiscover text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[25px] 2xl:text-[29.83px] mt-[15px] md:mt-[18px] lg:mt-[20px] xl:mt-[22px] 2xl:mt-[24px]'>Dive in, discover fresh memes, and don’t forget to share the laughs with your friends. After all, life’s too short not to scroll through some PUGGY memes!"</p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex justify-center items-center gap-8 mt-[40px] sm:mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[120px]">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    slidesPerView={3.5} // Default setting
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        40: {
                            slidesPerView: 1.5,
                            spaceBetween: 10,
                            },
                        640: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                        },
                            768: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                            },
                                1024: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 30,
                                    },
                                    1280: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                        },
                                        1536: {
                                            slidesPerView: 3.5,
                                            spaceBetween: 30,
                                            },
                    }}
                    >
                    <SwiperSlide>
                        <div className="h-[300px] md:h-[350px] lg:h-[402px] xl:h-[442px] flex justify-center items-center bg-[#F3F3F3] border-[1.5px] border-[#E6E6E6]">
                        <h2 className='coming-soon'>coming soon</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[300px] md:h-[350px] lg:h-[402px] xl:h-[442px] flex justify-center items-center bg-[#F3F3F3] border-[1.5px] border-[#E6E6E6]">
                        <h2 className='coming-soon'>coming soon</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[300px] md:h-[350px] lg:h-[402px] xl:h-[442px] flex justify-center items-center bg-[#F3F3F3] border-[1.5px] border-[#E6E6E6]">
                        <h2 className='coming-soon'>coming soon</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[300px] md:h-[350px] lg:h-[402px] xl:h-[442px] flex justify-center items-center bg-[#F3F3F3] border-[1.5px] border-[#E6E6E6]">
                        <h2 className='coming-soon'>coming soon</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[300px] md:h-[350px] lg:h-[402px] xl:h-[442px] flex justify-center items-center bg-[#F3F3F3] border-[1.5px] border-[#E6E6E6]">
                        <h2 className='coming-soon'>coming soon</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[300px] md:h-[350px] lg:h-[402px] xl:h-[442px] flex justify-center items-center bg-[#F3F3F3] border-[1.5px] border-[#E6E6E6]">
                        <h2 className='coming-soon'>coming soon</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[300px] md:h-[350px] lg:h-[402px] xl:h-[442px]h-[300px] md:h-[350px] lg:h-[402px] xl:h-[442px] flex justify-center items-center bg-[#F3F3F3] border-[1.5px] border-[#E6E6E6]">
                        <h2 className='coming-soon'>coming soon</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[300px] md:h-[350px] lg:h-[402px] xl:h-[442px]h-[300px] md:h-[350px] lg:h-[402px] xl:h-[442px] flex justify-center items-center bg-[#F3F3F3] border-[1.5px] border-[#E6E6E6]">
                        <h2 className='coming-soon'>coming soon</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[300px] md:h-[350px] lg:h-[402px] xl:h-[442px]h-[300px] md:h-[350px] lg:h-[402px] xl:h-[442px] flex justify-center items-center bg-[#F3F3F3] border-[1.5px] border-[#E6E6E6]">
                        <h2 className='coming-soon'>coming soon</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[300px] md:h-[350px] lg:h-[402px] xl:h-[442px] flex justify-center items-center bg-[#F3F3F3] border-[1.5px] border-[#E6E6E6]">
                        <h2 className='coming-soon'>coming soon</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[300px] md:h-[350px] lg:h-[402px] xl:h-[442px] flex justify-center items-center bg-[#F3F3F3] border-[1.5px] border-[#E6E6E6]">
                        <h2 className='coming-soon'>coming soon</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[300px] md:h-[350px] lg:h-[402px] xl:h-[442px] flex justify-center items-center bg-[#F3F3F3] border-[1.5px] border-[#E6E6E6]">
                        <h2 className='coming-soon'>coming soon</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[300px] md:h-[350px] lg:h-[402px] xl:h-[442px] flex justify-center items-center bg-[#F3F3F3] border-[1.5px] border-[#E6E6E6]">
                        <h2 className='coming-soon'>coming soon</h2>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="container mx-auto mt-[70px] sm:mt-[80px] lg:mt-[135px] mb-[50px] sm:mb-[70px] lg:mb-[96px]">
                <div className="flex items-center sm:px-[0] px-[24px]">
                    <button className='soculmediabutton px-[14px] sm:px-[16px] md:px-[18px] lg:px-[20px] xl:px-[22px] 2xl:px-[24.39px] py-[9px] sm:py-[10px] md:py-[11px] lg:py-[12px] xl:py-[13px] 2xl:py-[14.63px] 2xl:text-[17.07px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] uppercase rounded-e-md sm:rounded-lg lg:rounded-xl'>twitter</button>
                    <button className='soculmediabutton px-[14px] sm:px-[16px] md:px-[18px] lg:px-[20px] xl:px-[22px] 2xl:px-[24.39px] py-[9px] sm:py-[10px] md:py-[11px] lg:py-[12px] xl:py-[13px] 2xl:py-[14.63px] 2xl:text-[17.07px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] uppercase rounded-e-md sm:rounded-lg lg:rounded-xl'>telegram</button>
                    <button className='soculmediabutton px-[14px] sm:px-[16px] md:px-[18px] lg:px-[20px] xl:px-[22px] 2xl:px-[24.39px] py-[9px] sm:py-[10px] md:py-[11px] lg:py-[12px] xl:py-[13px] 2xl:py-[14.63px] 2xl:text-[17.07px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] uppercase rounded-e-md sm:rounded-lg lg:rounded-xl'>instagram</button>
                </div>
            </div>
        </div>
    );
};

export default Page2;