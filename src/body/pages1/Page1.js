import React, { useRef } from 'react'; // Add useRef to your imports
import imagesone from './pages1images/Group 1171275386.png'; // Your image path
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination'; // Import pagination styles
import { Navigation } from 'swiper/modules'; // Import Navigation and Pagination modules
import next from './pages1images/next.png';
import previous from './pages1images/previus.png';
import oerlayimage from './pages1images/telegram-cloud-photo-size-4-5807846698721068229-y 1.png';

const Page1 = () => {
    const swiperRef = useRef(null); // Create a ref for the Swiper
    return (
        <div className='pages1backgrouondimages pt-[50px] sm:pt-[70px] md:pt-[90px] lg:pt-[100px] xl:pt-[110px] 2xl:pt-[120px] pb-[40px] lg:pb-[50px] 2xl:pb-[60px] relative'>
            <div className="">
                <h2 className='text-center aoutsection mb-[44px] text-[40px] sm:text-[45px] md:text-[55px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px]'>About us</h2>
            </div>
            <div className="container mx-auto overflow-hidden sm:px-[20px] px-[24px]">
                {/* Swiper container */}
                <Swiper
                    ref={swiperRef} // Attach the ref here
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation={false} // Disable built-in navigation
                    pagination={{ clickable: true }} // Enable pagination (dots)
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                      }}
                      modules={[Navigation]}
                      breakpoints={{
                        40: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                          },
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                      }}
                    loop={true} // Enable looping
                >
                    {/* First Slide */}
                    <SwiperSlide>
                        <div className="relative ">
                            <img className=' w-screen z-0' src={imagesone} alt="Puggy" />
                            <div className="absolute z-[1] px-[16px] sm:px-[18px] md:px-[20px] lg:px-[22px] xl:px-[25px] 2xl:px-[27px] bg-[#E9FEFFCC] bottom-[60px] sm:bottom-[100px] md:bottom-[51px] xl:bottom-[68px] 2xl:bottom-[79px] w-[78%] ml-[45px] sm:ml-[75.5px] md:ml-[38px] xl:ml-[48px] 2xl:ml-[58px] rounded-b-[20px] text-center">
                                <h2 className='slidepoggy pt-[20px]  sm:pt-[15px] md:pt-[20px] xl:pt-[27px] pb-[6px] lg:pb-[8px] text-[30px] md:text-[28px] xl:text-[35px] uppercase'>Puggy</h2>
                                <p className='slidepoggypragraph leading-[20px] md:leading-[24px] lg:leading-[20px] xl:leading-[24px] 2xl:leading-[28.6px] text-[18px] sm:text-[24px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] pb-[15px] md:pb-auto px-[8px] sm:px-[10%] md:px-[0] md:px-auto'>
                                    Spartan Pudgy is a fearless warrior, unstoppable in any battle. With unmatched insight and endurance, he fights for glory, where defeat is never an option.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Second Slide */}
                    <SwiperSlide>
                        <div className="relative ">
                            <img className=' w-screen z-0' src={imagesone} alt="Puggy" />
                            <div className="absolute z-[1] px-[16px] sm:px-[18px] md:px-[20px] lg:px-[22px] xl:px-[25px] 2xl:px-[27px] bg-[#E9FEFFCC] bottom-[60px] sm:bottom-[100px] md:bottom-[51px] xl:bottom-[68px] 2xl:bottom-[79px] w-[78%] ml-[45px] sm:ml-[75.5px] md:ml-[38px] xl:ml-[48px] 2xl:ml-[58px] rounded-b-[20px] text-center">
                                <h2 className='slidepoggy pt-[20px]  sm:pt-[15px] md:pt-[20px] xl:pt-[27px] pb-[6px] lg:pb-[8px] text-[30px] md:text-[28px] xl:text-[35px] uppercase'>Puggy</h2>
                                <p className='slidepoggypragraph leading-[20px] md:leading-[24px] lg:leading-[20px] xl:leading-[24px] 2xl:leading-[28.6px] text-[18px] sm:text-[24px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] pb-[15px] md:pb-auto px-[8px] sm:px-[10%] md:px-[0] md:px-auto'>
                                    Spartan Pudgy is a fearless warrior, unstoppable in any battle. With unmatched insight and endurance, he fights for glory, where defeat is never an option.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Third Slide */}
                    <SwiperSlide>
                        <div className="relative ">
                            <img className=' w-screen z-0' src={imagesone} alt="Puggy" />
                            <div className="absolute z-[1] px-[16px] sm:px-[18px] md:px-[20px] lg:px-[22px] xl:px-[25px] 2xl:px-[27px] bg-[#E9FEFFCC] bottom-[60px] sm:bottom-[100px] md:bottom-[51px] xl:bottom-[68px] 2xl:bottom-[79px] w-[78%] ml-[45px] sm:ml-[75.5px] md:ml-[38px] xl:ml-[48px] 2xl:ml-[58px] rounded-b-[20px] text-center">
                                <h2 className='slidepoggy pt-[20px]  sm:pt-[15px] md:pt-[20px] xl:pt-[27px] pb-[6px] lg:pb-[8px] text-[30px] md:text-[28px] xl:text-[35px] uppercase'>Puggy</h2>
                                <p className='slidepoggypragraph leading-[20px] md:leading-[24px] lg:leading-[20px] xl:leading-[24px] 2xl:leading-[28.6px] text-[18px] sm:text-[24px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] pb-[15px] md:pb-auto px-[8px] sm:px-[10%] md:px-[0] md:px-auto'>
                                    Spartan Pudgy is a fearless warrior, unstoppable in any battle. With unmatched insight and endurance, he fights for glory, where defeat is never an option.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative ">
                            <img className=' w-screen z-0' src={imagesone} alt="Puggy" />
                            <div className="absolute z-[1] px-[16px] sm:px-[18px] md:px-[20px] lg:px-[22px] xl:px-[25px] 2xl:px-[27px] bg-[#E9FEFFCC] bottom-[60px] sm:bottom-[100px] md:bottom-[51px] xl:bottom-[68px] 2xl:bottom-[79px] w-[78%] ml-[45px] sm:ml-[75.5px] md:ml-[38px] xl:ml-[48px] 2xl:ml-[58px] rounded-b-[20px] text-center">
                                <h2 className='slidepoggy pt-[20px]  sm:pt-[15px] md:pt-[20px] xl:pt-[27px] pb-[6px] lg:pb-[8px] text-[30px] md:text-[28px] xl:text-[35px] uppercase'>Puggy</h2>
                                <p className='slidepoggypragraph leading-[20px] md:leading-[24px] lg:leading-[20px] xl:leading-[24px] 2xl:leading-[28.6px] text-[18px] sm:text-[24px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] pb-[15px] md:pb-auto px-[8px] sm:px-[10%] md:px-[0] md:px-auto'>
                                    Spartan Pudgy is a fearless warrior, unstoppable in any battle. With unmatched insight and endurance, he fights for glory, where defeat is never an option.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative ">
                            <img className=' w-screen z-0' src={imagesone} alt="Puggy" />
                            <div className="absolute z-[1] px-[16px] sm:px-[18px] md:px-[20px] lg:px-[22px] xl:px-[25px] 2xl:px-[27px] bg-[#E9FEFFCC] bottom-[60px] sm:bottom-[100px] md:bottom-[51px] xl:bottom-[68px] 2xl:bottom-[79px] w-[78%] ml-[45px] sm:ml-[75.5px] md:ml-[38px] xl:ml-[48px] 2xl:ml-[58px] rounded-b-[20px] text-center">
                                <h2 className='slidepoggy pt-[20px]  sm:pt-[15px] md:pt-[20px] xl:pt-[27px] pb-[6px] lg:pb-[8px] text-[30px] md:text-[28px] xl:text-[35px] uppercase'>Puggy</h2>
                                <p className='slidepoggypragraph leading-[20px] md:leading-[24px] lg:leading-[20px] xl:leading-[24px] 2xl:leading-[28.6px] text-[18px] sm:text-[24px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] pb-[15px] md:pb-auto px-[8px] sm:px-[10%] md:px-[0] md:px-auto'>
                                    Spartan Pudgy is a fearless warrior, unstoppable in any battle. With unmatched insight and endurance, he fights for glory, where defeat is never an option.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Next Slide Button */}
                
                </Swiper>
                <div className="flex justify-end items-center gap-[10px] sm:gap-[12px] md:gap-[14px] lg:gap-[16px] xl:gap-[18px] 2xl:gap-[20px] mt-[70px]">
                    <div className="custom-prev w-[30px] lg:w-[52px] 2xl:w-[62px] h-[30px] lg:h-[52px] 2xl:h-[62px] cursor-pointer hidden lg:block">
                        <img src={next} alt="" />
                    </div>
                    <div className="custom-next w-[30px] lg:w-[52px] 2xl:w-[62px] h-[30px] lg:h-[52px] 2xl:h-[62px] cursor-pointer hidden lg:block">
                        <img src={previous} alt="" />
                    </div>
                    <img className=' absolute mt-[170px] left-[50%] bottom-[-7%] sm:bottom-auto translate-x-[-50%] w-[50%] sm:w-auto' src={oerlayimage} alt="" />
                </div>
                
            </div>
            
        </div>
    );
};

export default Page1;
