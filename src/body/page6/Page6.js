import React from 'react';
import Linkone from './page6image/Link.png';
import Link2 from './page6image/Link1.png';
import Link3 from './page6image/Link3.png';
import Link4 from './page6image/Link4.png';
import Link5 from './page6image/Link5.png';
import Link6 from './page6image/Link6.png';

const Page6 = () => {
    return (
        <div>
            <div className="container mx-auto mb-[50px] md:mb-[70px] lg:mb-[90px] xl:mb-[120px] 2xl:mb-[150px]">
                <h2 className='partner text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px] uppercase mt-[30px] sm:mt-[40px] lg:mt-[86px] mb-[20px] sm:mb-[25px] lg:mb-[40px]'>partner</h2>
                <div className="px-[15%]">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 lg:gap-8">
                        <button><img className='w-full' src={Linkone} alt="" /></button>
                        <button><img className='w-full' src={Link2} alt="" /></button>
                        <button><img className='w-full' src={Link3} alt="" /></button>
                        <button><img className='w-full' src={Link4} alt="" /></button>
                        <button><img className='w-full' src={Link5} alt="" /></button>
                        <button><img className='w-full' src={Link6} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page6;