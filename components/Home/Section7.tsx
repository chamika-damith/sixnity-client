import React from 'react'
import Image from 'next/image'

function Section7() {
  return (
    <div className='mt-12'>
        <div className='grid grid-cols-1 lg:grid-cols-3  items-stretch'>
        <div className='grid grid-rows-1 lg:grid-rows-2 gap-4 h-full w-full rounded-4xl py-6 sm:py-12 md:py-16 lg:py-6 xl:py-12 2xl:py-12'>
                <div className=' w-full h-full rounded-lg p-4 flex flex-col'>
                    <div className='flex-1'></div>
                    <div className='flex flex-col mt-auto'>
                        
                        <div className='flex justify-end mb-4'>
                            <div className='bg-[#DBEC5B] px-4 py-2 rounded-lg w-fit'>
                                <p className='button-description'>
                                Real-Time Body Composition
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center mb-2'>
                            <div className='bg-black h-[2px] flex-1 mr-2'></div>
                            <div className='border-2 border-black rounded-full p-1'>
                                <div className='bg-black w-2 h-2 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-full h-full rounded-lg p-4 flex flex-col'>
                    <div className='flex-1'></div>
                    <div className='flex flex-col mt-auto'>
                        
                        <div className='flex justify-end mb-4'>
                            <div className='bg-[#DBEC5B] px-4 py-2 rounded-lg w-fit'>
                                <p className='button-description'>
                                Real-Time Body Composition
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center mb-2'>
                            <div className='bg-black h-[2px] flex-1 mr-2'></div>
                            <div className='border-2 border-black rounded-full p-1'>
                                <div className='bg-black w-2 h-2 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[80%] sm:w-[40%] md:w-[50%] lg:w-[80%] xl:w-[70%] 2xl:w-[70%] mx-auto flex items-center justify-center'>
              <Image src="/images/Home/Section7/MobileApp.png" alt="Image1" width={0} height={0} sizes="100vw" className='w-full h-auto object-contain' />
            </div>
            <div className='grid grid-rows-1 lg:grid-rows-2 gap-4 h-full w-full rounded-4xl py-6 sm:py-12 md:py-16 lg:py-6 xl:py-12 2xl:py-12'>
                <div className=' w-full h-full rounded-lg p-4 flex flex-col'>
                    <div className='flex justify-end'>
                        <div className='bg-[#DBEC5B] px-4 py-2 rounded-lg w-fit'>
                            <p className='button-description'>
                            Real-Time Body Composition
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center mt-2'>
                        <div className='border-2 border-black rounded-full p-1'>
                            <div className='bg-black w-2 h-2 rounded-full'></div>
                        </div>
                        <div className='bg-black h-[2px] flex-1 ml-2'></div>
                    </div>
                </div>
                <div className=' w-full h-full rounded-lg p-4 flex flex-col'>
                    <div className='flex justify-end'>
                        <div className='bg-[#DBEC5B] px-4 py-2 rounded-lg w-fit'>
                            <p className='button-description'>
                            Real-Time Body Composition
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center mt-2'>
                        <div className='border-2 border-black rounded-full p-1'>
                            <div className='bg-black w-2 h-2 rounded-full'></div>
                        </div>
                        <div className='bg-black h-[2px] flex-1 ml-2'></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Section7