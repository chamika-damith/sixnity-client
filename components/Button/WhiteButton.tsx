import React from 'react'
import Image from 'next/image'

function WhiteButton() {
    return (
        <div className="w-full">
            <button className="buttonwhite w-full">
                <div className='flex items-center gap-2 justify-start pl-2'>
                    <Image src="/images/Icons/GreenIcon.png" alt="arrow" width={20} height={20} className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-8 2xl:h-8 
                    my-2 sm:my-2 md:my-2 lg:my-2 xl:my-2 2xl:my-2' />
                    <p className=' pl-2 sm:pl-2 md:pl-2 lg:pl-0 xl:pl-2 2xl:pl-2'>
                        Your Progress Starts Here
                    </p>
                </div>
            </button>
        </div>
    )
}

export default WhiteButton