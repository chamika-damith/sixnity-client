import React from 'react'
import Image from 'next/image'

function Secton3() {
    return (
        <div className='mt-12 '>
            <div>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-center'>
                    Affordable Plans.
                </h1>
                <div className='flex flex-col sm:flex-row gap-4 border-2 border-secondary py-2 px-4 sm:px-4 sm:py-2 rounded-4xl sm:rounded-full mx-auto w-full sm:w-fit mt-6'>
                    <button className="buttonblack w-full sm:w-auto">
                        <div className='flex items-center gap-2 justify-center'>
                            <p className='py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-6 lg:py-2 lg:px-4 xl:py-3 xl:px-4 2xl:py-3 2xl:px-6'>
                                Gyn Owners
                            </p>
                            <Image src="/images/Icons/GreenIcon.png" alt="arrow" width={20} height={20} className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-8 2xl:h-8 mr-2' />
                        </div>
                    </button>

                    <button className="buttonwhite w-full sm:w-auto">
                        <div className='flex items-center gap-2 justify-center'>
                            <p className='py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-6 lg:py-2 lg:px-4 xl:py-3 xl:px-4 2xl:py-3 2xl:px-6'>
                                Gyn Owners
                            </p>
                            <Image src="/images/Icons/GreenIcon.png" alt="arrow" width={20} height={20} className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-8 2xl:h-8 mr-2' />
                        </div>
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 mt-12 overflow-visible px-0 sm:px-12 md:px-16 lg:px-40 xl:px-0 items-stretch'>
                {/* BASIC Plan */}
                <div className='bg-secondary rounded-4xl p-8 sm:p-12 md:p-12 lg:p-10 xl:p-12 2xl:p-12 flex flex-col h-full'>
                    <div className='flex items-center gap-3 mb-4 '>
                        <h2 className='text-white text-xl sm:text-2xl font-bold font-neutiva'>BASIC</h2>
                        {/* <Image src="/images/Program/Icon1.svg" alt="basic icon" width={24} height={24} className='w-6 h-6' /> */}
                    </div>
                    <div className='mb-4'>
                        <span className='text-white text-4xl sm:text-5xl font-bold font-neutiva'>$299</span>
                        <span className='text-white text-lg ml-2 font-neutiva'>/ Month</span>
                    </div>
                    <p className='text-white/80 text-sm sm:text-base mb-6 font-neutiva'>
                        Perfect for beginners who want access to best without committing to an intensive schedule.
                    </p>
                    <button className="buttonwhite rounded-lg mb-6 w-full">
                        <div className='flex items-center gap-2 justify-center'>
                            <p className='py-2 px-4 font-neutiva'>Get Free Trial</p>
                            <Image src="/images/Icons/GreenIcon.png" alt="arrow" width={20} height={20} className='w-5 h-5' />
                        </div>
                    </button>
                    <div className='mt-auto'>
                        <div className='flex items-center justify-center gap-4 mb-4'>
                            <div className='flex-1 h-px bg-white/30'></div>
                            <h3 className='text-white/70 text-sm sm:text-base font-bold font-neutiva uppercase my-6'>FEATURES</h3>
                            <div className='flex-1 h-px bg-white/30'></div>
                        </div>
                        <div className='bg-white/10 border border-white/20 rounded-lg p-4'>
                            <ul className='space-y-3'>
                                <li className='flex items-center gap-3'>
                                    <div className='w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0'>
                                        <svg className='w-3 h-3 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                        </svg>
                                    </div>
                                    <span className='text-white/70 text-sm sm:text-base font-neutiva'>Access to gym equipment</span>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0'>
                                        <svg className='w-3 h-3 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                        </svg>
                                    </div>
                                    <span className='text-white/70 text-sm sm:text-base font-neutiva'>Free water station</span>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0'>
                                        <svg className='w-3 h-3 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                        </svg>
                                    </div>
                                    <span className='text-white/70 text-sm sm:text-base font-neutiva'>Locker usage</span>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0'>
                                        <svg className='w-3 h-3 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                        </svg>
                                    </div>
                                    <span className='text-white/70 text-sm sm:text-base font-neutiva'>Open gym hours only</span>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0'>
                                        <svg className='w-3 h-3 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                        </svg>
                                    </div>
                                    <span className='text-white/70 text-sm sm:text-base font-neutiva'>1x free class / bulan</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* STANDARD Plan - Most Popular */}
                 <div className='bg-secondary rounded-4xl p-8 sm:p-12 md:p-12 lg:p-10 xl:p-12 2xl:p-12 flex flex-col relative overflow-visible h-full'>
                    <div className='absolute -top-3 right-4 bg-primary rounded-full px-4 py-1.5 flex items-center gap-1.5 z-20 shadow-lg'>
                        <span className='text-secondary text-sm'>🔥</span>
                        <span className='text-secondary text-xs sm:text-sm font-bold font-neutiva'>Most Popular</span>
                    </div>
                    <div className='flex items-center gap-3 mb-4'>
                        <h2 className='text-white text-xl sm:text-2xl font-bold font-neutiva'>STANDARD</h2>
                        {/* <Image src="/images/Program/Icon2.svg" alt="standard icon" width={24} height={24} className='w-6 h-6' /> */}
                    </div>
                    <div className='mb-4'>
                        <span className='text-white text-4xl sm:text-5xl font-bold font-neutiva'>$399</span>
                        <span className='text-white text-lg ml-2 font-neutiva'>/ Month</span>
                    </div>
                    <p className='text-white/80 text-sm sm:text-base mb-6 font-neutiva'>
                        Ideal regular gym-goers who want unlimited at guidance to reach their goals faster.
                    </p>
                    <button className="bg-primary text-secondary rounded-full mb-6 w-full font-neutiva">
                        <div className='flex items-center gap-2 justify-center'>
                            <p className='py-2 px-4 font-bold'>Get Free Trial</p>
                            <Image src="/images/Icons/GreenIcon.png" alt="arrow" width={20} height={20} className='w-5 h-5' />
                        </div>
                    </button>
                    <div className='mt-auto'>
                        <div className='flex items-center justify-center gap-4 mb-4'>
                            <div className='flex-1 h-px bg-white/30'></div>
                            <h3 className='text-white/70 text-sm sm:text-base font-bold font-neutiva uppercase my-6'>FEATURES</h3>
                            <div className='flex-1 h-px bg-white/30'></div>
                        </div>
                        <div className='bg-white/10 border border-white/20 rounded-lg p-4'>
                            <ul className='space-y-3'>
                                <li className='flex items-center gap-3'>
                                    <div className='w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0'>
                                        <svg className='w-3 h-3 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                        </svg>
                                    </div>
                                    <span className='text-white/70 text-sm sm:text-base font-neutiva'>All Basic features</span>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0'>
                                        <svg className='w-3 h-3 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                        </svg>
                                    </div>
                                    <span className='text-white/70 text-sm sm:text-base font-neutiva'>Unlimited group classes</span>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0'>
                                        <svg className='w-3 h-3 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                        </svg>
                                    </div>
                                    <span className='text-white/70 text-sm sm:text-base font-neutiva'>Free fitness assessment</span>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0'>
                                        <svg className='w-3 h-3 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                        </svg>
                                    </div>
                                    <span className='text-white/70 text-sm sm:text-base font-neutiva'>Sauna & shower access</span>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0'>
                                        <svg className='w-3 h-3 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                        </svg>
                                    </div>
                                    <span className='text-white/70 text-sm sm:text-base font-neutiva'>3x personal training / bulan</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* PREMIUM Plan */}
                <div className='bg-secondary rounded-4xl p-8 sm:p-12 md:p-12 lg:p-10 xl:p-12 2xl:p-12 flex flex-col h-full'>
                    <div className='flex items-center gap-3 mb-4'>
                        <h2 className='text-white text-xl sm:text-2xl font-bold font-neutiva'>PREMIUM</h2>
                        {/* <Image src="/images/Program/Icon4.svg" alt="premium icon" width={24} height={24} className='w-6 h-6' /> */}
                    </div>
                    <div className='mb-4'>
                        <span className='text-white text-4xl sm:text-5xl font-bold font-neutiva'>$499</span>
                        <span className='text-white text-lg ml-2 font-neutiva'>/ Month</span>
                    </div>
                    <p className='text-white/80 text-sm sm:text-base mb-6 font-neutiva'>
                        Designed for serious fitness enthusiasts want at full access, unlimited personal training.
                    </p>
                    <button className="buttonwhite rounded-lg mb-6 w-full">
                        <div className='flex items-center gap-2 justify-center'>
                            <p className='py-2 px-4 font-neutiva'>Get Free Trial</p>
                            <Image src="/images/Icons/GreenIcon.png" alt="arrow" width={20} height={20} className='w-5 h-5' />
                        </div>
                    </button>
                    <div className='mt-auto'>
                        <div className='flex items-center justify-center gap-4 mb-4'>
                            <div className='flex-1 h-px bg-white/30'></div>
                            <h3 className='text-white/70 text-sm sm:text-base font-bold font-neutiva uppercase my-6'>FEATURES</h3>
                            <div className='flex-1 h-px bg-white/30'></div>
                        </div>
                        <div className='bg-white/10 border border-white/20 rounded-lg p-4'>
                            <ul className='space-y-3'>
                                <li className='flex items-center gap-3'>
                                    <div className='w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0'>
                                        <svg className='w-3 h-3 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                        </svg>
                                    </div>
                                    <span className='text-white/70 text-sm sm:text-base font-neutiva'>All Standard features</span>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0'>
                                        <svg className='w-3 h-3 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                        </svg>
                                    </div>
                                    <span className='text-white/70 text-sm sm:text-base font-neutiva'>Unlimited personal training</span>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0'>
                                        <svg className='w-3 h-3 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                        </svg>
                                    </div>
                                    <span className='text-white/70 text-sm sm:text-base font-neutiva'>Priority booking for classes</span>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0'>
                                        <svg className='w-3 h-3 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                        </svg>
                                    </div>
                                    <span className='text-white/70 text-sm sm:text-base font-neutiva'>Exclusive member lounge</span>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0'>
                                        <svg className='w-3 h-3 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                        </svg>
                                    </div>
                                    <span className='text-white/70 text-sm sm:text-base font-neutiva'>Free merchandise kit</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* check */}
            {/* Checkout Modal */}
        </div>
    )
}

export default Secton3