import React from 'react'
import GetStartButton from '../Button/GetStartButton';
import Image from 'next/image';

function Section2() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 mt-12'>
            <div className='col-span-1 lg:col-span-3 bg-third rounded-4xl p-8 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-12'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-semibold'>
                    Why SIXNITIY ?
                </h2>
                <div className='grid xl:grid-cols-5 gap-4 mt-6'>
                    <div className='xl:col-span-3'>
                        <p className='text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-lg text-text-secondary'>
                        From gym operations to personal coaching and member progress, everything works together in one smart system.                        </p>
                    </div>
                    <div className='xl:col-span-2 flex sm:justify-end sm:items-end'>
                        <GetStartButton />
                    </div>
                </div>
            </div>
            <div className='col-span-1 lg:col-span-2 bg-third rounded-4xl p-4   sm:p-6 md:p-6 lg:p-6 xl:p-7 2xl:p-6'>
                <Image src="/images/Home/Section2/DailyFitness.png" alt="Section2" width={0} height={0} sizes="100vw" className='w-full h-auto rounded-3xl' />
                <div className='px-0 sm:px-6 md:px-6 lg:px-3 xl:px-0 2xl:px-6'>
                <h1 className='text-lg sm:text-3xl md:text-4xl lg:text-xl xl:text-2xl 2xl:text-2xl  mt-6 text-center'>
                Your Daily Fitness Insights
                </h1>
                <p className='text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base text-text-secondary text-center mt-2' >
                Track workouts, performance, and progress in real time from any device.
                        </p> 
                        </div>
            </div>
        </div>
    );
}

export default Section2;