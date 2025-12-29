import React from 'react'
import Image from 'next/image'
import BlackButton from '../Button/BlackButton'

function Section5() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 items-center justify-center mt-12'>
            <div className='col-span-1 lg:col-span-1 order-2 lg:order-1 px-8 sm:px-18 md:px-25 lg:px-0 xl:px-0 2xl:px-0'>
                <Image
                    src="/images/Home/Section5/MobileApp1.png"
                    alt="Analys"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className='w-full h-auto object-contain'
                />
            </div>

            <div className='col-span-1 lg:col-span-2 bg-third rounded-4xl p-6 sm:p-16 md:p-18 lg:p-8 xl:p-12 2xl:p-12 order-1 lg:order-2'>

                <h3 className='title mb-4'>
                    Your Body, Your Data, Your Progress
                </h3>
                <p className='description mb-4'>
                    Track every meal, workout, and calorie in one smart system built to keep you consistent, motivated, and improving every single day without confusion or complexity.
                </p>
                <div className='mb-12 sm:mb-16 md:mb-18 lg:mb-8 xl:mb-12 2xl:mb-12'>
                    <BlackButton />
                </div>
                <div className='mb-4'>
                    <div className='flex gap-2 items-start'>
                        <div className='shrink-0 pt-1'>
                            <Image
                                src="/images/Home/Section5/Icon1.svg"
                                alt="Analys"
                                width={240}
                                height={240}
                                className='w-8 h-8 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14'
                            />
                        </div>
                        <div className='flex-1'>
                            <p className='font-regular text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-2xl'>
                                Personalized Nutrition & Meal Tracking
                            </p>
                            <p className='small-description'>
                                Plan meals, track calories, and stay on target with smart food logging designed for real lifestyles.
                            </p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex gap-2 items-start'>
                        <div className='shrink-0 pt-1'>
                            <Image
                                src="/images/Home/Section5/Icon1.svg"
                                alt="Analys"
                                width={240}
                                height={240}
                                className='w-8 h-8 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14'
                            />
                        </div>
                        <div className='flex-1'>
                            <p className='font-regular text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-2xl'>
                            Smart Workout & Activity Monitoring
                            </p>
                            <p className='small-description'>
                            Every movement counts. Track workouts, water intake, and daily activity with real-time progress updates.
                            </p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex gap-2 items-start'>
                        <div className='shrink-0 pt-1'>
                            <Image
                                src="/images/Home/Section5/Icon1.svg"
                                alt="Analys"
                                width={240}
                                height={240}
                                className='w-8 h-8 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14'
                            />
                        </div>
                        <div className='flex-1'>
                            <p className='font-regular text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-2xl'>
                            AI-Powered Fitness & Meal Suggestions
                            </p>
                            <p className='small-description'>
                            Get intelligent recommendations that adapt to your goals and performance for better results.
                            </p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                

            </div>

            <div className='col-span-1 lg:col-span-1 order-3 lg:order-3 px-8 sm:px-18 md:px-25 lg:px-0 xl:px-0 2xl:px-0'>
                <Image
                    src="/images/Home/Section5/MobileApp2.png"
                    alt="Analys"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className='w-full h-auto object-contain'
                />
            </div>

        </div>
    )
}

export default Section5