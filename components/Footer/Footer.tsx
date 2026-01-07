import React from 'react'
import DownloadAppWhite from '../Button/DownloadAppWhite'
import Image from 'next/image'
import Email from '../Button/Email'

function Footer() {
    return (
        <footer className=" mt-12 pt-12 pb-8">
            <div className='rounded-4xl p-[2px]' style={{ background: 'linear-gradient(to bottom, rgba(222, 222, 222, 1) 0%, rgba(222, 222, 222, 0) 100%)' }}>
            <div className='bg-white rounded-4xl'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 p-10'>
                <div className=''>
                    <h1 className='title '>
                        SIXFINITY
                    </h1>
                    <p className='description mt-8 mb-4'>
                    An all-in-one fitness platform to manage workouts, members, and performance with speed, clarity, and control.                    </p>
                    <DownloadAppWhite />

                </div>
                <div className='hidden lg:block'>

                </div>
                <div className=''>
                    <div className='flex flex-col gap-4'>

                        <ul className='flex flex-row gap-4 flex-wrap items-start justify-start lg:items-end lg:justify-end'>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Program</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-row gap-4 mt-4 mb-6 items-start justify-start lg:items-end lg:justify-end">
                        <Image
                            src="/images/Home/Googleplay1.png"
                            alt="google"
                            width={200}
                            height={60}
                            quality={100}
                            className="w-auto h-[30px] sm:w-auto sm:h-8 md:w-auto md:h-10 lg:w-auto lg:h-[40px] xl:w-auto xl:h-[45px] 2xl:w-auto 2xl:h-[50px] object-contain"
                        />
                        <Image
                            src="/images/Home/DownloadApple.png"
                            alt="apple"
                            width={200}
                            height={60}
                            quality={100}
                            className="w-auto h-[30px] sm:w-auto sm:h-8 md:w-auto md:h-10 lg:w-auto lg:h-[40px] xl:w-auto xl:h-[45px] 2xl:w-auto 2xl:h-[50px] object-contain"
                        />
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 p-10 items-end'>
                <div className='flex flex-row gap-4 items-end'>
                    <Image src="/images/Icons/Facebook.svg" alt="logo" width={100} height={100} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 object-contain" />
                    <Image src="/images/Icons/Insta.svg" alt="logo" width={100} height={100} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 object-contain" />
                    <Image src="/images/Icons/Youtube.svg" alt="logo" width={100} height={100} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 object-contain" />
                </div>
                <div className='flex items-start lg:items-end'>
                    <p className='description text-left lg:text-center w-full'>
                        &copy; 2026 SIXFINITY. All rights reserved.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <h1 className='title '>
                    Have a Question? Let’s Talk
                    </h1>
                    <p className='description'>
                    Send us your questions and our team will help you get started right away.
                    </p>
                    <Email />
                </div>
            </div>
            </div>
            </div>
            <Image src="/images/Icons/SIXFINITY.svg" alt="logo" width={0} height={0} sizes="100vw" className="w-full h-auto object-contain" />

        </footer>
    )
}

export default Footer