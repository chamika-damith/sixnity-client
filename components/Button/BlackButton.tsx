import React from 'react'
import Image from 'next/image'

function BlackButton() {
  return (
    <div>
    <div>
        <button className="buttonblack">
            <div className='flex items-center gap-2'>
                <p className='py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-6 lg:py-2 lg:px-4 xl:py-3 xl:px-4 2xl:py-3 2xl:px-6'>
                    Get Started Today
                </p>
                <Image src="/images/Icons/GreenIcon.png" alt="arrow" width={20} height={20} className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-8 2xl:h-8 mr-2' />
            </div>
        </button>
    </div>
</div>
  )
}

export default BlackButton