import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import dotedone from "./page3image/Ellipse 45-5.png";
import doted2 from "./page3image/Ellipse 45-4.png";
import doted3 from "./page3image/Ellipse 45-3.png";
import doted4 from "./page3image/Ellipse 45-2.png";
import doted5 from "./page3image/Ellipse 45-1.png";
import doted6 from "./page3image/Ellipse 45.png";

Chart.register(...registerables);

const Page3 = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        const donutChart = new Chart(ctx, {
            type: 'doughnut', // Use 'doughnut' for a donut chart
            data: {
                
                datasets: [{
                    label: 'MAX SUPPLY',
                    data: [40, 30, 7.5, 7.5, 7.5, 7.5, 7.5], // Example data values
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#4BC0C0',
                        '#9966FF',
                        '#FF9F40',
                        '#FFB7C2'
                    ],
                    hoverOffset: 4,
                }],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                            },
                        },
                    },
                },
            },
        });

        return () => {
            donutChart.destroy(); // Cleanup on component unmount
        };
    }, []);

    return (
        <div className="pagethreebackgroundimage py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] xl:py-[140px] 2xl:py-[160px]">
            <div className="container mx-auto bg-[#29292933] backdrop-blur-[29.4px] py-[30px] sm:py-[35px] md:py-[40px] lg:py-[45px] xl:py-[50px] 2xl:py-[53px] px-[40px] sm:px-[55px] md:px-[70px] lg:px-[85px] xl:px-[100px] 2xl:px-[114px] rounded-[15px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] 2xl:rounded-[40px] ">
                <div className="flex gap-9 justify-between items-center flex-col md:flex-row">
                    <div className="relative w-full flex-1 xl:flex-auto">
                        <h1 className="text-[#000] w-[120px] sm:w-[170px] md:w-[120px] lg:w-[170px] xl:w-[220px] 2xl:w-[254.97px] h-[120px] sm:h-[170px] md:h-[120px] lg:h-[170px] xl:h-[220px] 2xl:h-[254.97px] flex justify-center items-center rounded-full  bg-[#FFE169]  absolute mt-[5px] lg:mt-[7px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[11px] sm:text-[15px] leading-[20px] sm:leading-[20px] lg:leading-[31.23px] md:text-[12px] lg:text-[15px] xl:text-[21px] 2xl:text-[23.55px] max-supply">Max Supply: <br />
                        20,000,000,000</h1>
                    <canvas ref={canvasRef}></canvas>
                    </div>
                    <div className="w-full flex-1 xl:flex-auto" >
                        <h2 className='Tokenomics text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] uppercase text-[#fff] mb-[10] lg:mb-[20px]'>Tokenomics</h2>
                        <p className='pax-suppely  text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px] 2xl:text-[54.66px] w-fit text-[#fff]'>Max Supply: 20,000,000,000</p>
                        <div className=" flex justify-between items-start mt-[30px] sm:mt-[35px] md:mt-[40px] lg:mt-[45px] xl:mt-[50px] 2xl:mt-[56px]">
                        <ul className='flex flex-col gap-[40px]'>
                            <li className='doted-area flex justify-start items-center gap-[6px] lg:gap-[12px] text-[15] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24.97px]'><img className='w-[24px] sm:w-[26px] md:w-[28px] lg:w-[30px] xl:w-[35px]' src={dotedone} alt="" /> Liquidity 40%</li>
                            <li className='doted-area flex justify-start items-center gap-[6px] lg:gap-[12px] text-[15] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24.97px]'> <img className='w-[24px] sm:w-[26px] md:w-[28px] lg:w-[30px] xl:w-[35px]'g src={doted2} alt="" /> Marketing 7.5%</li>
                            <li className='doted-area flex justify-start items-center gap-[6px] lg:gap-[12px] text-[15] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24.97px]'> <img className='w-[24px] sm:w-[26px] md:w-[28px] lg:w-[30px] xl:w-[35px]'g src={doted3} alt="" />Burns 7.5%</li>
                        </ul>
                        <ul className='flex flex-col gap-[40px]'>
                            <li className='doted-area flex justify-start items-center gap-[6px] lg:gap-[12px] text-[15] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24.97px]'> <img className='w-[24px] sm:w-[26px] md:w-[28px] lg:w-[30px] xl:w-[35px]'g src={doted4} alt="" />Presale 30%</li>
                            <li className='doted-area flex justify-start items-center gap-[6px] lg:gap-[12px] text-[15] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24.97px]'> <img className='w-[24px] sm:w-[26px] md:w-[28px] lg:w-[30px] xl:w-[35px]'g src={doted5} alt="" />CEX listing 7.5%</li>
                            <li className='doted-area flex justify-start items-center gap-[6px] lg:gap-[12px] text-[15] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24.97px]'> <img className='w-[24px] sm:w-[26px] md:w-[28px] lg:w-[30px] xl:w-[35px]'g src={doted6} alt="" />Puggy Games 7.5%</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;
